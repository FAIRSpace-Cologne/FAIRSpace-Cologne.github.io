## Summary

This is a small static website (HTML/CSS/JS) used as the FAIRspace Cologne site. The codebase contains plain HTML pages, a single `script.js` for small DOM interactions, and `style.css` for layout and styling. There is no build toolchain by default—`package.json` only contains a `start` script that runs `live-server` for local preview.

When making changes, prefer minimal, non-breaking edits: the site is served statically and pages rely on relative paths.

## Where to look (quick links)

- Root HTML pages: `index.html`, `articles.html`, `team.html`
- Main assets: `style.css`, `script.js`, `images/`, `assets/fonts/`, `assets/icons/`
- Content sections and extra pages: `pages/` and `DataStorage/` contain additional markdown/html content
- Project metadata and dev script: `package.json` (use `npm install` then `npm start` for local preview)

## Big picture

- Architecture: static site — no backend services. Files are rendered by the browser directly.
- Data flow: content is provided as HTML/MD files in the repo and displayed using plain DOM. Javascript is minimal (menu toggle in `script.js`).
- Deployment: no CI/CD is configured in this repo. The site is suitable for GitHub Pages; enable Pages in the repo settings (branch: `main`, folder: `root`) or add a deploy script if you want automated publishing.

## Developer workflows & commands

- Local preview (recommended):

  1. From the project folder (where `package.json` resides) run:

     ```powershell
     npm install
     npm start
     ```

     This starts `live-server` and serves the static files so you can preview changes in the browser.

- Build/test: `package.json` contains placeholder scripts (`build` and `test`) that currently only echo messages. Do not rely on an existing build pipeline.

## Project-specific conventions and patterns

- Relative paths: pages and assets use relative links (e.g., `<link href="style.css">`, `<img src="images/...">`). When moving files, update relative paths accordingly.
- Navigation: the header nav is a simple ul in `index.html` (and reused across pages). To add a page, add an `<li><a href="newpage.html">New</a></li>` to the nav lists in each page.
- Small DOM behavior: use `DOMContentLoaded` to attach event listeners (see `script.js` pattern). Keep JS tiny and unobtrusive.
- Content organization: long-form content lives under `pages/` and `DataStorage/`. Prefer adding new content as separate HTML/MD files and link them from `articles.html` or nav as appropriate.

## Integration points & external dependencies

- Dev dependency: `live-server` (devDependency in `package.json`) — used only for local preview.
- No external APIs or backends are referenced in the codebase. All images/font files are local under `assets/` or `images/`.

## Safe editing checklist for AI agents

1. Avoid introducing build tooling or compilation unless requested. This repository is intentionally simple.
2. Preserve relative paths. Update links when moving files.
3. When editing HTML pages, update the header navigation across pages to keep navigation consistent.
4. Keep JavaScript changes minimal and add tests/CI only with explicit consent.
5. When adding significant features (new JS modules, CSS frameworks), document them in `README.md` and add an accompanying npm script.

## Examples (concrete edits)

- Add a nav item: edit `index.html` (and `team.html`, `articles.html`) and add a new `<li><a href="pages/my-new-page.html">My Page</a></li>` inside the `.nav-menu ul`.
- Add an image asset: place the file in `images/` and reference it as `<img src="images/my.png" alt="...">` from pages in the repo root. From nested folders, adjust relative path accordingly.

## Files to reference while coding

- `package.json` — scripts and dev dependency (`live-server`).
- `index.html`, `articles.html`, `team.html` — main page structure and nav conventions.
- `script.js` — DOMContentLoaded pattern and the current approach to JS.
- `style.css` — global styles, colors, and layout rules.

## When in doubt

- Ask the repo owner which GitHub Pages settings to use (root vs `/docs`) before adding a deploy pipeline.
- For larger JS/CSS changes, propose adding a build step and a short migration plan in the PR description.

---

If you'd like, I can also:
- add a small CONTRIBUTING.md describing the local dev steps shown above, or
- add a `gh-pages` deploy script/CI pipeline — tell me your preferred publish target.
