# HANDOFF — Sam's Menswear (updated 2026-07-26 ~10:20)

**Live:** customsuitandshirt.com (142 pages, Vercel CLI deploys only, author email must be hi@talkerstein.ca).
**North star:** docs/wedding-domination-plan.md. **Slop rules:** the Ration Card below governs ALL future copy.

## In flight RIGHT NOW
- **De-slop mega-pass** (this session): em-dash removal site-wide + ration-card enforcement + creativity pass, fanned out via workflow across pages/data/guides. Homepage garment-grid descs hand-rewritten. After completion: build, grep-verify counts, deploy.
- **Dad questionnaire EMAILED** (Resend 4f1f3bf9 → samskosher@gmail.com, cc+reply-to hi@talkerstein.ca; also docs/dad-questionnaire.md). His answers unblock: real pricing (site currently names NO prices on purpose), production truth, Sunday hours (GMB 9 vs site 10), venues, shatnez, WhatsApp number confirm, photo shoot, 26-measurements verify.

## The Ration Card (enforce forever)
"honest/honestly" <40 sitewide, 1/page max, never in headings · em-dashes ≤2-3/file, none as a crutch · "quiet" cap 2/page · "before a thread is cut" exactly 2 places · "free first fitting / no pressure" never as a stock closer · "unhurried" ≤5 sitewide · "thirty years" 1/page · rental-rebuttal paragraph lives ONLY in custom-vs-rental-wedding-suit.md + the-grooms-suit.md, everywhere else links it.

## ASAP queue (Session A remainder — needs Rishon judgment)
1. Swap FAKE workshop photos: public/media/lookbook/bench.jpg + alterations.jpg (young hands ≠ 60s Sam) → real unused public/media/sam/sam-fitting-shoulder.webp + sam-fitting-cuff.webp (index.astro folio lb-1/lb-7, wedding.astro lb-7). Then delete the fakes.
2. /fabrics relabel: 196 procedural cloths presented as inventory ("the cloths I reach for most" = false). Relabel browsing-library until real mill-book shoot.
3. Mislabeled testimonials: business.astro ~225 "From Bay Street" over a wedding review; traditional.astro ~305 same problem. Relabel "From the reviews".
4. wedding.astro cloths rail: invented meta ("Italian super 130s", "280g") — keep names, drop fake specs.
5. locations.js venue-history: Casa Loma/King Edward/Eagles Nest asserted as client history — reframe future-facing ("Getting married at X? ...").
6. "Twenty-six measurements" (~20 mentions incl. schema/llms.txt) — awaiting Sam.

## Sessions queued
- **B:** money-page mold-breaking (3× "cut for one X" h2s, interchangeable ledes, garments.js strawman intros + mail-merge closers).
- **C:** guides corpus: question-H2 monoculture (374 H2s), page-specific closers, rental-paragraph despinning (11 files).
- **Almanac:** prune 101→~60 + rewrite to quality bar (docs/almanac-improvement-plan.md) + "From the Letters" real-review track (verbatim quotes only).
- **Pillar art remainder** (ChatGPT convo "Illustration Request", style locked): /business boardroom(generated, not downloaded)+travel; /custom shirts+notebook; /traditional kapota/shabbos/kittel/barmitzvah/chosson; check convo rail for Rishon's self-generated extras (satin bekishe).
- **Wedding Session B:** self-assessment quiz ("Two-Minute Fitting"). **C:** venues→real pages, party photos band.
- **GMB:** docs/gmb-optimization-pack.md (Rishon: hours fix, review link → /review QR page, 30-min paste session).

## Rishon-blocked
Stripe gift link (gift.astro GIFT_PAYMENT_LINK='') · deposit % · GBP review short-link · real-garment photo shoot date · Sam's pricing sentence.

## Standing cautions
NO new price claims without Sam's numbers · no venue claims as client-history · tales stay disclosed composites, no real venues in fiction · production copy stays honest (never "hand-cut by Sam") · lazy imgs in hidden panels need the eager-swap trick · .dz-ack-style acks need [hidden]{display:none} · gh squash → noreply author → re-author before deploy.

---

# UPDATE — 2026-07-26 (afternoon): Sam answered the questionnaire

Sam replied by typing red answers straight onto the emailed questionnaire
and sending it back as one PNG. Source of truth:
`~/Downloads/The website questionnaire — 20 minutes with coffee ☕.eml`
(image extracted to the session scratchpad as `sam-reply-4.png`).

## What Sam settled

