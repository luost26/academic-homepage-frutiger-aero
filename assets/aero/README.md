# Frutiger Aero asset kit

Downloaded assets for the Vista-inspired Jekyll redesign. The icons share Oxygen's dimensional shapes, glossy highlights, blue folders, and soft shadows. The two backgrounds provide complementary light-ribbon and green-nature treatments.

## Contents

- `icons/32/`, `icons/64/`, and `icons/128/`: 16 transparent PNG icon designs, supplied at their original native sizes.
- `sources/oxygen/`: the corresponding original compressed SVG sources (`.svgz`).
- `backgrounds/blue-ribbons.png`: **Elarun**, 2560 × 1600, by Nuno Pinheiro.
- `backgrounds/grass-bokeh.jpg`: **Grass Background**, 1920 × 1280, by Karen Arnold; dew-covered grass and soft bokeh without insects.
- `preview.png`: the initial asset-kit contact sheet; the grass photograph has since been replaced.
- `manifest.json`: exact download URLs, pinned repository revisions, author and license information, dimensions, file sizes, and SHA-256 checksums.
- `licenses/`: upstream notices, author metadata, and license texts.

## Suggested uses

| Icon filename | Use |
| --- | --- |
| `home.png` | Home navigation |
| `profile.png` | Profile / About Me |
| `publications.png` | Publications navigation and section header |
| `blog.png` | Blog navigation |
| `showcase.png` | Showcase / image galleries |
| `education.png` | Education section |
| `research.png` | Research / academic experience |
| `news.png` | News section |
| `email.png` | Contact link |
| `website.png` | Academic website / Scholar link |
| `download.png` | CV / download links |
| `selected.png` | Selected publications |
| `pdf.png` | PDF paper links |
| `code.png` | Code / repository links |
| `back.png` | Back / previous navigation |
| `expand.png` | Expandable navigation |

For a 32px displayed icon, use the 32px PNG with the 64px PNG as its 2× `srcset`. Use the 128px originals for larger profile or section treatments. Pair icons with visible labels; when a label already describes the action, make the icon decorative with `alt=""`.

The backgrounds are retained as originals, with responsive WebP delivery copies in `backgrounds/web/`. Glass surfaces, button bevels, title bars, glows, and borders are implemented in CSS so they remain responsive.

## Sources and credits

**Oxygen icons:** [KDE developer documentation](https://develop.kde.org/frameworks/oxygen-icons/) and [upstream source](https://invent.kde.org/frameworks/oxygen-icons). Downloaded from KDE's GitHub mirror at revision `11ab46615a7819b26467cc92f91af08d5ef6d827`. Copyright 2007 Nuno Pinheiro, David Vignoni, David Miller, Johann Ollivier Lapeyre, Kenneth Wimer, Riccardo Iaconelli, and other Oxygen contributors. Licensed under **LGPL-3.0-or-later**, as recorded in upstream `REUSE.toml`. The PNGs and SVG sources are unmodified; local filenames describe their intended use.

**Elarun:** [upstream wallpaper and metadata](https://github.com/KDE/plasma-workspace-wallpapers/tree/92cba26d1a117554aa54ed839a481ba657dee5d6/Elarun). By Nuno Pinheiro; licensed under **LGPLv3** according to the wallpaper's own metadata. The downloaded PNG is unmodified. Upstream wallpaper metadata and notices are retained in `licenses/wallpapers/`; the complete LGPLv3/GPLv3 text is also included in `licenses/oxygen/LICENSES/LGPL-3.0-or-later.txt`.

**Grass Background:** [Public Domain Pictures source and license](https://www.publicdomainpictures.net/en/view-image.php?image=242003&picture=grass-background). Photograph by Karen Arnold; dedicated to the public domain under **CC0-1.0**. Downloaded as the unmodified free-download JPEG. The CC0 text is included in `licenses/oxygen/LICENSES/CC0-1.0.txt`.

When these assets are integrated, include this credit in the site's credits/footer: “Oxygen icons © KDE/Oxygen contributors, LGPLv3 or later. Elarun wallpaper by Nuno Pinheiro, LGPLv3. Grass photograph by Karen Arnold, CC0.” Link the credits to the source pages and retained license/source files.

## Scope

These assets are integrated into the shared glass theme in `assets/css/global.css` and the Jekyll layouts/includes. Small, responsive WebP copies are in `backgrounds/web/`, with derivative metadata in the manifest. The originals and their vector sources remain unmodified. The contact sheet is a review artifact assembled from the downloaded images, rather than an additional background or icon asset.
