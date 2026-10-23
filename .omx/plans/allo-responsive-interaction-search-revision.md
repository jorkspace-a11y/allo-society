# Allo Society revision plan

Date: 2026-10-23
Status: Implementation authorized and in progress. Responsive, branding, interaction and on-site search revisions implemented; release verification is recorded in `docs/REVISION-QA-2026-10-23.md`.

## Outcome and requirements

Deliver the existing editorial Allo Society design with correct official branding, readable layouts from small phones through large monitors, interactive support cards, and search architecture grounded in the user's PDF. Preserve the seven-service hierarchy, VA positioning, real portfolio work hosted within Allo, and the three support models. Allo Hire remains excluded under the current master direction.

User-reported defects override earlier claims that responsive QA was complete. A matching element-box centre, a successful build, or zero console errors does not prove correct visual placement.

## Evidence and source anchors

- Header uses the all-caps SVG: `src/App.tsx:33`; header and wordmark framing: `src/styles.css:22`. Previous fix changed the surface and frame but the user reports the same problem.
- Hero includes the decorative orbit and description: `src/App.tsx:44`; independent absolute placement: `src/styles.css:42` and `src/styles.css:47`, with mobile overrides at `src/styles.css:261`.
- RUN/GROW/BUILD interaction lives in `src/App.tsx:85`. Static support cards start at `src/App.tsx:115`; their content is in `src/data.ts:85`, styling in `src/styles.css:93`.
- Custom cursor: `src/App.tsx:350` and `src/styles.css:21`. Its difference blend can change its visible colour.
- Responsive rules currently centre on 1050px and 800px: `src/styles.css:246` and `src/styles.css:254`. Service pages have separate styling in `public/services/service-page.css`.
- Search metadata and fallback content: `index.html:9`, `index.html:24`, `index.html:62`; service documents in `public/services/*/index.html`; crawl files in `public/sitemap.xml` and `public/robots.txt`.
- Design constraints: `DESIGN.md`. Update outdated responsive and interaction descriptions during implementation.

Search foundation: Ilman Akbar, *The Fundamentals of GEO / AEO / AI SEO*, supplied by the user: https://www.dailyseo.id/wp-content/uploads/2026/02/The-Fundamentals-of-GEO-_-AEO-_-AI-SEO.pdf

Previously supplied local PDF and extracted text are available. The recent web-reader attempt failed, so do not represent the remote download as freshly verified. Verified references: relevance/crawlability/authority (page 20), consistent brand descriptions and category relevance (pages 31 and 34), concise content (pages 86-87), relevant schema (page 91), and llms.txt's status at publication (page 93). Current Google guidance was checked during implementation; see `docs/SEO-AEO-GEO-FOUNDATION.md`.

## Implementation sequence

### 1. Establish the baseline and correct logo placement

Inspect the supplied brand package or its verified extracted assets against the rendered header. Check the actual visible lettering, SVG viewBox, intrinsic padding, font availability, clipping, size, optical alignment, and background. Do not assume the current all-caps SVG is correct just because its box is centred. If the original package is unavailable and provenance cannot be resolved from existing files, flag that specific blocker before substituting any mark.

Adjust `src/App.tsx:20`, `src/styles.css:22`, and the service-page header consistently. Establish deliberate header height, side gutters, logo size, mobile navigation, and anchor offsets. Preserve the official artwork and favicon.

Acceptance: complete lettering at every test size, consistent visual alignment, no contrasting rectangular patch, no clipping, and working home/menu links. Capture enlarged before/after header views for review.

### 2. Rebuild the hero and responsive composition

Replace independent description/decoration positioning with a coordinated grid or flow layout in `src/App.tsx:44` and the hero rules in `src/styles.css`. Place text, CTA, and decoration in defined areas. Keep the existing approved tagline; shorten the supporting description into specific, natural language. Avoid generic claims. Constrain the orbit to its allocated space and simplify its motion where space is limited.

Recommended cursor treatment: remove the decorative follower and use the native cursor, while retaining card and navigation feedback. This is a proposed implementation choice based on the distracting dot observed in the screenshots.

Extend the same layout review through services, work/case studies, process, resources, commercial models, contact/footer, and all seven static service pages. Use fluid gutters, bounded text widths, deliberate reflow, and content-driven breakpoints. Large monitors need controlled maximum widths; short laptop viewports need enough vertical room for the headline and CTA.

Acceptance: no text/CTA overlaps, unintended cropping, hidden navigation, or horizontal page scrolling. The decorative orbit never covers text or controls. Typography and content stay legible at 200% zoom. Do not hide overflow as a substitute for fixing content geometry.

### 3. Make Allo Assistant / Executive / Specialist interactive

Retain the approved three-column composition, typography, dividers, names, and descriptions from `src/App.tsx:115` and `src/styles.css:93`. Add one selected support model using the existing data in `src/data.ts:85`.

- Desktop: hover or keyboard focus previews a card; click selects it. Red active treatment and restrained movement echo RUN/GROW/BUILD. Selection remains stable when the pointer leaves.
- Keyboard: use semantic selection controls with visible focus and appropriate selected-state announcements; keep CTA links separate from selection buttons. Support arrow keys if implemented as tabs.
- Touch: tap selects; a separate CTA initiates contact. Use stacked cards on narrow screens, with details adjacent to the active card rather than a distant panel. Keep all three names discoverable.
- Content: selected details describe the relevant work, fit, and boundaries. Essential descriptions and service links remain in rendered HTML without requiring hover.
- Motion: respect reduced-motion preferences; focus and selection must work with animation disabled. Avoid layout jumps when changing models.

