# Nyan Lin Zaw · Responsive Blueprint Portfolio — V2

**Frontend only:** `index.html`, `styles.css`, and `app.js`, plus local static images and standalone HTML/CSS/JS demonstrations. No React, Node build, Python backend, external APIs, databases or account setup.

## Run

Unzip and open `index.html` in a modern browser. The interactive demonstration files in `demos/` are relative local HTML files. For best results use any static web host. To test locally with a simple static HTTP server (this serves files only; it is not an application backend):

```bash
cd blueprint-portfolio-v2
python3 -m http.server 8000
```

Visit `http://localhost:8000/`. You can publish the files directly to GitHub Pages, Netlify or another static file host.

## Primary interaction: **SCROLL SIDEWAYS**

At desktop widths **1024px and larger**, simply turn the mouse wheel down or swipe a trackpad to advance **left to right**. Move the cursor anywhere in the page, including the header. Scrolling does **not** require clicking arrow buttons. Native horizontal trackpad movement also works, as do drag-to-pan on noninteractive space, keyboard arrows/PageUp/PageDown and optional arrows/section links. The viewport is one continuous horizontal row of nine adjacent blueprint sheets, not a vertical document or a slide deck. No scroll snap blocks incremental motion.

On tablet/mobile widths **below 1024px**, the same content naturally flows **vertically**, one column, without a horizontal document scrollbar. Mobile is touch-scrollable.

## Projects, modal behavior, and immersive experiences

Every main project, previous-work entry, education entry and software screenshot has a real working open action. Clicking `EXPAND`, `VIEW EXPERIENCE` or a project tile opens an accessible native HTML `<dialog>` with detailed content. Close with **CLOSE ×**, **Escape**, or a click outside the dialog. A project's interactive demo has an additional `01 / PROJECT STORY` / `02 / INTERACTIVE DEMO` view switch. Choosing `Immerse in experience` opens the latter immediately.

The original supplied self-contained HTML demos are used without rewriting their underlying logic:

- `demos/trove.html` — original Trove scanner, with a small presentation/layout adjustment to float three transparent object cutouts beside the physical artifact and show its speech panel **beneath** the artifact. Tested tap/select + scan, response and reset. Local predefined responses, no AI API or camera.
- `demos/nand.html` — supplied two-NAND digital-logic breadboard game with A/B toggles, wires, validation, and truth table. Tested chip placement and input toggling.
- `demos/bacnet.html` — supplied local-only BACnet educational simulation for device discovery, objects and property operations. **No real BACnet/IP packets.**

The demo runs in an isolated same-origin iframe within the HTML dialog, preserving the uploaded source's working JS and CSS rather than risking style conflicts. On closing a modal the iframe is removed, which stops demo animations and clears its state. Standalone links open each local HTML file in a new tab.

The separate **BACnet Observatory** is documented as a concept; its actual Python-hosted server was not supplied, so this frontend portfolio does not misrepresent it as running.

## Visual design and asset rules

Figma export/source documents in `docs/` were used for page order, typographic hierarchy, dark-blue/white/orange alternation, blueprint technical grid, crosshair details, experience content and interaction affordances. Light sheets use dark ink; dark blue sheets use light ink. Buttons contrast with both. The images in `assets/` are the supplied files, including the provided transparent Trove object art. Screenshots and full-backdrop blueprint panels intentionally retain their internal rectangular backgrounds; they are not passed off as transparent cutouts. Background grids are generated in CSS.

Figma layout is used as the visual reference, but the site is not claimed to be pixel-identical to all Figma frames.

## Claims/links to confirm before publication

Project dates, awards and professional metrics have been sourced from the attached Figma and specification, not independently fact-checked. Verify details before publishing. The résumé, email, LinkedIn and GitHub URL were not provided. They are visibly disabled/explained instead of linking to made-up destinations. To add verified links, edit the top-level `CONTACT` object in `app.js`.

The Instagram redesign image was **not** supplied as an isolated full-resolution asset, so that project displays a clearly labeled typography-only preview rather than an unrelated stock graphic. No backend-driven MindRoute service is claimed.

## Files

- `index.html` — semantic HTML and full exhibition layout
- `styles.css` — desktop horizontal and mobile vertical layouts, colors, dialog and responsive styles
- `app.js` — wheel/trackpad handling, navigation, project catalog, modal/dialog interactions, contact configuration
- `assets/` — supplied screenshots, SVG, transparent object illustrations and posters
- `demos/` — three real frontend interactive HTML prototypes
- `docs/` — user-provided primary source specification and build prompt
- `ASSET_MANIFEST.md` — asset inventory
- `previews/` — QA screenshots
- `test_portfolio.py` — automated browser-based QA script; optional development-only dependency Playwright

## Verified QA

Tested Chromium document rendering and interaction at **1440×900, 1280×800, 1024×768, 768×1024, 390×844 and 320×700**. Desktop vertical wheel scroll moved the horizontal exhibition 550px without arrows, and also worked while the cursor was over the fixed header. Mobile widths had no document-level horizontal overflow and retained vertical scrolling. Verified project modal opening/closing, direct immersive demo selection, Escape-to-close, and no JavaScript page errors. Tested Trove scanning + resetting, NAND chip creation + toggle, and checked BACnet HTML initialization. Browser direct navigation to local paths is restricted in the QA environment; the layout was rendered via injected HTML/CSS/JS and relative asset data URLs for preview/testing, rather than a full end-to-end static HTTP hosting test. Verify links and iframe loading once deployed on a normal static host.
