# Art direction — studio photography for the pillar pages

Written 2026-08-06. Companion to `docs/photo-plan.md` (which says *where* images
go); this says *what they look like* and *what may honestly be made*.

---

## 1. The line, stated plainly

This site has deleted generated or bought imagery twice, both times for the same
reason: an image was standing in as **evidence of work Sam did**. `bench.jpg` was
a stock photo of anonymous young hands captioned *"Sam at the tailoring bench,
hand-stitching a garment"* — false twice over, since it was neither Sam nor
something he does.

So the categories, and every brief below states which it is:

**GREEN — make freely.** Material and tool still life. Cloth, lining, thread,
buttons, chalk, shears, tape, a cloth book, a bolt end. These are photographs of
*materials*, not of Sam's output. A macro of horn buttons claims nothing about
who sewed what. This is where the volume should come from, and it is also, not
coincidentally, what the best cloth houses lead with: Huntsman currently runs
"An Exclusive Cloth and Lining" as a hero subject in its own right.

**AMBER — only with an honest caption.** A garment on a dress form or a hanger.
Beautiful, and the strongest thing we could make, but it reads as *a suit from
here*. Permitted only where the caption says what it is (a reference image, a
study) and never in a proof position beside real reviews. When the shoot happens,
these get replaced first.

**RED — never.** Any person, any hands, any face. Any garment captioned as a
client's, a wedding's, or "made by Sam". Any studio interior presented as *the*
studio. These wait for the camera, full stop.

---

## 2. Technical specification

Grounded in what the site already carries, so new work sits beside the real
photographs without clashing.

| | spec |
|---|---|
| **Landscape** | 3:2, deliver 1500×1000 (matches `sam-collar.webp` at 1280×851 and the 1.50 ratio Huntsman uses throughout) |
| **Portrait** | 2:3, deliver 1100×1650 (matches `sam-fitting-cuff.webp` at 1100×1653) |
| **Macro / swatch** | 1:1, deliver 1024×1024 (matches the existing `/media/cloth` set) |
| **Delivery** | WebP, quality 82, `method 6`. Target under 300KB. |
| **Colour** | Warm. The site ground is paper cream; anything neutral-cold will look grey and dead against it. |

**Palette to shoot into** — the site's own tokens, so images and interface agree:

- ink brown `#211c15` — the darkest value in frame
- oxblood `#6d232b` — the accent, and the house lining colour
- gold `#bd9d63` — the flat-cap mark, thread, brass
- paper cream `#efeae0` — the ground
- muted navy — the working-suit colour

Avoid: pure black, pure white, cool grey, blue-tinted shadow, any saturated
colour outside the list.

**Lighting, and this is the part that matters most for cloth.**

A single soft source, raking across the surface at **15–30° to the plane**, not
front-on. Raking light is what makes a weave legible: it catches the crown of
each yarn and drops the interstices into shadow, so a twill reads as a diagonal
and a hopsack reads as a basket. Front-lit cloth photographs as a flat colour
field and tells the viewer nothing.

Soft falloff, one direction, a gentle bounce opposite to keep shadows open
rather than black. Deep warm shadow, never crushed. No second light, no rim
light, no gradient sweep — the existing Sam photographs are lit by one window
against a painted backdrop, and the new work has to belong to that world.

**Lens and depth.** Macro at f/8–f/11 when the whole weave must be sharp
edge to edge. f/2.8–f/4 with a shallow plane when one detail should carry it and
the rest falls away. Shot slightly above and across, never a flat overhead
"knolling" grid, which reads as e-commerce rather than as a bench.

**Surface.** Everything sits on one of three grounds, consistently: worn oak
bench, unbleached cotton or tissue, or the cloth itself. No marble, no slate, no
concrete, no props that belong to a different trade.

---

## 3. Per-pillar shot lists

Every entry: **[CATEGORY]** subject — *the brief*.

### `/suits` — the primary commercial page

1. **[GREEN] The three shelves.** Three folded suiting cloths stacked stepped so
   each edge shows: a mid-grey worsted, a navy, a charcoal. Raking light from
   the left, weave legible on all three. 3:2. The visual argument for "cloth
   across three price shelves" without naming a price.
2. **[GREEN] Half canvas, exposed.** A cut edge of canvas interlining laid on a
   suiting cloth, so the two layers read as separate things. Macro, 1:1. This
   is the single most useful image on the site: it makes "never fused" visible
   instead of a claim.
3. **[GREEN] Chalk and shears on cloth.** Tailor's chalk mid-mark on dark
   suiting, shears resting, one chalk line visible. 3:2, shallow plane on the
   chalk tip.