| Question | His answer | Status |
|---|---|---|
| Publish prices? | **No**, with reasoning: a number on the site either anchors the client low or loses him before he calls | Every Sam-price figure removed sitewide |
| Deposit | **50% at the start, 50% on delivery** | Live on /book + FAQ |
| Alterations | **"Do not charge for alterations as part of the order"** | Now stated as a selling point |
| Suit turnaround | **3–4 weeks** (we were saying 8–12) | Corrected everywhere |
| Shirt turnaround | **2–3 weeks** (we said 4–6) | Corrected |
| Fastest rush | **12 days** | Corrected |
| Reorder from kept pattern | **2–3 weeks** (we over-promised 10–14 days) | Corrected |
| Canvas | **Half canvas by default, full on the dearer suits, never fuses** | New true selling point, now stated |
| Fittings | On completed garments; a sample suit for complex clients | Not surfaced (Rishon: downplay production) |
| Sunday hours | **10am** | Site was right — **GBP still says 9am, Rishon to fix** |
| WhatsApp on 647-458-0711 | **Yes** | Confirmed |
| Named wedding venues | **"I haven't heard of these locations."** | All removed |
| Biggest party | **38 men** | Not yet used anywhere — usable proof point |
| Out-of-town groomsmen video-measure | **"True."** | Confirmed, already on site |
| House calls | **"NO house calls. Period. I decide if it is worth the effort."** | Reframed as by-arrangement |
| Kapota / bekishe | **"Made bespoke"** | Confirmed |
| Shatnez | **"to a checker of my choice"** | Confirmed, not yet written up |
| Photo shoot | **"any time"** | Rishon to book |

**Unanswered / ambiguous — ask again:**
- Who sews the garments (he skipped it; Rishon's direction is to downplay production either way)
- Callback promise (he wrote "what about Saturday?" in that area — he may be flagging that Saturday hours are wrong somewhere; check the GBP)
- Languages: he answered "I am not a bank teller.." — read as *don't list languages*, but confirm
- Three clients who'd share a wedding photo — left blank
- **The "twenty-six measurements" claim is STILL unverified.** The "38" answers party size, not measurement count. Do not conflate them.

## Standing rules updated
- **Never publish a price.** Not a range, not a "from", not a market band in Sam's voice. Third-party market/rental figures (rack suits, tux rentals) are fine because they are not his tiers.
- **Never name a wedding venue** as a place his clients married. Editorial "how to dress for a grand ballroom" content is fine; a relationship claim is not.
- **Never promise travel.** The studio is the default. "Ask and he'll decide" is the honest framing.

## Still open from this session
1. **Almanac house-call chapter** — 11 tales dramatising GTA house calls, plus its theme description. Disclosed fiction, but it markets a service he doesn't offer. Fold into the queued Almanac prune.
2. **/custom and /business are starved pillars.** /wedding has 9 sections, /traditional 6, /business 5, **/custom 3** — with no testimonials, no FAQ block and no guide links at all. Mirror the /traditional pattern (Testimonials + reading-room list + FaqBlock with page-specific FAQs). Honest review picks: /custom → reviews[2] off-the-rack convert, [6] first custom suit, [11] first-timer. /business → same three; **its current "From Bay Street" heading sits over reviews[9], which is a wedding review** (still unfixed — mislabelled proof).
3. **GBP fixes** (Rishon): Sunday 9am → 10am, check Saturday, review velocity is the #1 lever.

---

# UPDATE — 2026-07-26 (late afternoon)

## Shipped since Sam's answers
- **Pillar pages fed.** /custom went 3 sections -> 7 (3 real reviews, 8 FAQs, 11 guide links); /business gained a reading room + 7 FAQs. Both emit one FAQPage each. Its "From Bay Street" heading (which sat over a wedding review) is now "In their own words" over three reviews that fit.
- **Real photography placed.** The four unused studio photos of Sam are now on /custom's option columns, /business, and the GarmentPage option rail (dress-shirts, suits, tuxedos, trousers, womens, kapotas via `optionPhotos` in garments.js).
- **Conversion bands.** `.pillar-cta` on /custom, /business and every garment page: turnaround, 50/50, alterations included, kept pattern, with per-page turnaround + CTA label (`turnaround`, `ctaLabel` in garments.js).
- **Almanac pruned.** The Traveling-Tailor Save chapter deleted (10 tales premised on house calls) -> 9 chapters, 90 tales, 301 to /almanac. Five chapter descriptions claimed "Eleven tales" over nine or ten; corrected.
- **Last two stock photos deleted** (bench.jpg, alterations.jpg) and replaced with real Sam photos. The bench one was captioned "Sam... hand-stitching" — neither true.
- **Invented cloth specs gone** ("280g", "Italian super 130s") and **/fabrics reframed** from stock list to colour/weave reference; "we'll pull the real bolt" removed from 4 places.

## Notes for next time
- `.opt-photo--low` exists because the portrait studio shots crop to the middle ~50% in a landscape box. Use it on any portrait photo in an option tile.
- The `/media/suit/*` sprites are SuitBuilder compositing overlays (a lapel on an empty canvas). Not usable as standalone images.
- Real photo inventory is thin: 4 Sam shots, 7 cloth macros, 5 journey frames. **A shoot is the highest-value unblock and Sam said "any time".**

## Queue
1. Photo shoot (Rishon) — everything visual is bottlenecked on it.
2. GBP: Sunday 9am -> 10am, check Saturday, review velocity.
3. Gift flow Stripe link still stubbed (`GIFT_PAYMENT_LINK=''`).
4. Almanac: 90 tales still to prune toward ~60, plus the "From the Letters" real-review track.
5. Unverified: "twenty-six measurements". Sam's "38" was party size.
