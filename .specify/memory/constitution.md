# AI Template Constitution

<!--
Sync Impact Report
==================
Version: 1.0.0 (initial creation)
Ratification Date: 2025-09-30
Last Amended: 2025-09-30

Principles Established:
- I. Type Safety & Modern TypeScript
- II. React 19 Best Practices
- III. Tailwind 4 CSS-First Approach
- IV. Code Quality & Consistency
- V. Documentation Discipline
- VI. Package Management Hygiene

Templates Status:
✅ plan-template.md - Reviewed, no updates needed (already has Constitution Check section)
✅ spec-template.md - Reviewed, no updates needed (already has proper scope guidance)
✅ tasks-template.md - Reviewed, no updates needed (task structure compatible)

Follow-up TODOs: None - all placeholders filled
-->

## Core Principles

### I. Type Safety & Modern TypeScript

**Declaration**: All TypeScript code MUST follow strict type safety patterns without compromising maintainability.

**Rules**:
- MUST use discriminated unions over "bag of optionals" to prevent impossible states
- MUST use `as const` objects instead of enums for enum-like behavior
- MUST use top-level `import type` for type imports (not inline `import { type ... }`)
- MUST declare return types on top-level module functions (except JSX components)
- MUST use Result types instead of throws for error handling requiring manual try-catch
- MUST prefix generic type parameters with `T` (e.g., `TKey`, `TValue`)
- MUST NOT use `any` type inside generic functions without proper constraints
- MUST NOT use unchecked indexed access without validation

**Rationale**: Type safety catches bugs at compile time and serves as living documentation for AI assistants. Discriminated unions eliminate entire classes of runtime errors by making invalid states unrepresentable. Explicit return types improve code comprehension and refactoring safety.

### II. React 19 Best Practices

**Declaration**: All React code MUST leverage React 19 features and MUST NOT use deprecated patterns.

**Rules**:
- MUST pass `ref` as a prop (React 19 native support)
- MUST NOT use `forwardRef` (deprecated in React 19)
- MUST NOT use `useCallback` (compiler optimization handles this)
- MUST use named exports for components (unless framework requires default exports)
- MUST research with MCP Exa Docs and Context7 for React 19 features before implementation

**Rationale**: React 19 compiler optimizations make manual memoization unnecessary. Avoiding deprecated patterns ensures forward compatibility and reduces bundle size. Named exports improve IDE tooling and refactoring.

### III. Tailwind 4 CSS-First Approach

**Declaration**: All styling MUST use Tailwind 4 with `@theme` blocks and MUST NOT reference legacy configuration patterns.

**Rules**:
- MUST use Tailwind 4 `@theme` blocks for customization
- MUST NOT create or reference `tailwind.config.js` or `tailwind.config.ts`
- MUST use full component names (no abbreviations like `btn`, `pc`)
- MUST research with MCP Exa Docs and Context7 for Tailwind 4 features before implementation
- SHOULD use MCP CSS-First tools for CSS-only solutions

**Rationale**: Tailwind 4's CSS-native configuration eliminates JavaScript configuration complexity. Full component names improve code searchability and AI assistant comprehension. CSS-first solutions reduce JavaScript bundle size and improve performance.

### IV. Code Quality & Consistency

**Declaration**: All code MUST follow consistent naming conventions and structure to maximize AI assistant effectiveness and human maintainability.

**Rules**:
- MUST use kebab-case for file names (e.g., `my-component.ts`)
- MUST use camelCase for variables and functions (e.g., `myVariable`, `myFunction`)
- MUST use UpperCamelCase (PascalCase) for classes, types, and interfaces
- MUST use ALL_CAPS for constants and enum values
- MUST NOT use default exports (except when framework requires it, e.g., Next.js pages)
- MUST use interface extension via `extends` keyword, not intersection types with `&`
- MUST mark properties as `readonly` when immutability is intended

**Rationale**: Consistent conventions reduce cognitive load and improve code searchability. Named exports enable better IDE tooling and refactoring. These patterns are explicitly designed to help AI assistants understand and maintain the codebase.

### V. Documentation Discipline

**Declaration**: Code documentation MUST be concise, purposeful, and linked, avoiding noise while maximizing clarity.

**Rules**:
- MUST use JSDoc comments for non-self-evident function behavior
- MUST be concise in JSDoc comments
- MUST use JSDoc `@link` tag to reference related functions/types in the same file
- MUST NOT create documentation files unless explicitly requested by user
- MUST declare explicit return types (which serve as documentation for AI assistants)

**Rationale**: Over-documentation creates maintenance burden. Type signatures and well-named identifiers serve as primary documentation. JSDoc comments should explain "why" not "what" when the "what" is clear from types and names.

### VI. Package Management Hygiene

**Declaration**: All package installations MUST use latest versions via package manager commands, not manual `package.json` edits.

**Rules**:
- MUST use `bun i` to install packages
- MUST NOT manually edit `package.json` to add dependencies
- MUST research package compatibility before installation

**Rationale**: AI training data has a cutoff date. Package manager commands ensure latest compatible versions are installed. Manual version selection risks using outdated or incompatible packages.

## Development Workflow

### Git Integration
- MUST run `gitbutler mcp update_branches` after completing tasks where code was created or files edited
- MUST follow git commit message conventions with descriptive summaries based on conventional commits

### MCP Integration
- MUST maintain `library.md` file to store Context7 Library IDs
- MUST check `library.md` before searching for library documentation via Context7
- MUST update `library.md` when new libraries are researched

### Task Planning
- MUST use `.specify` workflow for complex features (spec → plan → tasks → implement)
- MUST mark ambiguities with `[NEEDS CLARIFICATION: specific question]` in specs
- MUST focus on WHAT and WHY in specs, not HOW (no implementation details)

## Governance

### Amendment Procedure
1. Proposed amendments must document rationale and impact
2. Version must be incremented according to semantic versioning:
   - **MAJOR**: Backward incompatible principle removals or redefinitions
   - **MINOR**: New principles added or materially expanded guidance
   - **PATCH**: Clarifications, wording fixes, non-semantic refinements
3. Amendment date must be updated to ISO format (YYYY-MM-DD)
4. Sync Impact Report must be prepended as HTML comment
5. All dependent templates and guidance files must be reviewed for consistency

### Compliance Verification
- All code changes must adhere to applicable principles
- Code review must verify constitutional compliance
- AI assistants must read relevant rule files before making changes
- Rule violations must be justified with documentation or rejected

### Template Synchronization
- Constitution changes MUST trigger review of:
  - `.specify/templates/plan-template.md` (Constitution Check section)
  - `.specify/templates/spec-template.md` (scope alignment)
  - `.specify/templates/tasks-template.md` (task categorization)
  - `CLAUDE.md` and `rules/*.md` (principle consistency)

### Versioning Policy
- Version format: MAJOR.MINOR.PATCH
- Each amendment increments appropriate version component
- Version history tracked via git commits
- Breaking changes require MAJOR version bump and migration guidance

**Version**: 1.0.0 | **Ratified**: 2025-09-30 | **Last Amended**: 2025-09-30
