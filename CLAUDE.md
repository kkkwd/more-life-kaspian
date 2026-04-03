# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SvelteKit portfolio site with bilingual support (English/Chinese), dark mode, and scroll animations. Single-page design with anchor-based section navigation.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build (Vercel by default)
- `npm run build:docker` — production build targeting Node adapter
- `npm run check` — run svelte-check + TypeScript validation (run before PRs)
- `npm run preview` — preview production build locally

No test suite is configured. Use `npm run check` as the minimum verification step.

## Architecture

**Single-page app** — all content lives in `src/routes/+page.svelte`, composed from section components.

**Content system** — locale content objects in `src/lib/content/en/site.ts` and `src/lib/content/zh/site.ts`. Types defined in `src/lib/content/shared.ts`. When editing content, update both locale files unless the change is intentionally language-specific.

**Theming & preferences** — `src/lib/stores/preferences.ts` manages dark/light theme, locale, and reduced-motion preferences persisted to localStorage.

**Dual adapter** — `svelte.config.js` switches between `@sveltejs/adapter-node` and `@sveltejs/adapter-vercel` based on the `BUILD_TARGET` env var.

**Styling** — Tailwind CSS with custom CSS variables for theming. Dark mode uses class-based strategy. Custom design tokens defined in `tailwind.config.ts`.

## Conventions

- Components: `PascalCase.svelte` in `src/lib/components/`
- Utilities/stores: `camelCase` in `src/lib/utils/` and `src/lib/stores/`
- 2-space indentation, single quotes in TS files
- No ESLint/Prettier configured — preserve surrounding style
- Keep reusable logic in `src/lib/`, not in route files
