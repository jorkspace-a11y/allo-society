# Revision QA: 23 October 2026

## Scope and release

User-authorized fixes: supplied logo placement, overlapping hero copy, responsive layouts, interactive support cards, and the PDF-based on-site search foundation. The managed virtual-assistance offer and existing on-site portfolio are preserved.

Previous source: `96eb6aa`. Previous Pages revision: `417120d5969df7b83fbf3807ecd469988cfb740c`. Release status: local verification complete; deployment verification will be appended after publishing.

## Results

- Production TypeScript/Vite build passes; `git diff --check` passes.
- Logo and favicon SHA256 hashes match the files in `F:\Allo Society Brand Kit` byte for byte. The supplied stacked white outlined logo replaces the font-dependent all-caps header artwork. No logo was redrawn.
- Homepage: 12 viewports, 320x568 through 3440x1440. No horizontal overflow, measured hero headline/description/CTA intersection, or detected text-width clipping in the checked content. Intentional desktop project and positioning transforms are excluded from the text-width heuristic and inspected visually.
- Seven service pages: 84 width checks across the same 12 widths. No horizontal overflow or detected heading/body/link text clipping. Each returns 200, has one H1 and a unique title/self-canonical, contains six related-service links, and has FAQ structured data matching its visible questions and answers.
- All homepage local navigation targets exist, and linked service routes return 200.
- 48 interaction/reflow checks pass: capability arrow/Home/End navigation, hover, all three support models, case-study opening/Escape/focus return, mobile-menu scroll lock and focus loop, and transition widths in normal and reduced motion. Touch-emulated Executive selection and GROW selection pass. No enquiry email was sent.
- Tested short-height reflow at widths 320, 640, 800, 801, 844, 1049, 1050, 1051, 1150 and 1151 with a 390px height. The 640px reflow check covers the effective width of a 1280px desktop at 200% zoom, but is not a physical browser-zoom or device test.
- JavaScript-disabled homepage exposes all seven service links and the correct virtual-assistance positioning. Service pages are static HTML.
- Corrected two invalid ARIA list containers and low-contrast small labels. The last local Lighthouse accessibility, best-practices and basic SEO scores are 100. This is not a full WCAG certification or proof of search rankings.
- Host-root `https://jorkspace-a11y.github.io/robots.txt` returns 404. No blocking robots policy was observed there. The project's subdirectory robots file is not the controlling host-root policy.

## Performance diagnostics

Single Lighthouse 13.5.0 runs, default simulated mobile or desktop preset:

| Run | Performance | Accessibility | Best practices | SEO | LCP | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Previous live, mobile | 83 | 91 | 100 | 100 | 3.3s | 0 |
| Previous live, desktop | 68 | 91 | 100 | 100 | 2.5s | 0.003 |
| Revised local production preview, mobile | 79 | 100 | 100 | 100 | 3.3s | 0.027 |
| Revised local production preview, desktop | 100 | 100 | 100 | 100 | 0.6s | 0.004 |

Local-versus-live delivery and single-run variation prevent a valid speed-improvement claim. An earlier local mobile pass scored 84; the final local run scored 79. Font delivery/render blocking and the existing animation bundle remain performance follow-ups. Live post-deployment measurement will be recorded separately. These are lab measurements, not real-user Core Web Vitals.

## Evidence

Local artifacts are in the ignored `output/playwright/` folder:

- `before-hero-mobile.png`, `before-hero-desktop.png`
- `revision-hero-390.png`, `revision-hero-768.png`, `revision-hero-1366.png`, `revision-hero-3440.png`
- `final-cards-desktop.png`, `final-cards-mobile.png`, `revision-menu-reduce.png`
- `revision-service-mobile.png`, `revision-service-desktop.png`, `revision-footer-mobile.png`
- `lighthouse-before-mobile.json`, `lighthouse-before-desktop.json`, `lighthouse-after-mobile.json`, `lighthouse-after-desktop.json`

Hero, card, menu, service-page and footer screenshots were visually inspected. Element-only tall screenshots can include the fixed header partway through the crop; viewport screenshots are used to judge actual placement.

## Coverage limits

Browser coverage is Chromium/Chrome, including touch and reduced-motion emulation. No additional engine was installed; Safari/Firefox and physical phone/tablet testing remain unverified. No Search Console account, actual indexation, AI citation, analytics conversions or mail-delivery verification was available. These are not represented as completed by the website changes. Search and evidence follow-ups are in `SEO-AEO-GEO-FOUNDATION.md`.
