# Repository Guidelines

## Project Structure & Module Organization

This repository is a SvelteKit portfolio site. Main application code lives in [`src/`](./src).

- `src/routes`: route entrypoints and page composition.
- `src/lib/components`: reusable UI components.
- `src/lib/content/en` and `src/lib/content/zh`: localized site content objects.
- `src/lib/stores`: Svelte stores for shared state.
- `src/lib/utils`: small utility helpers.
- Root config files include `svelte.config.js`, `vite.config.ts`, `tailwind.config.ts`, and `tsconfig.json`.

Keep content-only edits inside the locale files. Put reusable logic in `src/lib`, not directly in route files.

## Build, Test, and Development Commands

- `npm install`: install dependencies.
- `npm run dev`: start the local Vite dev server.
- `npm run build`: create a production build.
- `npm run build:docker`: build for the Node deployment target.
- `npm run preview`: preview the built site locally.
- `npm run check`: run `svelte-check` and TypeScript validation.
- `npm run start`: run the built Node server from `build/index.js`.

Run `npm run check` before opening a PR, especially after changing content shapes or component props.

## Coding Style & Naming Conventions

Use TypeScript and Svelte idioms already present in the repo. Follow existing formatting: 2-space indentation, single quotes in TS files, and concise object literals.

- Components: `PascalCase.svelte`
- Utilities and stores: `camelCase` filenames where practical
- Content files: keep locale keys structurally aligned between `en` and `zh`

No dedicated ESLint or Prettier config is checked in, so preserve the surrounding style when editing.

## Testing Guidelines

There is no separate unit or E2E test suite configured yet. Treat `npm run check` as the minimum verification step.

For UI or content changes:

- confirm both language variants build cleanly
- verify affected routes in `npm run dev`
- check for broken anchors, missing localized fields, and invalid external links

## Commit & Pull Request Guidelines

Recent commits use short, direct messages such as `Sync site content updates` and `routes and utils initial`. Prefer imperative, scoped messages that describe the actual change.

For pull requests:

- summarize user-visible changes
- list any affected locales or routes
- include screenshots for layout or styling updates
- note the verification performed, usually `npm run check`

## Content Sync Notes

When editing project, blog, or about content, update both [`src/lib/content/en/site.ts`](./src/lib/content/en/site.ts) and [`src/lib/content/zh/site.ts`](./src/lib/content/zh/site.ts) together unless the change is intentionally language-specific.
