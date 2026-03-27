# /parry

> **Deprecated.** For Copilot and automated reviews, use `/verify` instead — it runs proactively and folds Copilot comments into a unified verification report. `/parry` remains available for responding to human reviewer comments.

Address PR review comments — analyze feedback, fix valid issues, explain rejections.

**Read every comment before touching code. Not all feedback requires changes.**

## Usage

```
/parry 42              # Parry review comments on PR #42
/parry                 # Parry current branch's PR
/parry --repo org/repo # Target a specific repo
```

## Process

### 1. Identify the PR

```bash
# From argument
gh pr view {number} --json number,title,url,headRefName,baseRefName

# Or from current branch
gh pr view --json number,title,url,headRefName,baseRefName
```

### 2. Read ALL review comments

```bash
# PR reviews (approval, changes requested, comments)
gh pr view {number} --json reviews --jq '.reviews[] | {author: .author.login, state: .state, body: .body}'

# Inline review comments (the important ones)
gh api repos/{owner}/{repo}/pulls/{number}/comments --jq '.[] | {path: .path, line: .line, body: .body, author: .user.login, id: .id}'

# General PR comments
gh pr view {number} --json comments --jq '.comments[] | {author: .author.login, body: .body}'
```

### 3. Read the PR diff

```bash
gh pr diff {number}
```

Understand the full scope of changes before responding to any comment.

### 4. Triage each comment

Categorize every comment:

- **Valid fix** — reviewer is right, code needs to change
- **Valid concern, different fix** — the problem is real but the suggested fix isn't ideal
- **Reject** — reviewer misread the code, or the suggestion conflicts with project patterns
- **Question** — needs clarification before acting

### 5. Fix valid issues

Check out the PR branch:
```bash
# If in a worktree layout
cd ../{branch-name}
# Or
git checkout {branch-name}
```

Make all fixes in a single commit. Group related changes. Don't fix unrelated code.

```bash
git add {changed files}
git commit -m "Address review feedback on #{number}" \
  --author="Feli.pe Oduardo Sierra <420001+felipe@users.noreply.github.com>"
git push
```

### 6. Respond on the PR

Leave a single summary comment addressing ALL feedback:

```bash
gh pr comment {number} --body "$(cat <<'EOF'
## Review feedback addressed

**Fixed:**
- {file}:{line} — {what was fixed and why the reviewer was right}

**Addressed differently:**
- {file}:{line} — {what the concern was, what was done instead, and why}

**No change:**
- {file}:{line} — {why the code is correct as-is, with evidence}

**Questions:**
- {quote the comment} — {what needs clarification}
EOF
)"
```

### 7. Report

```
✓ PR #{number}: {title}
✓ {N} comments addressed
✓ {N} fixes applied
✓ {N} rejected with explanation
✓ {N} questions raised
✓ Pushed: {commit sha}
```

## Rules

- **Never dismiss feedback without explanation.** If you disagree, say why with evidence (line numbers, project patterns, docs).
- **Never make unrelated changes.** Only touch code that review comments reference.
- **One commit for all fixes.** Don't create a commit per comment.
- **No AI attribution.** No "co-authored-by", "generated with", or similar lines anywhere.
- **Git author must be:** `Feli.pe Oduardo Sierra <420001+felipe@users.noreply.github.com>`
