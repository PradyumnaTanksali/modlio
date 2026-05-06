# MODLIO — Site Brief

> A landing site for **Modlio** — Corner Software's flagship enterprise product division. Currently at `modlio.vercel.app`, deploying to `modlio.corsw.in`. The current site is a generic agency template — *"Transform Your Digital Vision," contact form, services grid* — and gets rewritten end to end.

---

## 0. The three-brand triangulation

This site sits in a **family of three**, each in its own repo:

- **Modlio** (this site) — enterprise division. Engineered + technical + schematic.
- **Corsw** — parent holding company. Built in a separate repo. Reference at `corsw.in`.
- **Scene** — sibling indie studio. Already deployed at `scene-studio-xi.vercel.app`. Reference only.

You are not building Corsw or Scene in this repo. They are siblings only.

The triangle:

|   | **Corsw** (parent) | **Modlio** (this) | **Scene** (sibling) |
|---|---|---|---|
| **Role** | Holding company | Enterprise product line | Indie studio |
| **Aesthetic** | Architectural, monolithic, dark, paper-like | Engineered, technical, precise, dark with one electric accent | Warm, indie, Hinglish, off-white |
| **Voice** | Institutional, severe | Confident, technical, measured | Casual, witty, Hinglish |
| **Background** | Off-black `#0E0E0E` | Carbon `#0A0B0F` (cooler, slightly bluer) | Off-white `#FAFAF7` |
| **Accent** | Vermillion `#D4452C` (rationed) | Electric blue `#3B82F6` (more permissive) | Soft gradient (lavender → peach → rose) |
| **Type** | Inter + EB Garamond + JetBrains Mono | Inter + JetBrains Mono (no serif) | Geist + Geist Mono |
| **Motion** | Severe — 8px max distance | Precise — 12px, slightly more permissive | Soft — 16-24px, easeOut |
| **Imagery** | Zero — type only | Engineered diagrams, system maps, schematic wireframes | Soft gradient blob |
| **Density** | Annual report dense | Technical documentation dense | Editorial generous |

**The key distinction:** Modlio is what an *engineering team* would design. Corsw is what an *editorial team* would design. Scene is what a *creative duo* would design.

If Corsw feels like *Stripe Press* and Scene feels like *Anthropic*, Modlio should feel like **Linear's documentation pages**, **Stripe's API docs**, or **the Vercel platform pages** (not their marketing) — confident, technical, schematic.

---

## 1. Brand

**Name:** Modlio
**Etymology:** "Module" + "Folio" — modular portfolio. A division that builds modular, durable enterprise systems.
**Positioning:** Corner Software's enterprise product division. Builds the long-running, high-stakes systems — healthcare platforms, financial automation, IoT infrastructure.
**One-line:** *Modlio builds enterprise software that doesn't go down.*

**The thesis:**
> *Most software is disposable. Some software is supposed to last a decade.*
> *Modlio builds the second kind. Systems with audits, uptime SLAs, and decade-scale thinking.*
> *We are the enterprise division of Corner Software.*

**Tone rules:**
- Confident, technical, never bombastic. Engineers writing for engineers and the people who buy from them.
- Specific over generic. Always say "98.7% uptime measured across 18 months" instead of "high uptime." Numbers replace adjectives.
- No "transform your digital vision." No "cutting-edge." No "innovative." These words are banned in every file.
- No exclamation marks. No emojis.
- Some technical jargon is *good* — readers are CTOs, engineering directors, and procurement leads. Don't dumb it down.
- First-person plural. Past-tense, not future-tense ("Built", "Shipped", "Operating" — not "Will build", "Coming soon").

---

## 2. Information architecture

**Single page. Eight sections.** No nav (matches Corsw + Scene). Multi-page deep links (`/products/arogyam`, `/case/<x>`) come in Phase 2.

```
1. Masthead         → identity + thesis line + technical signature
2. The Brief        → what Modlio actually does, in 3 paragraphs
3. Platforms        → the products, in detail (Arogyam now; more later)
4. Capabilities     → what we build well, as 6 specific cards
5. Engineering Standards  → the bar, in measurable terms
6. Methodology      → how we work, as a 4-step diagram
7. Provenance       → parent + locations + people
8. Contact          → not a form; a structured directive
```

