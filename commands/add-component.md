# /add-component

Scaffold a new component following this project's standards.

**Verification required. Do not report success unless every step passes.**

## Usage

```
/add-component ComponentName
```

## Process

### 1. Learn the patterns
- Check `standards/` for component patterns
- Check `design/` for design system tokens
- Look at 2-3 existing components in `src/` — match their style exactly

### 2. Scaffold
Create the component matching the project's conventions:
- File location based on existing component structure
- Naming convention matching existing files
- Import patterns matching existing code
- TypeScript types matching project strictness

Create a test file alongside it using the same framework and patterns as existing tests.

### 3. Verify — ALL must pass

```bash
# Read it back — does it look right?
cat src/components/{Name}/{Name}.tsx

# Type check — zero errors
npx tsc --noEmit

# Run the new test
npm test -- {Name} --run

# Full build — zero errors
npm run build
```

### 4. Report

**Only if all checks pass:**
```
✓ Created src/components/{Name}/{Name}.tsx
✓ Created src/components/{Name}/{Name}.test.tsx
✓ Type check passed
✓ Tests passed (X tests)
✓ Build succeeded
```

**If anything fails** — stop. Show the error. Fix it or ask for help. Do not move on.
