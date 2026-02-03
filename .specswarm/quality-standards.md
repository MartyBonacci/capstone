# Quality Standards

## Project Info

**Name:** capstone
**Created:** 2026-01-27
**Quality Level:** Standard

---

## Quality Gates

### Enforcement
- **Enforce Gates:** true
- **Block Merge on Failure:** true

### Thresholds
| Metric | Minimum | Target |
|--------|---------|--------|
| Quality Score | 80 | 90 |
| Test Coverage | 80% | 90% |
| Type Coverage | 95% | 100% |

---

## Performance Budgets

### Enforcement
- **Enforce Budgets:** true

### Bundle Sizes
| Asset | Maximum |
|-------|---------|
| Initial JS | 100 KB (gzipped) |
| Initial CSS | 30 KB (gzipped) |
| Per-route chunk | 50 KB (gzipped) |
| Total bundle | 500 KB (gzipped) |

### Core Web Vitals
| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| TTFB | < 600ms |

---

## Code Quality

### Complexity
| Metric | Maximum |
|--------|---------|
| Cyclomatic complexity | 10 |
| Cognitive complexity | 15 |
| File lines | 300 |
| Function lines | 50 |
| Function parameters | 4 |

### Linting
- ESLint with strict TypeScript rules
- No warnings allowed in CI
- Prettier for formatting (enforced)

---

## Testing Requirements

### Coverage
- **Require Tests:** true
- **Minimum Coverage:** 80%

### Test Types
| Type | Requirement |
|------|-------------|
| Unit tests | Required for all business logic |
| Integration tests | Required for data flows |
| E2E tests | Required for critical user journeys |

### Test Naming
- Describe behavior, not implementation
- Use "should" convention: `it('should return user when valid ID provided')`

---

## Code Review

### Requirements
- **Require Review:** true
- **Minimum Reviewers:** 1

### Review Checklist
- [ ] Tests pass and coverage maintained
- [ ] Types are explicit and correct
- [ ] No prohibited patterns used
- [ ] Performance impact considered
- [ ] Accessibility requirements met

---

## Accessibility

### Standards
- WCAG 2.1 Level AA compliance
- Automated testing with axe-core
- Manual keyboard navigation testing

### Requirements
- All interactive elements keyboard accessible
- Color contrast ratios met
- Screen reader compatibility verified

---

## CI/CD Gates

### Pre-Merge
1. TypeScript compilation (strict)
2. ESLint (no warnings)
3. Prettier formatting check
4. Unit tests pass
5. Coverage thresholds met
6. Build succeeds
7. E2E tests pass

### Post-Merge
1. Production build verification
2. Lighthouse CI (performance budgets)
3. Bundle size check

---

## Exemptions

*No exemptions currently granted.*

To request an exemption:
1. Document the technical reason
2. Specify the scope and duration
3. Add to this section with approval

---

## Notes

- Quality level: Standard
- Created by `/specswarm:init`
- Enforced by `/specswarm:ship` before merge
- Review and adjust these standards as needed