Acceptance: each model activates via mouse, keyboard, and touch; selected styling and details agree; no hover-only access, nested interactive controls, accidental CTA activation, or focus loss.

### 4. Apply the PDF framework to Allo's actual content

Create a project-local `docs/SEO-AEO-GEO-FOUNDATION.md` during implementation, linking the PDF and mapping guidance to pages, evidence, and outstanding work. This is a repository reference, not a claim that the full PDF has been saved in assistant memory.

Audit and refine the existing seven pages rather than adding generic pages for every task:

| Service page | Buyer question to answer |
| --- | --- |
| Administration & Operations | Which recurring tasks can Allo own, and how are handoffs organised? |
| Landing Pages & Websites | What does the website scope include, and how is delivery defined? |
| Social Media Management | Which planning, publishing, and community tasks are included? |
| Digital Ads Strategy | What support is provided, and how are fees separated from media spend? |
| CRM & Automation | Which workflows can be organised or automated, with what scope limits? |
| Dashboards & Reporting | Which business questions will the reporting answer, using which inputs? |
| Internal Tools & ERP | What can be configured or integrated, and what engineering work is outside scope? |

Keep brand descriptions consistent across the homepage, service pages, structured data, and actual service offer. Use concise direct answers, meaningful headings, natural internal links, and genuine project evidence with accurate attribution. Preserve nested admin subservices and avoid invented pricing, testimonials, delivery promises, or results.

Verify titles, descriptions, canonicals, sitemap, crawl access, semantic headings, and relevant structured data against visible content. Check JavaScript-disabled and rendered views for equivalent core facts; do not rely on content that disappears after hydration or exists only after interaction. Use only applicable schema; schema validity does not establish AI visibility or rich-result eligibility.

Document off-site follow-ups such as consistent social profiles, real reviews, and relevant third-party mentions. Do not publish outreach or change external profiles as part of this website revision. Treat llms.txt as nonessential under the supplied PDF and recheck current official guidance before making a fresh status claim.

Acceptance: all seven service URLs and the homepage have distinct, accurate metadata and consistent brand facts; links/canonicals/sitemap resolve correctly; schema matches visible content; key service information is crawlable. Clearly mark missing proof and account-dependent measurement work.

### 5. Verify layout, interactions, accessibility, and search output

Test representative viewports, plus continuous resizing around actual layout transitions:

| Surface | CSS viewport examples |
| --- | --- |
| Small phone | 320x568, 360x800 |
| Phone | 390x844, 430x932 |
| Tablet | 768x1024, 1024x768 |
| Laptop | 1280x720, 1366x768, 1440x900 |
| Desktop | 1920x1080 |
| Large monitor | 2560x1440, 3440x1440 |

Capture and visually inspect the header, hero, active support cards, menu, and footer. Check phone landscape, short viewport height, 200% zoom, reduced motion, and touch versus fine pointer. Cover the shared service-page template and all seven pages for content-specific overflow. Test Chromium and one additional browser engine where available, reporting any coverage gap.

Run the production build, check for console/runtime errors and broken links, verify keyboard navigation and touch target sizes (target at least 44x44 CSS pixels for main controls), and compare Lighthouse mobile/desktop results with a baseline. Investigate regressions; do not use a score as a replacement for visual QA.

Search verification includes served HTML, relevant JSON-LD parsing, sitemap URLs, robots access, and core content without JavaScript. Search Console indexation, organic enquiries, and referral measurement require account access; report unavailable access explicitly. AI prompt samples are supplementary observations, not a guaranteed ranking or the sole success metric.

### 6. Deliver and verify the live revision

Present before/after screenshots and a compact checklist of the user's reported defects. Commit only this revision's files, build, publish through the existing GitHub Pages workflow when implementation is requested, and verify the exact new deployment commit and served assets. Repeat critical header, hero, support-card, and service-link checks on the live URL. Leave the previous commit available for rollback.

Deliverables: working live revision, source commit, desktop/mobile/large-screen evidence, updated `DESIGN.md`, and the PDF-based project reference with implementation status and deferred off-site/measurement tasks.

## Risks and controls

- Wrong logo assumption: verify supplied artwork and visible glyph bounds before layout adjustments.
- Accidental redesign: retain the user-approved card composition and brand system; limit changes to readability, interaction, and responsive structure.
- Motion causing collisions: reserve layout space, bound transforms, and verify reduced motion and touch.
- Hidden or duplicated search content: compare source, hydrated DOM, and JavaScript-disabled views for matching core facts.
- Misleading completion claims: distinguish implemented crawlability from search indexation, AI recommendations, lead attribution, and device coverage.
- Unapproved content or external changes: retain factual source boundaries; list off-site actions and unavailable integrations as follow-ups.

## Completion gate

The revision is complete only after the user's logo and overlap complaints are visually addressed, the three support cards work on mouse/keyboard/touch, the viewport matrix has no critical clipping or collision defects, the search checklist passes for all eight pages, and the deployed version is verified. A build passing alone is insufficient.
