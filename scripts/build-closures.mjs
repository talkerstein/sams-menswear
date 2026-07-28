/**
 * Generates public/closures.json — the days the booking widget must not offer.
 *
 * Why this exists: the widget only knew about Saturday. It would happily take
 * a fitting request for Rosh Hashanah, which for the community Sam serves is
 * not a small mistake.
 *
 * Run at build time (npm run build) so the site stays static and there is no
 * Hebrew-calendar dependency in the browser. Regenerate when the horizon runs
 * short — it currently covers four years.
 *
 * Deliberate scope:
 *   - YOM TOV is hard-blocked. Melacha is forbidden; this is not a judgment call.
 *   - CHOL HAMOED is NOT blocked, only marked. /about says the studio closes for
 *     it, but Sam was never actually asked, and silently removing ~8 sellable
 *     days a year on our assumption is the more expensive mistake. Confirm, then
 *     flip `blockCholHamoed` below.
 *   - EARLY CLOSE on Fridays and erev chag is computed from real candle-lighting
 *     for the studio's coordinates, minus Sam's stated two hours. The widget had
 *     been hardcoded to stop at 2:30pm year-round, which is roughly right in
 *     December and throws away every summer Friday afternoon.
 */
import { HebrewCalendar, Location, flags } from '@hebcal/core';
import fs from 'node:fs';

const YEARS_AHEAD = 4;
const HOURS_BEFORE_SUNDOWN = 2; // Sam: "Fridays we close two hours before sundown"
const blockCholHamoed = false;  // flip once Sam confirms

// 318 Charlton Avenue, Vaughan
const loc = new Location(43.7939, -79.4606, false, 'America/Toronto', 'Vaughan', 'CA');

const start = new Date();
start.setHours(0, 0, 0, 0);
const end = new Date(start.getFullYear() + YEARS_AHEAD, 11, 31);

const events = HebrewCalendar.calendar({
  start, end, location: loc,
  candlelighting: true, sedrot: false, omer: false, noMinorFast: true,
});

const iso = (ev) => {
  const d = ev.getDate().greg();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

// A yom tov DAY carries LIGHT_CANDLES_TZEIS or YOM_TOV_ENDS itself, because
// those flags describe when the day ends. Filtering on them drops every real
// chag. The only things to exclude are the bare time markers, by name.
const isMarker = (desc) => /^(Candle lighting|Havdalah)$/i.test(desc);

const closed = new Set();
const cholHamoed = new Set();
const earlyClose = {};
const labels = {};

for (const ev of events) {
  const f = ev.getFlags();
  const day = iso(ev);

  if ((f & flags.CHAG) && !isMarker(ev.getDesc())) {
    closed.add(day);
    labels[day] = ev.getDesc();
  }
  if (f & flags.CHOL_HAMOED) {
    cholHamoed.add(day);
    labels[day] = labels[day] || ev.getDesc();
  }
  // Yom Kippur is a fast, not a chag flag in every case: block it explicitly.
  if (/^Yom Kippur$/i.test(ev.getDesc())) {
    closed.add(day);
    labels[day] = 'Yom Kippur';
  }
  // Candle lighting marks the last moment of work, on Fridays and erev chag alike.
  if ((f & flags.LIGHT_CANDLES) && ev.eventTimeStr) {
    const [h, m] = ev.eventTimeStr.split(':').map(Number);
    const cut = h * 60 + m - HOURS_BEFORE_SUNDOWN * 60;
    earlyClose[day] = `${String(Math.floor(cut / 60)).padStart(2, '0')}:${String(cut % 60).padStart(2, '0')}`;
  }
}

if (blockCholHamoed) cholHamoed.forEach((d) => closed.add(d));

// A closed day needs no early-close entry.
for (const d of closed) delete earlyClose[d];

const out = {
  generated: new Date().toISOString().slice(0, 10),
  through: `${end.getFullYear()}-12-31`,
  note: 'Yom Tov is blocked. Chol hamoed is marked, not blocked, pending confirmation from Sam.',
  closed: [...closed].sort(),
  cholHamoed: [...cholHamoed].sort(),
  earlyClose,
  labels,
};

fs.writeFileSync('public/closures.json', JSON.stringify(out, null, 0));
console.log(
  `closures.json: ${out.closed.length} closed days, ${out.cholHamoed.length} chol hamoed, ` +
  `${Object.keys(earlyClose).length} early closes, through ${out.through}`
);
