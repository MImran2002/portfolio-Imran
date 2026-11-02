# NYAN LIN ZAW — PORTFOLIO MASTER DESIGN & DEVELOPMENT SPECIFICATION
Version 1.0 | Source of truth: supplied desktop Figma-export screenshots, Portfolio.pdf, Untitled (2).pdf, and project artwork.

## 1. Non-negotiable navigation rule
**DESKTOP MUST SCROLL HORIZONTALLY, LEFT TO RIGHT. NOT VERTICALLY.** This is the primary identity of the portfolio. At desktop breakpoints (>= 1024px), create a single continuous, horizontally scrolling exhibition of distinct, adjacent panels. Main scroll gestures (trackpad horizontal/vertical wheel, Shift+wheel, keyboard arrows where focus allows, and explicit Next/Previous controls) should navigate horizontally; scrolling must remain usable and never trap keyboard users. Maintain native browser behavior in open sub-interfaces and accessible focus management. The global document must not become a normal vertically stacked landing page. Do not force the entire exhibit into tiny cards to fit viewport width.

**MOBILE MUST SCROLL VERTICALLY, TOP TO BOTTOM.** At < 768px, reflow the same content to legible stacked sections, with touch scrolling and expandable project sheets; do not require sideways movement for core content. Tablet 768–1023px may use vertical flow or a carefully tested hybrid, but should favor usability.

## 2. Source references & fidelity
- Figma-export sheet (Untitled (1).jpg / Untitled(1).png / Untitled (2).pdf): use as primary authority for visual composition, grid system, order of panels, labels and expand/close states.
- `Portfolio.pdf` (38 pages): use as primary authority for typography/color rules, and detailed Trove and NAND Lab interactions, specific illustration assets, and accessibility specs.
- Reuse existing local illustrations, screenshots, SVGs, interactive HTML demos and project assets when supplied; do not regenerate imagery that already exists.
- Do not make up awards, project dates, jobs, exact measurements, profile/contact details or live links. Preserve supplied wording where feasible, flag discrepancies as review items.

## 3. Visual language
Architectural blueprint + editorial technical document. Fine evenly spaced square grid, narrow drafted margins, engineering corner crosshairs, vertical side annotations, blueprint outline diagrams, crisp rectangular strokes, muted off-white content panels, saturated orange accents. Preserve density/contrast and asymmetric multi-panel composition from Figma rather than converting to generic dashboard cards.

Colors: `#082452` deep navy, `#0C3F9B` blueprint blue, `#174987` raised blue, `#F4F8FF` drafting white, `#67DDF5` technical cyan, `#FF791E` action orange, `#A9C9ED` muted text. Implement shared CSS variables and accessibility-safe text contrasts.

