# AI Agent Rules Navigation

This document serves as the main navigation for codebase rules. Each rule file contains specific guidelines for different aspects of the codebase.

## 📋 General Guidelines

**IMPORTANT**: Always read relevant rule files before making code changes. These rules ensure consistency and best practices across the codebase.

---

## 🎯 When to Use Each Rule

### Code Style & Naming
- **[naming-conventions.md](./rules/naming-conventions.md)** - Use when naming files, variables, functions, classes, types, or constants
- **[jsdoc-comments.md](./rules/jsdoc-comments.md)** - Use when adding documentation to functions and types
- **[styles.md](./rules/styles.md)** - Use when working with CSS and styling. Always use Tailwind 4 and MCPs for docs
- **[react.md](./rules/react.md)** - Use when working with React. We use React 19, so no forwardRef!

### TypeScript Patterns
- **[discriminated-unions.md](./rules/discriminated-unions.md)** - Use when modeling data with multiple shapes or states (e.g., events, fetching states)
- **[enums.md](./rules/enums.md)** - Use when considering enum-like behavior (prefer `as const` objects)
- **[interface-extends.md](./rules/interface-extends.md)** - Use when working with interfaces and type inheritance
- **[optional-properties.md](./rules/optional-properties.md)** - Use when defining optional properties in types/interfaces
- **[readonly-properties.md](./rules/readonly-properties.md)** - Use when defining immutable properties
- **[return-types.md](./rules/return-types.md)** - Use when defining function return types
- **[any-inside-generic-functions.md](./rules/any-inside-generic-functions.md)** - Use when working with generics and avoiding `any` type
- **[no-unchecked-indexed-access.md](./rules/no-unchecked-indexed-access.md)** - Use when accessing array/object properties by index or key

### Import/Export Patterns
- **[import-type.md](./rules/import-type.md)** - Use when importing types from other modules
- **[default-exports.md](./rules/default-exports.md)** - Use when deciding between default and named exports

### Error Handling
- **[throwing.md](./rules/throwing.md)** - Use when implementing error handling and throwing exceptions

### Package Management
- **[installing-libraries.md](./rules/installing-libraries.md)** - Use when installing or updating npm packages

### Tool-Specific Rules
- **[mcp-rules.md](./rules/mcp-rules.md)** - Use when working with Context7 and managing library IDs

---

## 💡 Quick Reference

**Before writing code**, ask yourself:
1. Am I naming things? → Check `naming-conventions.md`
2. Am I modeling multiple states? → Check `discriminated-unions.md`
3. Am I adding documentation? → Check `jsdoc-comments.md`
4. Am I installing packages? → Check `installing-libraries.md`
5. Am I using imports/exports? → Check `import-type.md` and `default-exports.md`
6. Am I styling? -> Check `styles.md`
7. Am I using React? -> Check `react.md`
