# Design

## Source of truth
- Status: Draft
- Last refreshed: 2026-09-12
- Primary product surfaces: Allo Assistant landing page prototype
- Evidence reviewed: `Allo_Society_Website_Master_Brief.md`; `Allo.Society Brand Identity System.zip`; Warhol Arts, amo.co, Oddly Made, Readymag Ancient Artifacts, and Yaara Israeli references

## Brand
- Personality: Human, editorial, bright, assured, unexpected
- Trust signals: Plain-spoken positioning, visible matching process, specific service boundaries
- Avoid: Corporate staffing templates, polished stock-business language, purple gradients, generic card grids

## Product goals
- Goals: Make the managed Virtual Assistant offer understandable and memorable; convert founders and small teams into inquiries
- Non-goals: Hiring marketplace, candidate profiles, recruitment service, CRM, production backend
- Success signals: Support-area exploration, delegation understanding, assistant inquiries

## Personas and jobs
- Primary personas: Founders, small-team leaders, operators
- User jobs: Understand what a Virtual Assistant can own, picture delegation, begin a conversation
- Key contexts of use: Desktop research, laptop presentations, mobile discovery

## Information architecture
- Primary navigation: Support, What we handle, Process, Contact
- Core routes/screens: Single-page prototype
- Content hierarchy: Time-back positioning, support areas, delegated work, managed setup, CTA

## Design principles
- Transformation over decoration: Motion shows recurring work moving off the founder's desk
- One connected system: Every scene reuses lines, nodes, labels, or image fragments
- Editorial confidence: Large type, visible grid logic, restrained copy
- Tradeoffs: Richer desktop choreography simplifies into touch-safe vertical movement on mobile

## Visual language
- Color: Official deep red `#CC2B1D`, warm ivory `#F5F2EB`, and near-black `#0A0A0C`
- Typography: Official Cormorant logo treatment, wide grotesk display typography, and monospaced metadata
- Spacing/layout rhythm: 12-column desktop logic, asymmetric crops, oversized gutters
- Shape/radius/elevation: Mostly square; circles represent people and connection points
- Motion: Cursor drift, text compression, pinned-feeling scenes, purposeful state transitions
- Imagery/iconography: Documentary-style portraits and simple diagram marks

## Components
- Existing components to reuse: None
- New/changed components: Navigation, support-area constellation, delegated-work stack, setup process rail, CTA
- Variants and states: Rest, hover/focus, selected service, reduced-motion
- Token/component ownership: CSS custom properties in `src/styles.css`

## Accessibility
- Target standard: WCAG 2.1 AA
- Keyboard/focus behavior: Native buttons and links, visible focus rings, service selection via keyboard
- Contrast/readability: Ink/paper pairs and dark panels with high-contrast type
- Screen-reader semantics: Semantic landmarks and ordered process content
- Reduced motion and sensory considerations: Disable continuous transforms when requested

## Responsive behavior
- Supported breakpoints/devices: 320, 768, 1024, 1440 px
- Layout adaptations: Constellation becomes a vertical selector; overlapping portraits become a compact stack
- Touch/hover differences: Pointer follower and magnetic movement are removed on coarse pointers

## Interaction states
- Loading: Critical layout renders before imagery
- Empty: Not applicable to fixed prototype content
- Error: Images preserve background color and useful alt text
- Success: Inquiry CTA confirms intent with a mail link
- Disabled: Not applicable
- Offline/slow network: Text and diagram remain legible without images

## Content voice
- Tone: Direct, warm, specific
- Terminology: Assistant, support, work, delegation, time back
- Microcopy rules: Short sentences, no em dashes, no inflated claims

## Implementation constraints
- Framework/styling system: React, Vite, TypeScript, GSAP, Lenis, Motion, plain CSS
- Design-token constraints: Centralize color, type, and spacing values
- Performance constraints: No WebGL in prototype; motion uses transforms; reduced-motion support
- Compatibility constraints: Current evergreen browsers and mid-range Android
- Test/screenshot expectations: Build cleanly and inspect desktop plus mobile screenshots

## Open questions
- [ ] Confirm whether Cormorant should extend beyond the official logo treatment
- [ ] Replace prototype photography with approved Allo Society photography
- [ ] Confirm contact destination and primary market language
