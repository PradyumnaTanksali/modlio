# CLAUDE.md — Operating Instructions for Modlio

> Read `BRIEF.md` first. Then this file. Then `ASSETS.md`. Then ask which step we're on.

---

## What this is

A single-page, engineered, technical-feeling site for **Modlio** — Corner Software's enterprise product division. The full spec is in `BRIEF.md` and **it is the source of truth**.

Modlio is one of three sites in a **family**:
- **Modlio** (this one) — enterprise + engineered + electric-blue.
- **Corsw** — parent holding company. Built in a separate repo. Reference at `corsw.in`.
- **Scene** — sibling indie studio. Already deployed at `scene-studio-xi.vercel.app`.

You are not building Corsw or Scene in this repo. They are siblings only.

---

## How we work together

1. **Don't improvise the copy.** §1 and §4 of the brief contain every word — masthead, the brief, platforms, capabilities, engineering standards, methodology. Use it verbatim. The six capabilities and the engineering-standards table are locked.
2. **Don't add dependencies.** §10 of the brief is final. No icon libraries, no Mermaid, no chart libraries — schematic diagrams are hand-rolled SVG.
3. **Build sections in the order of §4** — Masthead first, Contact last. Don't jump around.
4. **The Arogyam system diagram is a real build, not a placeholder.** It is the page's signature element. Spend time on it.
5. **Commit each section separately.** Conventional Commits: `feat: masthead`, `feat: platforms-arogyam`, `feat: engineering-standards`.
6. **Run `pnpm typecheck && pnpm lint && pnpm build` before saying done.**
7. **Re-read the triangulation table (BRIEF §0) every session.** It's the single most important rule for keeping Modlio distinct from its siblings.

---

## Code style

- TypeScript strict mode. No `any`.
- Server Components by default. `"use client"` only when a hook actually requires it.
- All animations use the shared variants from `lib/motion.ts`. Don't define motion variants inline.
- All colors come from CSS variables (`var(--ink)`, `var(--accent)`), never hex literals in JSX.
- All typography uses the type scale from BRIEF §3.3. No one-off `text-[42px]` values.
- Square edges everywhere. `rounded-*` is banned.
- Real `<table>` elements when rendering tables. Don't fake them with divs.

---

## Things to never do

- Never use the words "transform," "innovative," "cutting-edge," "world-class," "next-generation." Banned in every file.
- Never use a contact form. Plaintext email directives only.
- Never add icons from a library. Schematic diagrams are custom SVG; arrows are unicode `→`.
- Never use rounded corners >0px on cards or borders.
- Never use a gradient. Anywhere.
- Never use the warm off-white from Scene (`#FAFAF7`). Modlio's whites are cool (`#E8EAED`).
- Never use vermillion (`#D4452C`). That's Corsw's accent.
- Never use the warm gradient palette. That's Scene's.
- Never use Hinglish. That's Scene's voice.
- Never use serif type. That's Corsw's signature.
- Never animate an element more than 12px.
- Never use Roman numerals (`I.`, `II.`, `III.`) — those are Corsw's. Modlio uses mono Arabic (`01.`, `02.`, `03.`).
- Never use `<div>`s when a `<table>` is correct.
- Never write your own platform descriptions, capability copy, or engineering-standards numbers.

---

## Things to always do

- Always start with: "Reading `BRIEF.md`. Re-reading the triangulation table. We're at section X."
- Always use `tabular-nums` for any numeric data — uptime percentages, response times, dates.
- Always render schematic SVGs inline with `<title>` and `<desc>` for a11y.
- Always show real numbers. If a metric is aspirational, label it `target`. If it's measured, label it `measured`.
- Always use mono for status badges, ordinals, and labels.
- Always link to the parent (`corsw.in`) in the footer.
- Always link to the sibling (`scene.corsw.in`) in the Provenance section.
- Always wrap motion components with `useReducedMotion()` checks.
- Always test against `https://scene-studio-xi.vercel.app/` to confirm Modlio is *visually distinct*. The two should look like a family but not twins.

---

## When in doubt

- Triangulation question: re-read `BRIEF.md` §0. Are you using electric blue + mono numerals + schematic diagrams? If you're reaching for serif, vermillion, or warm gradients, stop.
- Copy question: re-read `BRIEF.md` §1 and §4. Use what's there. Don't invent.
- Animation question: re-read `BRIEF.md` §3.5. 12px max.
- Style question: re-read this file.
- Still stuck: ask. Don't guess on the brand-family.

---

## First message template

When the user says "let's build Modlio," your first response should be exactly this structure:

> Reading `BRIEF.md`. Re-reading the triangulation table in §0. The plan:
>
> 1. Bootstrap (Next.js + Tailwind + Framer + Inter + JetBrains Mono)
> 2. Tokens, fonts, layout shell
> 3. `<ScanLine>` + `<StatusBadge>` + `<DataTable>` + `<SystemDiagram>` primitives
> 4. Masthead
> 5. The Brief
> 6. Platforms (Arogyam diagram is a real build, not a placeholder)
> 7. Capabilities
> 8. Engineering Standards
> 9. Methodology
> 10. Provenance
> 11. Contact
> 12. Polish (a11y, perf, OG, monogram SVG)
>
> Starting on step 1. Ready?

Then wait for confirmation before running setup commands.
