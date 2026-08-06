# Image plan — every page, what it has, what it needs

Generated from `docs/photo-audit.csv` (146 built pages, audited 2026-08-06).
Re-run the audit with the script in the session scratchpad after any change.

---

## The rule, before anything gets made

This site has already deleted AI imagery twice: seven orphaned renders in the
slop pass, then `bench.jpg` and `alterations.jpg`, which were stock photos of
anonymous hands captioned as **Sam** hand-stitching. Both times the problem was
the same: a generated or bought image standing in as *evidence of work Sam did*.

So the line, which every brief below respects:

- **Illustration as editorial atmosphere: fine.** The house style is already
  established and consistent (ivory paper, ink and watercolour, palette-limited).
  Nobody mistakes it for a photograph.
- **Generated photorealism: never.** No fake garments, no fake clients, no fake
  studio, no fake fittings. If it would read as proof, it does not get made.
- **Real photography always wins** where it exists: `/media/sam` (8),
  `/media/clients` (8, credited), `/media/cloth` (7), `/media/journey` (5).

Anything captioned as a real garment, a real client or a real room must come
from the camera, which means it waits for the shoot Sam has already approved.

---

## Where the gaps actually are

| kind | pages | zero images | avg |
|---|---:|---:|---:|
| location | 10 | **10** | 0.0 |
| commercial | 32 | 10 | 4.0 |
| journal | 7 | 0 | 1.0 |
| almanac | 9 | 0 | 1.0 |
| guide | 88 | 0 | 1.8 |

Guides, journal and almanac are covered. The work is location pages, and a
handful of commercial pages.

---

## Tier 1 — no generation needed (wiring only)

Five garment pages show a single image purely because they were never given an
`optionPhotos` rail, unlike their siblings. Fixed with photographs already in
the repo. Do this first; it costs nothing and closes half the commercial gap.

| page | rail to add |
|---|---|
| `/casual` | shoulder · cloth (hopsack) · cuff · choosing |
| `/outerwear` | shoulder (over layers) · heavy cloth · collar · choosing |
| `/kids-teen-suits` | measure · cloth · cuff · consult |
| `/short-sleeve-shirts` | collar · cuff · shirting cloth |
| `/vegan` | shoulder · cloth · cuff · consult |

---

## Tier 2 — generate: location emblems (10)

Ten local-SEO pages with no image between them. Each needs one distinctive
piece so they do not read as one template with the city name swapped, which is
exactly the criticism the audit levelled at them.

**Brief, common to all:** house style. Ivory laid-paper ground, ink linework
with a restrained watercolour wash, palette limited to ink brown, oxblood, gold
and muted navy. No people, no faces, no signage, no real storefronts, no
recognisable landmarks that would imply a relationship with a venue. A quiet
emblematic still life that suggests the place without documenting it.

| page | subject |
|---|---|
| `/locations/vaughan` | The studio bench: tape, chalk, shears, a folded cloth. The home page of the ten. |
| `/locations/thornhill` | A folded dark garment with a gartel laid across it |
| `/locations/toronto` | A hanging garment bag against a suggestion of tall windows |
| `/locations/north-york` | A jacket over a chair back, a notebook and a coffee |
| `/locations/richmond-hill` | Three jackets on a rail, coordinated: the group booking |
| `/locations/markham` | A bow tie, studs and a folded cummerbund |
| `/locations/etobicoke` | An overcoat on a stand, gloves in the pocket |
| `/locations/woodbridge` | A boutonniere and a folded pocket square |
| `/locations/yorkville` | A cloth book open to swatches, a magnifying loupe |
| `/locations/bathurst-lawrence` | A kittel folded on tissue paper, quiet and pale |

---

## Tier 3 — generate: commercial pages with nothing (7)

| page | words | subject |
|---|---:|---|
| `/faq` | 3573 | The longest page on the site with no image. Two or three quiet section dividers: a tape coiled, a pencil and notebook, a button card. |
| `/process` | 508 | The five journey frames already exist in `/media/journey` — wire those first, generate nothing. |
| `/book` | 528 | A chair, a mirror edge, light. The room you are booking, not a person in it. |
| `/reviews` | 817 | A stack of folded notes tied with thread. Letters, not testimonials. |
| `/locations` | 474 | A GTA road-map abstraction in house style, studio marked. No real map tiles. |
| `/journal` | 344 | A notebook open on the bench, pencil across the gutter. |
| `/design` | 231 | Already an interactive tool; needs a header piece only. |

---

## Tier 4 — leave alone, on purpose

- `/review`, `/review-card` — deliberately spare. A QR page wants no decoration.
- `/suit-builder` — the configurator *is* the image. Its real problem is that it
  is `noindex` and unreachable from the nav, not that it lacks art.
- All 88 guides — each already carries a pillar banner and the author portrait.

---

## Still blocked on the camera

These cannot be generated at any quality bar, and are the reason the shoot
matters more than any of the above:

- Finished garments, on a body or a stand
- Sam at the bench, beyond the four frames already in `/media/sam`
- Interior of the studio
- Before and after fit comparisons
- The traditional garments: bekishe, kapota, kittel. `/traditional` and
  `/kapotas` currently illustrate the *process* rather than the garment,
  because there is no photograph of one in existence on this site.
