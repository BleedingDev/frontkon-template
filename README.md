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

## Claude Code commands
Custom commands live in `.claude/commands` and run from the Claude Code command bar using `/command-name [optional arguments]`.
- `/new-feature` kicks off the mandatory spec-driven flow for net-new features.

### Spec kit commands
- `/specify` drafts or updates the feature spec from a natural-language brief.
- `/clarify` asks targeted follow-up questions and folds the answers back into the spec.
- `/plan` produces the implementation plan artifact, and `/tasks` breaks it into ordered work items.
- `/analyze` validates consistency across `spec.md`, `plan.md`, and `tasks.md` before implementation.
- `/implement` executes the agreed task list; `/constitution` manages the project constitution if rules change.

### Testing commands
- `/testing-plan`, `/testing-implement`, `/testing-analyze`, and `/testing-visual` generate and improve automated, Playwright, and visual testing coverage.
