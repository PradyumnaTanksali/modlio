# Assets Manifest — Modlio

> The sandbox couldn't fetch binary assets directly, but every URL is documented below. Run the script on your machine before starting work.

---

## Existing Modlio asset (legacy — to be retired)

```
public/brand/
└── globe-legacy.png    ← https://modlio.vercel.app/globe.png
```

**Note:** The current Modlio site uses a generic globe icon that doesn't read as a flagship product line. Per BRIEF §6.1, this gets retired. Build the new **stacked-blocks SVG monogram** instead. Keep the legacy file in `public/brand/` only as a reference; don't link to it from the new site.

---

## Optional — Arogyam screenshots for the Platforms section

If you have actual Arogyam UI screenshots, place them here:

```
public/platforms/arogyam/
├── dashboard.png       ← (your screenshot)
├── casepaper.png       ← (your screenshot)
└── chat-marathi.png    ← (your screenshot)
```

These are optional. The Platforms section (BRIEF §4.3) leads with a **schematic system diagram** as the primary visual — not screenshots. Screenshots, if added, are secondary, smaller, and shown below the diagram. If you don't have them, skip them entirely.

---

## Fetch script

Add this to your repo root as `scripts/fetch-assets.sh`:

```bash
#!/usr/bin/env bash
set -euo pipefail
mkdir -p public/brand

# Legacy globe — for reference only
curl -sLo public/brand/globe-legacy.png "https://modlio.vercel.app/globe.png"

echo "Done. Now build the new stacked-blocks SVG monogram per BRIEF §6.1."
```

Run with:

```bash
chmod +x scripts/fetch-assets.sh && ./scripts/fetch-assets.sh
```

---

## What this site does NOT need

- **No team photos.** §4.7 (Provenance) is plaintext only.
- **No icons.** Zero icons by design — see BRIEF §9.
- **No gradient images, no blob renders.** That's Scene's territory.
- **No serif type.** That's Corsw's territory.
- **No Mermaid or chart libraries.** Schematic diagrams are hand-rolled SVG (BRIEF §3.6).

---

## New SVG monogram to build

Per BRIEF §6.1, build this in `public/brand/monogram.svg`:

```svg
<!-- Three stacked blocks; the top one has an electric-blue inset square -->
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="24" height="24" fill="#0A0B0F"/>
  <rect x="4" y="14" width="16" height="6" fill="#E8EAED"/>
  <rect x="4" y="6" width="10" height="6" fill="#E8EAED"/>
  <rect x="4" y="6" width="6" height="6" fill="#3B82F6"/>
</svg>
```

The blue inset square in the top block echoes Corsw's vermillion square in *its* corner monogram — siblings, but different colors and different geometric arrangements. Corsw's mark is a corner. Modlio's mark is a stack.

Use it for: favicon, OG image, footer.

---

## Schematic diagrams to build (in code, not as images)

Per BRIEF §3.6 and §4.3, build these as inline SVG in `components/primitives/SystemDiagram.tsx`:

1. **Arogyam architecture diagram** (§4.3, Platform 1) — required.
   - Boxes: `Web (Next.js)` · `API (tRPC)` · `Postgres (RLS)` · `pgvector` · `Rust WS sidecar` · `Python LangGraph` · `WhatsApp (Gupshup)` · `ABDM Sandbox`
   - Connectors: 1px electric-blue lines showing data flow
   - Animated `pathLength` draw on scroll-into-view

2. **Methodology phase-flow diagram** (§4.6) — required.
   - Four boxes for Discovery → Architecture → Build → Operate
   - Horizontal arrows, animated draw

These are not images. They're SVG components. Don't try to source them as files.