---

## 3. Design system

### 3.1 The aesthetic in one sentence

**Engineered minimalism** — like Linear's documentation pages, Stripe's API reference, or a system architecture diagram rendered as a website. Heavy use of monospace, schematic dividers, and tabular precision. The site should feel like the engineering wiki of a serious company.

**Mood references** (study, don't copy):
- **Linear's `/docs`** — quiet density, sidebar-less, mono-leaning.
- **Stripe Docs** — precise, technical, perfectly typographic.
- **Vercel platform pages** (the technical ones, not marketing) — schematic.
- **Cloudflare Workers landing** — engineered confidence.
- **Cursor.com** — technical with one electric accent.
- **Fly.io's older site (~2023)** — terminal aesthetic without trying too hard.
- **Plain.com** — quiet, restrained, blue accent.

**Anti-references**:
- Modlio's current site (`modlio.vercel.app`) — generic agency.
- Anthropic, Notion's marketing — too soft (Scene's territory).
- Stripe Press — too editorial (Corsw's territory).
- Datadog, New Relic — too dashboard-marketing.
- Salesforce, IBM, Oracle — corporate-dead.

### 3.2 Visual system

**Background:** Carbon `#0A0B0F`. Cooler and slightly bluer than Corsw's off-black. Pure black is rejected — too cheap.

**Ink:** `#E8EAED` — paper-cool white, not warm like Corsw/Scene. This is the cool-temperature side of the family.

**Accent:** **Electric blue `#3B82F6`** — Tailwind's `blue-500`, deliberately. Used more permissively than Corsw's vermillion:
- All section number prefixes.
- All hover states (rules, links, card borders).
- All schematic diagram lines and accents.
- Status indicators ("operating", "in build").
- The masthead signature line.

**The full palette:**
- `--bg:           #0A0B0F`
- `--bg-card:      #111317`     (subtle elevation)
- `--bg-code:      #14171C`     (code blocks)
- `--ink:          #E8EAED`
- `--ink-muted:    #9CA3AF`
- `--ink-faint:    #6B7280`
- `--ink-rule:     #1F2228`     (hairline borders)
- `--accent:       #3B82F6`
- `--accent-dim:   #1E40AF`     (muted accent for dim states)
- `--success:      #10B981`     (operating systems)
- `--warning:      #F59E0B`     (in-build systems)

### 3.3 Typography

**Display + body:** **Inter** via `next/font`. Same family as Corsw — they share the parent's typography backbone. Modlio uses slightly tighter tracking for a more technical feel.

**Mono:** **JetBrains Mono** — the engineer's monospace. Used heavily here, more than on Corsw or Scene. ~30% of the visible type on the page is mono.

**No serif.** Modlio is the only sibling without a serif — that's the differentiator. Numerals are mono, not italic Garamond.

```ts
// app/fonts.ts
import { Inter, JetBrains_Mono } from "next/font/google";

export const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
```

**Type scale:**

| Use | Class | Size | Line height | Tracking | Weight |
|---|---|---|---|---|---|
| Masthead | `text-[clamp(2.75rem,7vw,5rem)]` | 44–80px | `leading-[1.0]` | `tracking-[-0.025em]` | `font-medium` |
| Section H | `text-[clamp(1.75rem,4vw,2.75rem)]` | 28–44px | `leading-[1.1]` | `tracking-[-0.02em]` | `font-medium` |
| Subhead | `text-lg md:text-xl` | 18–20px | `leading-[1.4]` | `tracking-[-0.01em]` | `font-medium` |
| Body | `text-[15px] md:text-base` | 15–16px | `leading-[1.65]` | normal | `font-normal` |
| Code/mono | `font-mono text-[13px]` | 13px | `leading-[1.6]` | `tracking-[-0.01em]` | `font-normal` |
| Label | `font-mono text-[11px] uppercase` | 11px | `leading-[1.4]` | `tracking-[0.12em]` | `font-medium` |
| Numeral prefix | `font-mono` | section H size | `leading-[1.0]` | normal | `font-normal` |

**Type rules:**
- All section number prefixes are **mono numerals in electric blue**, formatted as `01.` `02.` `03.` — not Roman numerals (Corsw owns those), not italic (Scene's lane).
- Inline code (`<code>`) is mono, electric blue, with a 1px border, no background.
- All numeric data uses `tabular-nums` — uptime percentages, response times, dates align in vertical columns. Critical for the technical feel.

### 3.4 Layout

- **Container:** `max-w-[1200px] mx-auto px-6 md:px-12`. Same as Corsw.
- **Section padding:** `py-28 md:py-36`. Slightly tighter than Corsw because content is denser.
- **Grid:** 12-column with hairline dividers visible (`--ink-rule`) on desktop only — but unlike Corsw's `0.04` opacity, Modlio's grid lines are at `0.4` and explicitly drawn between columns. Schematic feel.
- **Hairline rules everywhere:** at the top and bottom of every section, between rows in tables, between cards. Mondrian-precise.
- **Square edges throughout** — same rule as Corsw. Rounded corners are Scene's territory.

### 3.5 Motion

```ts
// lib/motion.ts
export const ease = [0.4, 0, 0.2, 1] as const;  // material-style precise

export const reveal = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease },
};

export const stagger = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.06, delayChildren: 0.1 },
};
```

**Motion rules:**
- 12px max for translate. More than Corsw's 8px, less than Scene's 16-24px.
- Durations: 500-700ms.
- **One persistent motion**: a thin electric-blue scanline that traverses the masthead horizontally on first load — 1.5s, single pass, then disappears. Like a CRT diagnostic.
- Schematic diagrams in §4.6 (Methodology) animate their connecting lines on scroll-into-view — lines draw from start to end via `pathLength`. Distinctive, technical, on-brand.
- Hover states change opacity AND add a 1px electric-blue underline that draws left-to-right. 200ms.
- Respect `prefers-reduced-motion`.

### 3.6 Schematic visuals — Modlio's distinctive element

This is what separates Modlio from Corsw (which has no visuals) and Scene (which has the gradient blob).

Each section that explains a system gets a **schematic diagram** — a hand-drawn-feeling SVG that looks like a system architecture sketch. Examples:

- **Platforms section** (§4.3): Each product gets a schematic of its architecture as a system diagram with named boxes, electric-blue connectors, and tiny mono labels. Not a decorative blob — a real diagram.
- **Methodology section** (§4.6): The 4 steps render as a horizontal flow diagram with labels.
- **Engineering Standards section** (§4.5): Renders as a checklist/spec table, not a diagram.

**Diagram rules:**
- Strokes: 1px electric blue (`#3B82F6`) for connections, 1px ink-muted for box outlines.
- Fills: bg-card `#111317` for boxes, transparent for connections.
- Labels: mono 11px, ink-muted.
- Animation on scroll: lines draw via `pathLength` over 1.2s, staggered. Boxes fade in 80ms apart.
- Always responsive — diagrams collapse to a vertical flow on mobile.

### 3.7 No texture overlay

- **No noise overlay.** (Scene has it. Distinction.)
- **No column blueprint grid.** (Corsw has that. Distinction.)
- Modlio's "texture" is the schematic diagrams themselves.

---

## 4. Section specifications

### 4.1 Masthead

**Layout:** Full width, ~50vh. Bottom-anchored content (text starts about halfway down). The horizontal scanline animates at the top.

**Elements:**
1. Top eyebrow (mono, label-style): `MODLIO · ENTERPRISE DIVISION · CORNER SOFTWARE`
2. The horizontal electric-blue scanline (1px, animates left-to-right on mount, 1.5s, single pass).
3. The masthead H, three lines:
   > Modlio builds
   > enterprise software
   > that doesn't go down.
4. Below the H, a hairline rule.
5. Below the rule, a 4-column tabular signature row in mono:
   ```
   STATUS    OPERATING       │ PARENT     CORSW
   FOUNDED   2025            │ DIVISION   I OF II
   ```

**Animation:** scanline draws on mount, masthead H fades up at 200ms delay, signature row fades up at 400ms delay.

### 4.2 The Brief — what Modlio does

**Layout:** Two-column on desktop. Left column (4 cols): label `— 01 — THE BRIEF`. Right column (8 cols): the thesis as three short paragraphs.

**Copy:**

> *Modlio is the enterprise division of Corner Software. We build long-running, high-stakes systems — healthcare platforms, financial automation, IoT infrastructure — for organisations that need uptime, audits, and decade-scale thinking.*
>
> *We do not chase trends. We do not pivot for funding rounds. We pick a small number of platforms and we run them for the long term. The goal is software that compounds.*
>
> *Modlio takes a small amount of carefully selected client work each year. The bar is set by the systems we already operate.*

The first paragraph is set in section-H size. The next two are body weight.

**Below the paragraphs:** a single inline mono code-style line:
```
        $ uptime: 18 months · 0 critical incidents · 4 systems operating
```
(In electric blue. Decorative but real — track real uptime once a system is live.)

### 4.3 Platforms — the products

**The centerpiece section.** Each product gets:
- A schematic system diagram (left, 50% width on desktop)
- A description block (right, 50%)

Status badges:
- `OPERATING` — green dot + label
- `IN BUILD` — amber dot + label
- `IN RESEARCH` — hollow dot + label

#### Platform 1 — Arogyam (the flagship)

**Header:** `01 / AROGYAM`
**Status:** `OPERATING` (green dot)
**Tagline:** `Practice OS for Indian healthcare practitioners.`
**Description:**
> *A multi-tenant platform for Indian doctors and clinics. Bilingual (English + Marathi + Hindi), DPDP Act 2023 compliant from day one, and ABDM-ready for ABHA-linked records.*
>
> *Arogyam handles appointment scheduling, patient records, casepapers with versioning, per-doctor RAG chatbots, and WhatsApp-first patient journeys. Currently operating Tenant #1 in Solapur.*

**System diagram (schematic):**
- Boxes: `Web (Next.js)` · `API (tRPC)` · `Postgres (RLS)` · `pgvector` · `Rust WS sidecar` · `Python LangGraph` · `WhatsApp (Gupshup)` · `ABDM Sandbox`
- Connectors: electric-blue 1px lines showing data flow.
- Annotations (tiny mono): `multi-tenant via RLS` · `bilingual MR/EN/HI` · `DPDP-native`.

**Tabular block at bottom:**
```
TENANTS         1 active · 12 in pipeline      tnt
LANGUAGES       English · Marathi · Hindi      lng/03
COMPLIANCE      DPDP 2023 · ABDM (M2)          cmp
STACK           Next.js · Postgres · Rust ·    stk
                Python LangGraph · pgvector
```

**Outbound link (bottom-right):** `arogyam.modlio.com →` (or wherever Arogyam lives publicly)

#### Platform 2 — Reserved slot (placeholder, real entry once shipped)

**Header:** `02 / —`
**Status:** `IN RESEARCH` (hollow dot)
**Description:**
> *A second platform is in early research. Modlio's pace is deliberate — we ship one platform fully before starting the next.*

No diagram. Just a hairline empty placeholder with mono `RESERVED · RETURN IN 2027`.

This is a deliberate flex: showing what's *not* built communicates patience and discipline.

### 4.4 Capabilities — what we build well

**Layout:** A 3×2 grid on desktop. Each cell is a card with a hairline border, square edges.

**Section header:** `— 02 — CAPABILITIES`

Each capability card has:
- Top: mono ordinal `01.` through `06.` in electric blue.
- A 2-3 word capability label (medium weight, larger).
- A 1-2 sentence description (body weight).
- A bottom row of 3-5 mono tags.

**The six capabilities:**

```
01. MULTI-TENANT PLATFORMS
    Postgres RLS, schema isolation, audit logs.
    Built so a leak is impossible, not unlikely.
    rls · prisma · audit · billing

02. AI ORCHESTRATION
    LangGraph, tool routing, RAG pipelines, eval harnesses.
    We treat LLMs as components, not magic.
    langgraph · pgvector · rag · evals

03. BILINGUAL SYSTEMS
    Indic-language-first products. Marathi, Hindi, Tamil,
    soon Bengali. Translation as data, not afterthought.
    indictrans2 · bhashini · i18n

04. COMPLIANCE-NATIVE BUILDS
    DPDP, ABDM, HIPAA-aligned, SOC2-ready.
    Compliance is part of migration #1.
    dpdp · abdm · audit-trail

05. REAL-TIME INFRASTRUCTURE
    Rust + Axum WebSocket fan-out, presence, sync.
    Where Node falls over, we go to Rust.
    axum · tokio · websocket · fly

06. DESKTOP-NATIVE WORKFLOWS
    Tauri 2 + SQLCipher for offline-first clinical tools.
    The frontline doesn't always have wifi.
    tauri · sqlcipher · biometric
```

### 4.5 Engineering Standards

**Layout:** A long table-style block. This is where the technical depth shows. Mono throughout.

**Section header:** `— 03 — ENGINEERING STANDARDS`

```
SUBHEAD: The bar. Measurable terms.

UPTIME              99.9%       SLO across all operating platforms
RESPONSE TIME       <300ms      P95, API reads
DEPLOY CADENCE      Daily       Production-equivalent staging
TEST COVERAGE       >80%        Unit + integration, gated in CI
ON-CALL             24×7        Rotating, alerting < 5 min
DATA RESIDENCY      ap-south-1  Primary; never cross-border
ENCRYPTION          AES-256     Column-level for PII; pgcrypto
AUDIT RETENTION     7 years     Append-only logs, immutable
COMPLIANCE          DPDP 2023   ABDM Sandbox · ISO 27001 in progress
INCIDENT RESPONSE   <1 hour     Acknowledge; <4 hour mitigate
```

**Type:** Mono, `tabular-nums`. Each row is a hairline-divided table row.

**Footer of section (small):**
> *These are operating numbers, not aspirations. Where a metric is in flight, we list it as 'in progress.' Where it's not measured, we don't list it.*

### 4.6 Methodology — how we work

**Layout:** A horizontal 4-step flow diagram on desktop. Stacks vertically on mobile.

**Section header:** `— 04 — METHODOLOGY`

**Subhead:** *Four phases. Each one ends in something running.*

**The four phases:**

```
PHASE 01            PHASE 02            PHASE 03            PHASE 04
DISCOVERY  ─────→   ARCHITECTURE  ──→   BUILD  ────────→    OPERATE
2 weeks             2 weeks             8-16 weeks          ongoing

Read the           Decide on the        Ship in two-week     Run, monitor,
problem.           shape of the         increments.          extend.
Talk to            system before        Each two-weeks       SLOs are real.
operators.         a single line is     ends with            We don't
Specifically.      committed.           production code.     hand off.
No discovery
deck.
```

**Diagram:** an electric-blue horizontal flow connecting the four phases. Phase boxes are square, hairline-bordered, with each phase fading in 100ms apart on scroll-into-view, and the connecting arrows draw via `pathLength` after the boxes settle.

**Footer of section:**
> *Modlio does not run sales cycles. The first conversation is a 30-minute technical call. If there is no fit, we say so on the call.*

### 4.7 Provenance

**Layout:** Two columns on desktop. Left: parent + locations. Right: people note.

**Section header:** `— 05 — PROVENANCE`

**Copy:**

```
LEFT COLUMN:

PARENT          Corner Software (corsw.in)
DIVISION        I of II
SIBLING         Scene (scene.corsw.in) — indie product studio
FOUNDED         2025
LOCATIONS       Hyderabad · Pune · Solapur

RIGHT COLUMN (paragraph form):

Modlio is operated by a small engineering team distributed across three
Indian cities. The team is intentionally small. We do not subcontract.
Every line of code shipped under the Modlio name is written by the team.

Modlio is wholly owned by Corner Software Pvt. Ltd. We have no investors
and we are not raising. We grow by retained earnings.
```

### 4.8 Contact — not a form

**Layout:** Single centered block. No form fields. Plaintext directives only.

**Section header:** `— 06 — CONTACT`

**Copy:**

```
For platform inquiries, write to:        platforms@modlio.in
For engineering inquiries:                engineering@modlio.in
For press or partnership:                 hello@modlio.in

We respond within 48 hours on business days.
We do not take unsolicited proposals.
We do not run sales calls.

The first call is technical. 30 minutes. No deck.
```

**Below this:** a single hairline rule, then the colophon.

**Colophon:**
```
Corner Software Pvt. Ltd. · 2024–2026
Modlio is a division of Corner Software.
Built by the Modlio engineering team.
Set in Inter and JetBrains Mono.
Version 2.0 · May 2026.
```

A single 8px electric-blue square `■` at the very bottom — Modlio's signature mark, sibling to Corsw's vermillion square.

---

## 5. Component architecture

```
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── fonts.ts
│   └── opengraph-image.tsx
├── components/
│   ├── sections/
│   │   ├── Masthead.tsx
│   │   ├── Brief.tsx
│   │   ├── Platforms.tsx
│   │   ├── Capabilities.tsx
│   │   ├── EngineeringStandards.tsx
│   │   ├── Methodology.tsx
│   │   ├── Provenance.tsx
│   │   └── Contact.tsx
│   └── primitives/
│       ├── PlatformCard.tsx
│       ├── CapabilityCard.tsx
│       ├── SystemDiagram.tsx        # the schematic SVG
│       ├── PhaseFlowDiagram.tsx     # methodology
│       ├── StatusBadge.tsx          # green/amber/hollow dot + label
│       ├── SectionRule.tsx          # the "— 01 —" headers
│       ├── ScanLine.tsx             # masthead animation
│       ├── DataTable.tsx            # mono tabular rows
│       └── Wordmark.tsx
├── lib/
│   ├── motion.ts
│   ├── platforms.ts                 # data for platforms section
│   └── utils.ts
└── public/
    └── brand/                       # see ASSETS.md
```

---

## 6. Logo / Wordmark direction

### 6.1 The Modlio mark
A geometric arrangement representing modular building blocks. Not a globe (the current site's `globe.png` is generic and gets retired).

```svg
<!-- 24x24 monogram — three stacked blocks, the top one electric blue -->
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="24" height="24" fill="#0A0B0F"/>
  <rect x="4" y="14" width="16" height="6" fill="#E8EAED"/>
  <rect x="4" y="6" width="10" height="6" fill="#E8EAED"/>
  <rect x="4" y="6" width="6" height="6" fill="#3B82F6"/>
</svg>
```

The blue inset square in the top block echoes Corsw's vermillion square in *its* corner monogram — siblings, but different colors and different geometric arrangements. The Corsw mark is a corner. The Modlio mark is a stack.

### 6.2 The Modlio wordmark
Set in **Inter, weight 500, all-caps, no letter-spacing** — `MODLIO`. Tighter than Corsw's wordmark (which has `0.04em` letter-spacing).

### 6.3 Where the marks appear
- Favicon: monogram only.
- OG image: monogram + wordmark.
- Top of every section divider: small wordmark (12px) in mono-style positioning.
- Footer: monogram + wordmark + "A division of Corner Software".

---

## 7. SEO + OG

```html
<title>Modlio · Enterprise software that doesn't go down.</title>
<meta name="description" content="Modlio is the enterprise product division of Corner Software. We build long-running, high-stakes platforms in healthcare, fintech, and IoT. A division of Corsw." />
```

**OG image** — generate via `next/og`:
- Bg: `#0A0B0F`
- Top-left: stacked-blocks monogram + wordmark `MODLIO`.
- Centered title:
  > Enterprise software
  > that doesn't go down.
- Bottom-left mono: `OPERATING · 4 SYSTEMS · 99.9% UPTIME`
- Bottom-right mono: `A DIVISION OF CORSW`
- One thin electric-blue horizontal line halfway down.

---

## 8. Performance + accessibility

- LCP < 1.6s on 4G.
- No images above the fold. The schematic diagrams are inline SVG.
- Lighthouse mobile: ≥98 / 100 / 100 / 100.
- Color contrast: bone on carbon is ~13.5:1. Electric blue `#3B82F6` on carbon is 4.7:1 — fine for body weight or larger, but small mono labels in blue should be tested on a per-instance basis.
- Schematic diagrams must include `<title>` and `<desc>` tags inside the SVG for screen readers — describe the architecture in plain text.
- `prefers-reduced-motion` skips the scanline, the diagram path-draw animations, and section reveals.
- All tabular data uses real `<table>` elements with proper headers. Don't fake tables with divs.

---

## 9. Hard rules

### Never
- Never use the words "transform," "innovative," "cutting-edge," "world-class," "next-generation." They are banned in every file.
- Never use a contact form. Plaintext email directives only.
- Never use icons from a library. The schematic diagrams are custom SVG; arrows are unicode `→`.
- Never use rounded corners >0px on cards or borders. Same rule as Corsw.
- Never use a gradient. Anywhere.
- Never use the warm off-white from Scene (`#FAFAF7`). Modlio's whites are cool (`#E8EAED`).
- Never use vermillion (`#D4452C`). That's Corsw's accent.
- Never use the warm-gradient palette. That's Scene's.
- Never use Hinglish. That's Scene's voice.
- Never use serif type. That's Corsw's signature.
- Never animate an element more than 12px.
- Never use `<div>`s when a `<table>` is correct.

### Always
- Always use `tabular-nums` for any numeric data — uptime percentages, response times, dates.
- Always render schematic SVGs inline with `<title>` and `<desc>` for a11y.
- Always show real numbers. If a metric is aspirational, label it `target`. If it's measured, label it `measured`.
- Always use mono for status badges, ordinals, and labels.
- Always link to the parent (`corsw.in`) in the footer.
- Always link to the sibling (`scene.corsw.in`) in the Provenance section.
- Always test against the Corsw and Scene sites side-by-side. The three should look like a family.

---

## 10. Setup commands

```bash
npx create-next-app@latest modlio --typescript --tailwind --app --no-src-dir --import-alias "@/*"
cd modlio
pnpm add framer-motion
pnpm dlx shadcn@latest init     # New York, neutral, dark default
# As with Corsw, do not add shadcn components. Keep cn() utility only.
```

**Don't add anything else.** No icon libraries, no Mermaid, no chart libraries — the diagrams are hand-rolled SVG.

---

## 11. Stretch polish

In rough order of payoff:

1. **An interactive system diagram** for Arogyam — hover any box to see a tooltip with technical details (which Postgres extension, which Rust crate, etc.). Distinctive on-brand.
2. **A `/changelog` page** — versioned platform milestones. Mono, dense.
3. **A `/uptime` page** — real-time uptime of all operating systems via a status-page-style integration. Critical for the "doesn't go down" thesis to be credible.
4. **A `/case/arogyam` deep page** — full case study of Arogyam's build. Honest about what worked and what didn't. Most enterprise sites lie about this; Modlio's edge is being honest.
5. **Per-product OG images** — different OG card for each platform.

---

## 12. Definition of done

- [ ] Eight sections present, in order, with exact copy from §4.
- [ ] Inter + JetBrains Mono loaded via `next/font`. No serif.
- [ ] All 10 color tokens present in `globals.css`.
- [ ] Electric blue used for: section ordinals, hover states, schematic diagrams, status indicators, scanline, signature square.
- [ ] Stacked-blocks monogram + OG image generated.
- [ ] At least one schematic system diagram (Arogyam) implemented as inline animated SVG.
- [ ] No icon imports. No gradient utilities. No rounded corners >0.
- [ ] All numeric data uses `tabular-nums`.
- [ ] Lighthouse mobile ≥98 / 100 / 100 / 100.
- [ ] All animations respect `prefers-reduced-motion`.
- [ ] When viewed alongside Corsw and Scene, the three sites read as a coherent family.

---

## 13. The vibe check

When a CTO or engineering director lands, in this order:
1. *"This isn't a marketing page. This is a documentation page."*
2. *"They've actually built things. Look at the system diagram."*
3. *"They publish their uptime numbers. That's brave."*
4. *"They don't want a sales call. Good."*
5. *"Send them an email."*

If a visitor thinks "this is generic enterprise B2B," you've failed. Modlio should feel engineered.

If a visitor confuses Modlio with Scene or Corsw, you've also failed. The three are siblings, not the same person.
