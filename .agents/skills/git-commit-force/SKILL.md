---
name: git-commit-force
description: Commit changes using git-commit skill then force push with confirmation
---

## What I do

Combines two steps: first I use the `git-commit` skill to stage and commit, then I force push with a single confirmation prompt.

## Workflow

### Step 1 — Commit

Load and execute the `git-commit` skill first.

All commit behavior, safety rules, amend handling, message formatting, and workflow rules MUST follow the `git-commit` skill exactly before continuing to the force push step.

### Step 2 — Force push

1. Show what will be pushed: `git log --oneline origin/main..HEAD`
2. Show recent local commits: `git log --oneline -3`
3. Ask once: **"Force push these commits? (yes/no)"**
4. If yes: `git push --force-with-lease`
5. If no: stop

## Rules

- Fully follow all rules and safeguards defined in the `git-commit` skill before any push operation
- Force push: show what will be rewritten, ask once, no lectures
- Use `--force-with-lease`, never `--force`