4. **[AMBER] Sleeve head detail.** A jacket sleeve at the shoulder seam, showing
   the roll. Caption must read as a construction study.

### `/business`

1. **[GREEN] The five-day stack.** Five folded cloths — navy, charcoal, grey,
   glen check, a chalk stripe — stacked with edges stepped. 3:2. Makes the
   rotation argument in one frame.
2. **[GREEN] Travel.** A folded jacket over a case corner, in warm low light.
   3:2. For the business-travel section.
3. **[GREEN] Horn buttons on charcoal.** Macro 1:1, side light to catch the
   depth and grain of real horn. The tell of a good suit, shown rather than said.

### `/linings` — the newest page, and the most photogenic subject

1. **[GREEN] Cupro against polyester.** Two lining swatches side by side under
   identical raking light: the cupro matte and dry, the polyester slick and
   specular. 3:2. This is a *proof* image for the argument the page makes, and
   nothing else on the site does this job.
2. **[GREEN] Oxblood bolt end.** A rolled end of oxblood cupro, light raking
   across the roll so the sheen graduates. 2:3 portrait.
3. **[GREEN] Thread card.** Spools in oxblood, gold and ink on unbleached
   cotton, 1:1. For the monogram section.
4. **[AMBER] Monogram detail.** Three letters stitched into lining. Caption as a
   sample, since the real one already exists as a client photograph.

### `/wedding`

Mostly served by the three real client photographs already on the page. Add
only:

1. **[GREEN] Black tie, disassembled.** Bow tie untied, studs, a folded
   cummerbund, on cream tissue. 3:2, warm and low.
2. **[GREEN] Boutonniere and pocket square.** Silk and stem on oak. 1:1.

### `/traditional`

**Every good image here is blocked on the camera.** There is no photograph of a
bekishe, kapota or kittel anywhere on this site, and generating one would be
inventing a garment for a community that would recognise the fake instantly.
Generate only:

1. **[GREEN] Fine dark wool.** Macro of a dark worsted with a subtle sheen,
   1:1, raking light.
2. **[GREEN] Satin.** Macro of black satin showing the specular roll of light
   across it. 1:1. The bekishe cloth, as cloth.

### `/dress-shirts`

1. **[GREEN] Shirting fan.** Four two-ply cottons fanned so the weaves differ
   visibly: poplin, twill, oxford, end-on-end. 3:2, raking light.
2. **[GREEN] Mother-of-pearl.** Macro 1:1, side light for the iridescence.
   Genuinely different from plastic and only a photograph proves it.

### `/custom`

1. **[GREEN] The notebook.** An open notebook, pencil, tape coiled beside it, on
   oak. 3:2. The kept pattern, which is the page's whole argument.

### `/faq` (3573 words, no image)

Three quiet dividers, all GREEN, all 3:2 and deliberately understated so they
break the text without competing: a coiled tape; a pencil across a closed
notebook; a single button on cloth.

---

## 4. The prompt skeleton

Every generation prompt should be assembled from these parts, in this order.
Deviating from the skeleton is what produces the plasticky "AI product shot"
look, which would be worse than no image.

> Editorial still-life photograph. **[SUBJECT, stated plainly and concretely.]**
> Lit by a single soft window source raking across the surface at about 20
> degrees, warm daylight, gentle bounce opposite, deep warm shadow, no crushed
> blacks. Shot slightly above and across on a **[macro / 50mm]** lens at
> **[f/8 for full weave detail | f/2.8 with a shallow plane]**. Surface: **[worn
> oak bench | unbleached cotton | tissue]**. Palette limited to warm ink brown,
> oxblood, muted gold and cream. **[3:2 landscape | 2:3 portrait | 1:1 square]**.
> Photographic realism, fine natural grain, no gloss, no gradient backdrop, no
> studio sweep, no text, no logos, no hands, no people.

**Negative list, every time:** people, hands, faces, mannequin heads, text,
logos, watermark, gradient sweep, high-key white background, cold grey, blue
shadow, HDR, oversharpening, plastic sheen, lens flare, symmetrical knolling
grid, marble, slate, concrete.

---

## 5. What this does not solve

Fifteen or so still lifes will make the pillar pages materially better, and the
canvas and cupro-versus-polyester frames will do real argumentative work that no
photograph currently does.

They will not show a finished garment, Sam at the bench beyond the four frames
already held, the studio interior, a before-and-after fit, or a single
traditional garment. Those are the images that actually sell tailoring, and all
of them need the shoot Sam has already agreed to. This document is the interim,
not the answer.
