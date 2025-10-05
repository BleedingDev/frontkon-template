# AI Template

React 19 starter powered by Bun, Rsbuild, Tailwind v4, and Biome. Playwright drives the end-to-end tests, and Lefthook keeps pre-commit checks fast.

## Tooling overview
- Bun 1.2.23 managed via [proto](https://moonrepo.dev/docs/proto/install)
- Rsbuild for bundling and dev server
- Biome for formatting and linting
- Lefthook pre-commit hooks running `bun run check` and `bun run test`
- Playwright for browser automation tests

## Getting started
1. Install proto and follow the instructions in the docs linked above.
2. From the repo root run `proto install` to provision the pinned Bun toolchain.
3. Install dependencies with `bun install` (this also installs Lefthook hooks via the `postinstall` script).
4. Start the app with `bun run dev`. Other useful tasks:
   - `bun run build` to create a production bundle
   - `bun run preview` to serve the built app locally

## Testing
- `bun test` runs the Bun-based unit and integration test suite.
- `bun run test:e2e` executes Playwright end-to-end tests. UI (`:ui`), debug (`:debug`), headed (`:headed`), and report (`:report`) variants are also available.

## Continuous integration
`.github/workflows/ci.yml` runs on pushes to `main` and pull requests. The workflow sets up Bun, installs dependencies, formats and lints with Biome, executes `bun test`, builds the app, installs Playwright browsers, and runs the Playwright suite. Playwright reports upload automatically on failure.

