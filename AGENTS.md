# Repository Guidelines

## Project Structure & Module Organization

- `src/app/`: Next.js App Router routes (e.g., `src/app/about/page.tsx`) plus `layout.tsx` and `globals.css`.
- `src/components/`: shared React components, organized as `sections/` (page sections) and `ui/` (reusable primitives).
- `public/`: static assets served as-is (fonts in `public/fonts/`, brand assets in `public/brand/`).
- `doc/`: product/brand writing and design notes (includes `*_zh-TW.md` files).

Use path aliases from `tsconfig.json`: import app code via `@/*` (maps to `src/*`).

## Build, Test, and Development Commands

- `npm install`: install dependencies (uses `package-lock.json`).
- `npm run dev`: run local dev server at `http://localhost:3000`.
- `npm run build`: production build + static export (writes to `out/` via `output: "export"` in `next.config.ts`).
- `npx wrangler pages dev out`: preview the static export locally (matches Cloudflare Pages hosting).
- `npm run lint`: run ESLint (configured in `eslint.config.mjs`).

## Coding Style & Naming Conventions

- Language: TypeScript + React (strict mode enabled in `tsconfig.json`).
- Formatting: follow existing style (2-space indent, double quotes, semicolons). No Prettier config is present.
- Routes: `src/app/<route>/page.tsx`; shared UI belongs in `src/components/` instead of duplicating markup across pages.

## Testing Guidelines

No unit/integration test runner is currently configured. Treat `npm run lint` and `npm run build` as the required pre-PR checks, and add a test framework only when a change warrants it.

## Commit & Pull Request Guidelines

- Commits generally follow a Conventional-Commits style prefix (examples seen: `feat:`, `refactor:`, `style:`); keep the subject short and descriptive (Chinese/English both acceptable).
- For larger changes, include a brief bullet list in the commit body describing what changed and why.
- PRs: include a clear description, link related issues, and attach screenshots for any UI/content changes. Ensure static export constraints remain valid (avoid server-only features that won’t work with `output: "export"`).

## Configuration & Security Notes

- Do not commit secrets: `.env*` files are ignored by `.gitignore`. Prefer documenting required variables in the PR description if needed.
- Build artifacts (`.next/`, `out/`, `node_modules/`) should never be committed.
