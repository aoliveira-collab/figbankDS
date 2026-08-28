# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`@figbank/design-system` — a React 18 + TypeScript component library generated from the Figma file
**FigBank Design System** (`d4uJBUbsWeFMdQcJWUoPLI`), a dark, mobile-first banking UI. Figma is the
source of truth: tokens and components were extracted from it, and Code Connect maps them back.

Code comments and the README are in Portuguese; code identifiers are in English. Match that when editing.

## Commands

```bash
npm run dev            # Vite dev server → src/preview.tsx style-guide at localhost:5173
npm run lint           # tsc --noEmit (this is the only check; there is no ESLint and no test suite)
npm run build          # tsc --noEmit, then vite library build → dist/
npm run tokens:sync    # placeholder — prints a TODO, does not sync anything yet

npx figma connect parse           # validate all *.figma.tsx mappings without publishing
npx figma connect publish         # push mappings to Figma (needs FIGMA_ACCESS_TOKEN)
```

`.env` (gitignored) holds `FIGMA_ACCESS_TOKEN` and `FIGMA_FILE_KEY`. Note `scripts/sync-tokens.ts`
reads `FIGMA_TOKEN`, not `FIGMA_ACCESS_TOKEN` — they disagree today.

## Architecture

**Three layers, each mirroring a Figma page:**

- `src/tokens/` ← 🎨 Foundations. Figma Variables collections (`color/base`, `color/accent`,
  `color/semantic`, `color/text`, `spacing`, `radius`, `typography`).
- `src/components/` ← 🧩 Components. Primitives: Button, Input, StatusBadge, Divider, Spacer,
  BottomNavigation.
- `src/patterns/` ← 📐 Patterns. Banking-domain compositions: BankCard, TransactionItem, Toast,
  BottomSheet.

Every component directory follows the same four-file shape: `X.tsx`, `X.module.css`,
`X.figma.tsx` (Code Connect), `index.ts` (named + default export, plus prop types). New components
must be added to `src/index.ts`, which is the package's only public entry point.

**Tokens are duplicated by design.** `src/tokens/*.ts` (typed JS constants) and
`src/tokens/tokens.css` (CSS custom properties) hold the same values in two forms and are kept in
sync **manually** — `tokens:sync` is not implemented. Components consume tokens exclusively through
CSS variables in their `.module.css` (`var(--color-accent-primary)`, `var(--spacing-16)`,
`var(--radius-full)`), never by importing the TS constants. If you change a token, change both files.
Naming maps mechanically: `accent.primaryHover` → `--color-accent-primary-hover`, `spacing[16]` →
`--spacing-16`.

**Variant props use Figma's capitalized names, not idiomatic lowercase.** `variant="Primary"`,
`state="Disabled"`, `status="Active"`, `styleVariant="Outlined"`. This is deliberate — it lets
`figma.enum()` map 1:1 and lets components do `styles[variant.toLowerCase()]`. Keep the convention.
Where a Figma prop name collides with a DOM prop, the code renames it (`Button` has `variant`/`state`
and `Omit`s the native `type`/`disabled`; `Input` uses `labelText`).

## Code Connect

Ten `.figma.tsx` files, one per component, all pointing at node IDs in the same Figma file
(`?node-id=10:26` etc.). They use the **v1 React API**: `figma.connect(Component, url, { props, example })`
with `figma.enum()` / `figma.string()`.

Two things to know before touching these:

1. **The repo is intentionally on `@figma/code-connect@^1.4.8`, not v2.** Commit `aa2aca3`
   ("migrate all 10 Code Connect files to template format") actually moved the *other* direction —
   from v2 `.figma.ts` template files (`figma.code\`...\``, `figma.selectedInstance`, default-exported
   config object) back to v1 `.figma.tsx` React files — and pinned the dep down from `^2.0.0`.
   The CLI will nag about v2 being available; upgrading means rewriting all ten files.
   `git show HEAD~1:src/components/Button/Button.figma.ts` shows the v2 shape if it's ever needed.
2. **`importPaths` was dropped from `figma.config.json`** in that same commit, so published examples
   now show relative imports (`import { Button } from './Button'`) instead of
   `@figbank/design-system`. Re-add `importPaths` if the published snippets should reference the package.

A stale `src/components/StatusBadge/StatusBadge.figma.ts.bak` from that migration is deleted in the
working tree but not yet committed.

## Known packaging gaps

`npm run build` does not currently produce a publishable package; fix these before shipping:

- `package.json` declares `main`/`module: ./dist/index.js`, but Vite's `fileName` produces
  `dist/index.js.js` (ES) and `dist/index.cjs.js` (CJS) — the `.js` extension is appended to a name
  that already ends in `.js`.
- `types: ./dist/index.d.ts` is never emitted. `tsconfig.json` sets `declaration`/`declarationDir`,
  but `build` runs `tsc --noEmit`, so only Vite writes to `dist/`.
- The README tells consumers to import `@figbank/design-system/dist/tokens.css`, but Vite emits the
  bundled CSS as `dist/style.css`.
