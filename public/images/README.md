# Images

Replace these placeholders with client photography before launch.

Required for the homepage carousel (referenced in src/pages/index.astro):
- hero-factory.jpg   — production floor, landscape, min 1900px wide
- hero-coil.jpg      — winding / coil close-up
- hero-lab.jpg       — laboratory or QC bench

Before committing: run every image through https://squoosh.app
Client photos typically arrive at 4–6 MB and must be reduced.

Preferred: move these into src/assets/images/ and use Astro's <Image />
component instead of CSS background-image, so Sharp generates AVIF/WebP
and responsive srcsets automatically. Files left in public/ bypass
optimisation entirely.
