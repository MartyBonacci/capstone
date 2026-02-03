# Project Constitution

## Project Identity

**Name:** capstone
**Created:** 2026-01-27
**Framework:** React Router v7 (Framework Mode)

## Core Principles

### 1. Server-First Architecture
Leverage React Router v7's server-side capabilities. Use loaders for data fetching, actions for mutations. Minimize client-side state.

### 2. Type Safety
TypeScript strict mode required. Define explicit types for all loader data, action responses, and component props. Use Zod for runtime validation at system boundaries.

### 3. Functional Patterns
Pure functions over classes. Immutable data transformations. Compose small, focused functions. Avoid side effects except at system boundaries.

### 4. Progressive Enhancement
Build features that work without JavaScript first. Layer interactivity on top. Forms should submit without JS. Links should navigate without JS.

### 5. Test-Driven Development
Write tests before implementation. Unit tests for business logic. Integration tests for data flows. E2E tests for critical user journeys.

## Decision Framework

When making architectural decisions:

1. **Does it follow React Router v7 conventions?** Use framework patterns before custom solutions.
2. **Is it the simplest solution?** Avoid premature abstraction. Three similar lines are better than one clever abstraction.
3. **Is it testable?** If it's hard to test, the design needs work.
4. **Does it degrade gracefully?** Consider the no-JS experience.

## Governance

- All features require specification before implementation
- Breaking changes require migration path documentation
- Quality gates must pass before merge
