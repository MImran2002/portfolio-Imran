# MASTER CODING-AGENT PROMPT — BUILD MY RESPONSIVE BLUEPRINT PORTFOLIO

You are the senior frontend engineer and visual interaction designer responsible for implementing my developer/product-designer portfolio. Study the attached Figma reference screenshots/exports and both source PDFs BEFORE coding. Read `PORTFOLIO_MASTER_SPEC.md` in full and treat it as the acceptance contract. Reuse available image/SVG assets and existing standalone interactive prototypes; do not fake links, invent awards, or replace my artwork with generic stock graphics.

## ABSOLUTE REQUIREMENT: NAVIGATION DIRECTION
**DESKTOP: THE ENTIRE PORTFOLIO IS A HORIZONTALLY SCROLLING WEBSITE. IT MUST MOVE SIDEWAYS FROM LEFT TO RIGHT, NOT TOP TO BOTTOM.** Recreate the row of neighboring blueprint panels seen in the Figma export. On desktop width >= 1024px, use a horizontal scroll container (`overflow-x: auto`), appropriate panel widths, responsive alignment, and optional snap points. Make wheel/trackpad scroll feel natural and support arrow buttons, navigation anchors, touch trackpads, and keyboard. Expand a project horizontally by widening its panel or inserting an adjacent expanded detail sheet, shifting other panels RIGHT; do not revert main page to a vertical feed. Avoid scroll traps and ensure internal interactive demo scrolling still works.

**MOBILE: VERTICAL RESPONSIVE EXPERIENCE.** On phones (<768px) reflow the same content into an intentional readable, vertically scrolling one-column portfolio. Do NOT shrink desktop into a sideways strip on mobile. Tablet can use a tested transition layout. Desktop and mobile must preserve the same typography, palette, and content hierarchy.

## NON-NEGOTIABLE IMAGE POLICY
All cutout images, product art, drawn buildings, mockup devices, illustrations, logos, and project icons should have **transparent backgrounds** (alpha PNG/WebP or transparent SVG). Never ship an asset with a rectangular white/navy backdrop baked into the illustration. Use CSS for panel and blueprint grid backgrounds. Preserve the physical white scan patch and meaningful UI screenshot backgrounds; only strip unwanted surrounding canvas. Where a supplied asset lacks alpha, create a clean transparent rendition without changing its foreground contents. Avoid creating new images if an appropriate original asset already exists.

## VISUAL IDENTITY
Deep navy `#082452`, blueprint blue `#0C3F9B`, raised blue `#174987`, white `#F4F8FF`, cyan `#67DDF5`, orange `#FF791E`, muted text `#A9C9ED`; technical drafting grid, white/blue hairlines, orange slim labels and buttons, crosshair corners, narrow vertical annotations, halftone chevrons. Desktop typography based on 82px hero / 51px section / 31px project / 20px subhead / 18px body / 14px small / 12px labels, resized sensibly on mobile. Use blueprint drafting details sparingly; don't turn it into a generic UI kit.

## SOURCE-BASED PANEL ORDER, LEFT TO RIGHT
1. Personal intro (Nyan Lin Zaw, software manager/product designer, long bio, resume and contact drawer, orange halftone artwork).
2. Education & awards (Berea College, Aspire, Santa Clara, awards, drawn campus assets).
3. Current work in Berea College (Labor Status Form, CELTS, screenshots, code/team responsibilities and impact metrics).
4. Additional experience and project showcases (as shown in desktop layout).
5. Publications, presentations, and competition awards.
6. Trove and NAND Lab immersive experiences.
7. BACnet Lab and BACnet Observatory, including GitHub link where actual URL exists.
8. Ending/contact panel.
Expanded project sheets include MindRoute, Instagram Redesign, MAMAGURT Pitch, Trove, NAND Lab, BACnet Lab; additional experience cards appear elsewhere in the Figma exports. Preserve exact sequence and labels from original assets wherever legible rather than treating this list as a license to reorder arbitrary content.

## REQUIRED PROJECT BEHAVIOR
Every project: summary, timeline/process, image preview, action buttons, technical detail and context-aware `Expand` / `Close`. Expanding must animate layout without overlaying neighboring project sheets. Never use a full-screen modal for normal project detail. Lazy load complex demos. Build reusable project data schema.

Trove: reuse supplied actual blueprint artifact with real white patch; three TRANSPARENT floating illustrated assets PEN, BURMESE STAMP, ROCKET KEYCHAIN beside artifact with NO square cards. Mouse drag, touch drag, tap-to-select/tap-to-scan and keyboard. Cyan scan animation; predefined story messages in FULL-WIDTH CHAT PANEL BELOW the artifact. Reset; clean shutdown on collapse.

NAND Lab: simulated interactive breadboard with two NAND gates wired into an AND gate, real graph/state validation, toggle A/B, LED, full 4-row truth table and hints. Explicitly educational logic-level, not an electrical model.

BACnet Lab: simulated Who-Is/I-Am, BACnet device discovery, object properties, ReadProperty and WriteProperty console. BACnet Observatory: show local Python-hosted digital-twin showcase and a safe frontend demo or link where verified; never present fake BACnet/IP packets as real traffic.

MindRoute: route comparison with cognitive load, comfort, and other grounded metrics. Preserve illustrated/map reference without implying new live backend capabilities. Other projects from reference should use supplied mockups and text, with calls to action only when real destination provided.

## TECHNICAL BUILD
First inspect repository and preserve its stack; if blank, use React, TypeScript, Vite, scoped Tailwind/CSS, Motion, and SVG. Create separate `HorizontalExhibition` and `MobilePortfolio` views driven by a common content source. Use reduced-motion support, focus-visible styles, keyboard navigation and accessible status announcements. Ensure wheel scroll conversion doesn't steal scrolling from active internal demos or form controls. Use `ResizeObserver`/relative SVG coordinates for responsive overlays, not fixed viewport offsets. Be meticulous about overflow, fixed headers and horizontal scroll progress.

## TESTS / ACCEPTANCE
Verify 1440x900 and 1280x800 desktop scroll all content LEFT→RIGHT by both wheel and navigation controls; check interaction and dynamic width when project expands. Verify 1024 tablet boundary and 768/390/320 mobile stacks with NO horizontal page overflow. Confirm all transparent images have alpha and no visible boxes. All `Expand`, `Close`, scan, wire, reset, navigation, and contact actions work. Check links for supplied destinations, fallback absent links to accessible disabled/explanatory state; no placeholders that look functioning. Run lint/typecheck/tests and inspect screenshots in both desktop and mobile. Provide a README and asset manifest showing sources and transparent conversions.

## DELIVERABLES
Provide complete source code, responsive implementation, assets, interactive demos, build/run instructions, and visual previews/screenshots. Do not stop at a wireframe or write-up. Do not declare completion until desktop horizontal navigation, mobile vertical layout, and the three interactive experiences are exercised and verified.
