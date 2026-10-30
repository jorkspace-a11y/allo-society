# Sticker integration: 30 October 2026

## Delivered scope

Ten supplied cutouts, not newly generated artwork. Header logo and favicon, service copy, support-model interactions and on-site case studies are unchanged. Asset provenance is in `public/stickers/README.md`.

- Hero: tap, click or Enter to cycle sun, flower, star and globe.
- About: two sets of five; Remix changes the set. Click, tap or Space turns a sticker. Fine-pointer desktop users can drag each sticker up to 14px per axis inside its allocated space.
- Mobile retains vertical touch scrolling. Reduced motion disables dragging and animated transitions, while keeping tap/keyboard actions available. No autoplay or continuous animation.
- Transparent WebP delivery copies total 488,236 bytes across all ten files. Collage images use lazy loading; originals remain in Drive.

## Local production verification

- TypeScript/Vite production build and `git diff --check` pass.
- Chromium width matrix: 320, 360, 390, 430, 768, 1024, 1280, 1366, 1440, 1920, 2560, 3440 CSS pixels. No horizontal page overflow or hero sticker/description intersection in reduced-motion mode.
- Normal-motion reflow additionally checked at 320, 390, 768, 1024, 1440 and 3440px with no overflow.
- Hero keyboard activation, collage Space activation with retained focus, Remix, bounded mouse drag, and touch-emulated hero activation pass. Mobile sticker touch action remains `pan-y`.
- All ten images successfully decode, across both sets. No JavaScript page errors recorded during the interaction matrix.
- Local Lighthouse checks: accessibility 100, best practices 100, basic SEO 100. Performance and search visibility were not remeasured for this increment.
- Visually inspected desktop/mobile hero and collage screenshots in `output/playwright/stickers-*.png`.

Coverage is Chromium with emulated viewport/touch/reduced motion, not physical-device or Safari/Firefox certification.

## Live release

Published source commit `98b2004`; Pages commit `f4d5c896f1302b82aa47194c95fe91922c588b10` confirmed built. Public HTML serves expected `index-Bp2uKTvy.js` and `index-BrcPKUOi.css` assets.

Repeated the full 12-width sticker matrix on the public URL: no horizontal overflow or sticker/hero-copy overlap. Live keyboard activation, focus retention, Remix, bounded desktop drag, touch activation and mobile scroll policy pass, with zero captured JavaScript errors. All ten public sticker URLs return 200 with `image/webp`. Live mobile hero and desktop collage screenshots were visually inspected (`output/playwright/live-stickers-*.png`). The pre-existing 48 interaction/reflow checks for service tabs, support cards, navigation, case studies and non-JavaScript links also passed locally after integration.
