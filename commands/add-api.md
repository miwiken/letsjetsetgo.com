# /add-api

Scaffold a new API endpoint following project conventions.

**Verification required. Do not report success unless every step passes.**

## Usage

```
/add-api endpoint-name
/add-api /users/profile
```

## Process

### 1. Learn the patterns
- Check `product/tech-stack.md` for API framework
- Check `standards/` for API patterns
- Look at 2-3 existing endpoints — match their style exactly

### 2. Scaffold
Create the endpoint file following discovered patterns:
- Request/response types
- Input validation
- Error handling
- Auth middleware (if other endpoints use it)

Create a test file for the endpoint.

### 3. Verify — ALL must pass

```bash
# Read it back
cat src/api/{endpoint}.ts

# Type check
npx tsc --noEmit

# Run the new test
npm test -- {endpoint} --run

# Full build
npm run build

# If possible, start dev server and hit the endpoint
curl -v http://localhost:3000/api/{endpoint}
```

### 4. Report

**Only if all checks pass:**
```
✓ Created src/api/{endpoint}.ts
✓ Created src/api/{endpoint}.test.ts
✓ Type check passed
✓ Tests passed
✓ Build succeeded
✓ Endpoint responds: 200 OK
```

**If anything fails** — stop. Show the error. Fix it or ask for help. Do not move on.