Typography from portfolio PDF (desktop targets): hero 82px; main section 51px; project 31px; subheading 20px; body 18px where room allows; small 14px; drafting labels 12px. Adapt responsive sizes with CSS clamp and preserve minimum legibility (don't make body text 7–10px just to mirror an artboard screenshot). Clear serif/display vs mono drafting label pairing may be used where consistent with reference.

**GLOBAL ASSET RULE:** Every object illustration, decorative illustration, logo, device mockup, diagram cutout, and transparent overlay should have **no baked-in background**. Export PNG/WebP with alpha or SVG with transparent viewport. Transparent assets can be placed on top of navy, grid or white panels. Do not mistake the deliberate page/section background for an image background; screenshots of real UIs may retain their own meaningful internal UI background if necessary for fidelity. Avoid white rectangular matte around cutouts. Inspect alpha channels and crop unwanted empty margins. Do not remove visible material/fill from actual products or the Trove scanning patch.

## 4. Desktop information architecture and panel rhythm
From LEFT to RIGHT, consistent with attached layout:
1. **Introduction:** Nyan Lin Zaw, Software Manager // Product Designer, summary, View Resume / Contact Info, orange kinetic halftone-chevron artwork.
2. **Education & Awards:** Berea College, Aspire Institute, Santa Clara University, campus/college drawn buildings, awards and distinctions; expandable education panels.
3. **Current Berea College experience:** Labor Status Form, CELTS app screenshots, team leadership and impact metrics.
4. **Work narrative / experience:** work in progress, collaborations, previous employment with screenshots or floating-device cutouts; only supported facts.
5. **Publications & Presentations / competition awards:** technical manuscript-style blocks, framed award illustration(s), project spotlight.
6. **Immersive projects:** Trove and NAND Lab preview graphics, `Interactive Experience` actions.
7. **BACnet Lab and BACnet Observatory:** distinct panels and link to GitHub or embed, clear indication of educational simulations versus actual BACnet/IP interoperability.
8. **Closing / Thank You / contact:** contact actions, accessible footer, easy return-to-start.
Expanded states from source design include selected-project detail sheets (MindRoute, Instagram Redesign, MAMAGURT Pitch, Trove, NAND Lab, BACnet Lab) and contact/education drawers. Maintain the visible authoring style with orange `Link` and `Close` controls. Secondary experience/org cards: The AI Collective, Association of American University Women, NextGen Justice, Berea College; use provided claims, not invented ones.

Desktop implement as a horizontally arranged scroll track with panels using widths appropriate to content (some narrow editorial columns, some double-wide projects). Use native `overflow-x:auto` and CSS scroll snapping optionally; do not hijack pointer gestures blindly. An always-visible progress/index indicator, Previous/Next arrows, anchor nav, and focus management are required. When a project expands, it may widen its own panel or reveal an adjoining detail panel in the horizontal sequence. Expansion should shift neighboring panels sideways, preserve current position intelligently, and never create a vertical document outside the track. An embedded demo can scroll internally if truly necessary, with a clear focus/exit affordance.

## 5. Interactions and expandable projects
Common project model: compact stage/preview, title, tags, dated phases, awards or outcomes if documented, short case study, `Expand`, `Close`, `Link` and source/demo actions. Expanded state should present project story, process, technical stack, results, and an interactive proof-of-work when supplied. Animation: Motion layout transitions (250–450ms), resize/reduced-motion safe, no modal as primary project navigation. Persist UI state during horizontal navigation where reasonable.

- **MindRoute:** route-planning experience; interactive alternative route comparison and cognitive-load/comfort indicators; do not imply fully live routing unless connected.
- **Instagram Redesign:** research → prototype → testing narrative; show provided mockups; claims from Figma source.
- **MAMAGURT Pitch:** branded product mockups and competition journey; no fabricated product/medical claims.
- **Trove:** reuse exact blue-pattern physical-artifact illustration with transparent background; three floating transparent pen, Myanmar postage stamp and rocket keychain images (NO square item cards). Drag/drop onto WHITE scanning patch, or tap item then scanner. Scanning line; response/chat bubble BELOW entire artifact and items. Front-end predefined responses. Use original, personal story responses from supplied `Portfolio.pdf` if this is intended to represent the case-study version. Reset and keyboard support.
- **NAND Lab:** frontend-only two-NAND AND-gate wiring mission. Real connection state, toggle A/B, LED, truth table, hints, validation and reset. Represent accurately as educational logic simulation, not full electrical breadboard simulation.
- **BACnet Lab:** discover simulated network devices (Who-Is / I-Am), inspect objects, ReadProperty, WriteProperty, protocol trace. No false claims about live BACnet packet network.
- **BACnet Observatory:** optional locally hosted Python/JS digital twin; if embedding into static-only portfolio, show a recorded/demo interface or link and explicitly distinguish simulated mode from the separate Python server mode.

## 6. Mobile design
Single-column order mirrors the desktop story: hero → education → work experience/impact → projects → research/awards → additional experience → contact. Sticky compact nav, optional section jump menu. Project cards fill content width with accessible expand/collapse; complex labs use responsive fitting or an `Open full demo` action. Avoid unusably tiny screenshots: use image cutouts, captions, and intentionally cropped previews. Use large touch targets (~44px). Test 320, 375, 390, 430, 768px widths. Ensure no horizontal overflow on mobile except explicitly labeled mini galleries. Don't use vertical writing-mode for essential content on mobile.

## 7. Content inventory (source-derived)
Name: Nyan Lin Zaw. Role: Software Manager // Product Designer. Hero copy begins `I build human-centered software and thoughtfully engineered experiences that connect technology with real-world needs...`.
Current work at Berea College: developing/testing BereaCorps web application; maintaining four institutional apps serving 2,000+ users; reviewing/testing/merging >30 PRs per term across four repositories (as Figma text); leading/mentoring 14 student developers (another Figma state mentions 16 interns per year); 35% reduction in PR backlog over two months; 75 hours saved for CELTS department (verify attribution/measurement before publishing); support workflow improvements and stakeholders.
Education/awards references: Berea College full scholarship, Anna Mae and Phyllis Shumaker Award, Computer Science Department Award, Aspire Google Scholarship, Aspire Institute, Santa Clara University Innovate & Elevate. Historical award amounts shown in source are not necessary for display unless verified.
Project dates/awards: MindRoute 2026 timeline and two awards; Instagram Redesign 2024–25 timeline and competition award; MAMAGURT Pitch 2025 timeline and first-place pitch award. Preserve source wording and verify any dates before publication.
Publications/presentations: product-team communication; client-side AI/ML pruning in legal sector; co-cultural identities and Appalachian college student health-seeking behaviors. Use source text without inventing titles/links.
Additional organizations and work cards: The AI Collective, Association of American University Women (Berea Chapter), NextGen Justice, Berea College operations.

## 8. Suggested architecture
React + TypeScript + Vite (unless existing app dictates otherwise), Tailwind or scoped CSS, Motion for layout, React lazy/Suspense for heavy demos. Semantic HTML. Component structure: `PortfolioShell`, `HorizontalExhibition`, `ExhibitionPanel`, `PanelNavigation`, `PortfolioHero`, `EducationPanel`, `ExperiencePanel`, `ImpactMetrics`, `ResearchAwardsPanel`, `ProjectGallery`, `ExpandableProjectPanel`, `ContactDrawer`, `MobilePortfolio`, and lazy standalone project modules. Project descriptors stored in typed data files, content separated from UI.

## 9. Interaction/accessibility/performance acceptance
- At >=1024px all MAIN navigation proceeds LEFT→RIGHT; vertical wheel/trackpad input maps horizontally when user is not interacting with an independently scrollable child. Explicit left/right controls and keyboard access also work.
- Mobile <768px is truly vertical; no squeezed desktop strip or horizontal page overflow.
- Figma layout color balance, section grouping, title hierarchy, orange action markers and technical details are preserved.
- Every decorative or isolated object image is alpha-transparent, with image asset audit; avoid framed screenshot backgrounds being mistakenly removed.
- Project expansions don't overlay unrelated content or cause runaway scroll; demos work on mouse and touch.
- Links/actions and resume/contact details are wired only if actual destinations are supplied; use explicit placeholders otherwise.
- `prefers-reduced-motion`, accessible name/role/keyboard behavior, clear focus states, alt text, lazy loading, no console errors.
- Test 1440x900, 1280x800, 1024x768, 768x1024, 390x844, 320x700; screenshot regression desktop horizontal positions and mobile sections.

## 10. Delivery sequence
1) Inventory files and exact supplied image assets; map source assets to reference panels. 2) Build design tokens and grid. 3) Implement desktop LEFT-TO-RIGHT horizontal viewport; verify using wheel and nav. 4) Implement mobile vertical breakpoint. 5) Add content and transparent imagery. 6) Integrate expanded project details and games. 7) Add accessibility, performance and viewport tests. 8) Produce README/asset manifest and visual QA screenshots. Do not claim an interaction is built unless working and tested.
