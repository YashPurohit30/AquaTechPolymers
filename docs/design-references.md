# Design references (client-supplied)

Reference sites the client shared, what's worth taking from each, and what to
ignore. Written after reviewing each site — 2026-09-08.

## The list, and the client's own notes

| Site | Type | Client's note |
|---|---|---|
| exxonmobilchemical.com | Chemical supplier | — |
| jp.mitsuichemicals.com | Chemical supplier | — |
| global.toshiba (transmission) | Transformer OEM | — |
| mitsubishielectric.com | Transformer OEM | — |
| gevernova.com | Transformer OEM | — |
| siemens-energy.com | Transformer OEM | — |
| hitachienergy.com/in/en | Transformer OEM | — |
| hd-hyundaielectric.com | Transformer OEM | — |
| hyosungheavyindustries.com | Transformer OEM | — |
| vatransformer.com/product-range | Transformer OEM | "background me puri city me lights ka photo hai" |
| wilsonpowersolutions.co.uk/products | Transformer OEM | **"GOOD"** — "left tab ke saath products change aur photo change hote hain" |

## The key distinction

**Nine of these are transformer OEMs — they are Aqua Tech's customers, not its
competitors.** They are useful for one thing: showing what a purchasing engineer
at a transformer plant considers a credible, serious supplier site. Match their
*tone and polish*, not their site architecture (they are billion-dollar
conglomerates with investor relations sections and 500-product catalogues).

**Two are true analogs — ExxonMobil Chemical and Mitsui Chemicals.** Both sell
industrial chemicals into manufacturers, exactly like Aqua Tech. Their
information architecture is the one to copy.

## Patterns worth taking

### 1. Left vertical tabs, photo changes with selection (Wilson Power)
The client flagged this as GOOD. Selecting a category in a left-hand rail swaps
both the copy and the product photo in the panel beside it.

Our `ProductExplorer.astro` currently uses **horizontal** tabs and shows a dark
spec table with **no photography at all**. This is the single most concrete,
actionable request in the whole list.

### 2. Product card formula (Wilson Power)
Every card is: photo → name → one hard spec line → one benefit line → "Overview" link.

> "Wilson e4 Ultimate Low Loss Amorphous® | Up to 3MVA with 11kV to 415V |
> Europe's most energy-efficient distribution transformer"

Ours is: series → title → summary paragraph → "Specification" link. No photo, no
punchy one-line spec. The spec line is what an engineer scans for.

### 3. Dual-axis browsing: by product AND by application (ExxonMobil)
ExxonMobil's whole navigation is "Solutions by Industry" alongside "Products &
Services" — an engineer can arrive either knowing their chemistry or knowing
their problem. **We already do this** (Products + Applications). Keep it.

### 4. Datasheet repository (ExxonMobil, Mitsui — both, prominently)
Both analogs put TDS/SDS downloads front and centre. Mitsui has a dedicated "SDS
Download" section in primary navigation. For industrial buyers this is a
credibility gate, not a nicety.

**This is our biggest gap.** Every product page currently says "available on
request." See blockers below.

### 5. "Featured applications" inside each industry (ExxonMobil)
Under adhesives & sealants they surface "hot-melt adhesives" as a featured
application, guiding engineers to a specific grade. We could do the same:
Distribution Transformers → PBA series, Power Transformers → ATP series.
Partially done already via `relatedProducts`.

### 6. City-lights hero (VA Transformer)
Night skyline = "we power cities." Thematically strong for an industry that
literally supplies the grid. Requires a photo we don't have.

## What NOT to copy

- **Mega-menus** (Hitachi, Siemens). They have hundreds of SKUs; we have four.
  A mega-menu over four products looks like an empty warehouse.
- **Investor relations / ESG / sustainability report sections** (Mitsui, all OEMs).
  Wrong company stage entirely.
- **Product selector / filter tools** (ExxonMobil). Justified at 18 product
  categories. At four products, a filter is friction, not help.
- **Corporate-video hero carousels pushing annual reports** (Mitsui). Their hero
  sells to investors. Ours must sell to a coil-shop buyer.
- **Careers / culture sections.** Not yet.

## Prioritised recommendations

| # | Change | Effort | Blocked on |
|---|---|---|---|
| 1 | Rebuild ProductExplorer as left vertical tabs with a photo panel | Medium | Product photos |
| 2 | Add photo + one-line spec to product cards on /products | Low | Product photos |
| 3 | Real TDS/SDS PDF downloads per product | Low (build) | Client PDFs |
| 4 | Replace "available on request" specs with real numbers | Low (build) | Client spec data |
| 5 | Night city-lights hero slide | Low | One photo |
| 6 | Case study / "who we supply" proof section | Medium | Client permission to name customers |

## Asset blockers — the honest bottleneck

Every reference site above leans on assets we do not currently have:

1. **Photographs of the actual products.** All 25 client images are transformers,
   substations, and raw materials (pressboard, kraft paper, spacers). There is not
   one photo of an Aqua Tech drum, pail, cartridge, label or the adhesive itself.
   Wilson's left-tab pattern is *built* on product photography — implementing it
   without product photos means the panel shows a generic transformer beside every
   single product, which is worse than the current spec table.
2. **Real spec numbers.** Still pending from the client.
3. **TDS / SDS PDFs.** Nothing to link to yet.
4. **Customer names / logos.** The copy claims "leading Indian power transformer
   manufacturers" — reference sites all name and show their customers. Needs
   permission before we can.

Design polish cannot substitute for these. The reference sites look credible
largely *because* of these assets, not because of their layout.
