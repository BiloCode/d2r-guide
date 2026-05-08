---
name: git-commit
description: Create conventional git commits with proper message style
---

## What I do

When asked to commit changes, I handle the entire git workflow: staging files, drafting a conventional commit message, and creating the commit.

## Commit message format

Use **Conventional Commits** in English:

```
<type>: <short description>

<body (optional)>
```

### Types

- `feat` — new feature
- `fix` — bug fix
- `chore` — maintenance, tooling, config
- `refactor` — code change with no behavior change
- `style` — formatting, missing semicolons, etc. (not CSS)
- `docs` — documentation only
- `test` — adding or updating tests
- `perf` — performance improvement

### Rules

- Short description: imperative, lowercase, no period, max 72 chars
- Body: wrap at 72 chars, explain _why_ not _what_
- Scope is optional: `<type>(<scope>):`
- No emoji in messages

## Workflow

1. `git status` to see what's changed
2. `git diff` to review staged and unstaged changes
3. `git log --oneline -5` to follow existing commit style
4. Stage relevant files
5. Create the commit with `git commit -m "<message>"`
6. Run `git status` to verify

## Important

- ONLY commit when explicitly asked by the user
- NEVER update git config
- NEVER use `--no-verify` or `--force` unless the user explicitly requests it
- Before creating a commit, always ask the user whether to:
  - create a new commit
  - or use `git commit --amend`
- NEVER use `--amend` automatically
- NEVER commit secrets, env files, or credentials
- If there's no description, don't add one
- If there's a description, leave it as it was
- When user explicitly says "amend", use `--amend` to modify the existing commit
- Only create a new commit when user explicitly asks for it
