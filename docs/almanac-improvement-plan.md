# The Almanac — Council Verdict & Improvement Plan (2026-07-25)

Five-seat council review (brand-strategist 6/10 · client-advocate 6/10 · enemy 3/10 · SEO-strategist 6.5/10 · rabbi 6/10). Consensus: **index-after-improvement** — the prose craft is genuinely good; the *corpus-level patterns* and the **real-credentials-next-to-fiction** collision are what give it away.

## ✅ Shipped 2026-07-25 (structural/trust fixes)
- **CollectionPage schema no longer claims Sam as `author`** of fiction (`almanac/index.astro`) — the one machine-readable falsehood, removed. Permanent red line documented in-file: no Person/Review/Testimonial schema on tales, ever.
- **AuthorBio removed from chapter pages** — real portrait + "4.7★ · 150+ reviews" no longer sits under disclosed fiction. Replaced with an honest closing note ("composite experience — not case files") linking to /about, /reviews, /guides.
- **Duplicate tale killed** — "The Interview on Monday" existed twice (#16 and #38); #38 deleted. Tale numbering now computed from position, so pruning never leaves gaps.
- **Name-collision fixes** — "Daniel" was four different men (tales 1/12/22/52), two of them "a groom in Woodbridge"; "Nathan" was three. Renamed: #12→Noah, #22→Jordan, #52→Ilan, #21→Gabe (#8 Nathan kept; #10's "Nathan's brother" now reads as intended continuity).
- **Per-tale "· composite" cue** beside every tale number — the frame travels with a skimming reader (rabbi's requirement).
- **Disclosure moved into the hub lede** before the count registers; nav label "101 tales from the bench" → "Tales from the fitting room"; meta description de-hardcoded ("composite tales", no "101").
- **Honesty fixes in shared surfaces touched**: AuthorBio desc + Trust FAQ no longer claim "never outsourced / cut every garment myself" → now "measured and fitted by Sam himself; made to those measurements." (Site-wide honest-copy pass across about.astro / remaining faqs pending Rishon's go + `ask-sam-production-truth.md`.)
- **14 new FAQ entries** added from Reddit/Google research (see faqs.js).

## The Quality Bar (for all future tale rewrites)
1. Kill the "[role] in [GTA town], [detail]" who-line template and the 9-town rotation. Place goes one level deeper (a plaza off Highway 7, a shul basement) — remembered, never a real business or family-identifiable combo.
2. Let 12–15 tales end imperfectly — a fix that took two tries, a compromise, a case Sam still thinks about. The 101-for-101 win rate is the single biggest "generated" tell.
3. Vary the skeleton: lengths 80–300 words; some one-paragraph, some three; ~⅓ end on the human beat with no lesson line.
4. Retire the tics: "Sam did not sigh/shrug/fuss" and "When X came to Sam" as the ¶2 hinge. In a minority of tales Sam sits at the *edge* — heard it later, saw the aftermath.
5. **"Believable" = craft only** (rabbi's line): sharper tailoring mechanics, truer pacing. NEVER manufactured verifiability — no dates, real venues, customer photos, "as told to me." **The Batel test:** if she read it believing it real, then learned it was fiction, would she feel tricked? If yes, pull back.
6. One tale, one mechanism — no re-arguing "own, don't rent" four times per chapter.
7. Maintain the name/city registry — no name+city reuse across unrelated characters.
8. Small-community care (enemy's point): composites must not map onto identifiable real families in the Thornhill/Vaughan community.

## Prune Plan (next sessions, one chapter per session, timeboxed)
Target ~101→60–65. **Keep & upgrade:** The Colour of the Screen · The Fused Jacket in August · What the Last Man Left · Close Enough · The Tuxedo Sized by Optimism · Pinned From Behind · Five Groomsmen No Plan · The First Suit at Fifty · The Man Who Dreaded Mornings · The Salesman and the Shine · The Teacher Who Went Grey Early · The Grandfather at the Podium.
**Kill (redundant mechanisms):** The Sleeve With the Other Man's Length · The Waist That Traveled · The Cummerbund That Came for Someone Else · The Groomsmen From Four Warehouses · The Online Order That Never Came (fold best line into The Return Spiral) · What the Rental Counter Charged for Panic. Run a full title/premise dedup scan on the unread ~65 before shipping.

## Interlink Plan
- Tale→guide (exists): rebalance so no guide gets 6+ links while others get zero.
- **Guide→tale (new):** "From the Almanac" callout on 5 highest-intent guides (custom-vs-rental-wedding-suit, wedding-suit-timeline, how-a-suit-should-fit, the-interview-suit, coordinating-groomsmen) → link to `#anchor` on the chapter page.
- Chapter footer → one contextual money-page CTA (wedding chapters → /wedding).
- **Never** split tales into 101 URLs — the 10-chapter shape is the correct durable pattern.

## Example rewrite demonstrating the bar
See the council synthesis's rewritten "No Time to Fix It" (~195 words): hyper-local texture, Shabbos-native timing, the flaw survives into the photos, Sam hears the story two years later and fixes nothing — the tale *earns* the Thursday rule instead of announcing it.

## FAQ drafts HELD for Sam's confirmation (do not ship with placeholders)
```js
{ cat: 'Bespoke, made-to-measure & off-the-rack', q: 'How much do suit alterations cost?', a: "It depends on the work — a trouser hem is simple, reshaping a jacket is not. [confirm: Sam's typical range for hems/sleeves/waist work]. Bring the suit in; I'll quote it honestly and tell you plainly if it isn't worth altering." },
{ cat: 'Traditional & Jewish menswear', q: 'How much does a bekishe or kapota cost?', a: "It depends on the cloth and the details, as with any made garment. [confirm: Sam's honest range]. I'll quote it plainly at the first conversation, before anything is ordered — and the first conversation costs nothing." },
{ cat: 'Traditional & Jewish menswear', q: 'What about shatnez?', a: "[confirm Sam's actual practice — which cloths/trims he uses, whether he works with a shatnez lab or advises clients to have finished garments checked]. Never promise 'shatnez-free' without a defined process." },
```
