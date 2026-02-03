# Technology Stack

## Project Info

**Name:** capstone
**Created:** 2026-01-27
**Auto-Generated:** No (manual configuration)

---

## Core Technologies

### Framework
- **React Router v7** (Framework Mode)
  - Server-side rendering with loaders/actions
  - File-based routing
  - Progressive enhancement by default

### Language
- **TypeScript** (strict mode)
  - `strict: true` in tsconfig.json
  - No implicit any
  - Explicit return types on exported functions

### Build Tool
- **Vite**
  - React Router v7 plugin
  - TypeScript support

### Runtime
- **Node.js** (v20+)

---

## State Management

- **React Router loaders/actions** (primary)
  - Server state via loaders
  - Mutations via actions
- **React useState/useReducer** (local UI state only)
  - Ephemeral UI state (modals, forms)
  - Never for server-derived data

### Prohibited
- Redux, MobX, or other global state libraries
- Client-side data fetching in useEffect

---

## Styling

- **Tailwind CSS v4**
  - Utility-first approach
  - Custom theme in tailwind.config.ts

### Prohibited
- CSS-in-JS libraries (styled-components, Emotion)
- Inline style objects (except dynamic values)

---

## Testing

### Unit Testing
- **Vitest**
  - Co-located test files (`*.test.ts`)
  - Testing Library for component tests

### E2E Testing
- **Playwright**
  - Tests in `/tests/e2e/`
  - Test against production build

### Coverage Requirements
- Minimum 80% line coverage
- 100% coverage on critical paths

---

## Data Validation

- **Zod**
  - All external inputs validated
  - Schema-first API design
  - Type inference from schemas

---

## Approved Libraries

### Forms
- React Router form handling (native)
- Conform (if complex validation needed)

### Utilities
- date-fns (date manipulation)
- clsx (conditional classNames)

### UI Components
- Radix UI primitives (if needed)
- No full component libraries (no MUI, Chakra, etc.)

---

## Prohibited Patterns

### Architecture
- Class components
- Higher-order components (use hooks)
- Render props (use hooks)
- useEffect for data fetching

### Dependencies
- moment.js (use date-fns)
- lodash full bundle (use lodash-es or native)
- axios (use native fetch)
- jQuery

### Patterns
- Global mutable state
- Prop drilling beyond 2 levels (use composition)
- Barrel exports (index.ts re-exports)

---

## Notes

- Created by `/specswarm:init`
- Update when adding new technologies
- Enforced by `/specswarm:build` and `/specswarm:ship`
