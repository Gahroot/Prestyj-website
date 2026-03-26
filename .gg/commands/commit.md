---
name: commit
description: Run checks, commit with AI message, and push
---

1. Run quality checks — fix ALL errors before continuing:
   - `npm run typecheck`
   - `npm run lint --fix`
   - `npm run build`

2. Run `git status` and `git diff --staged` and `git diff` to review changes.

3. Stage relevant files with `git add` (specific files, not -A).

4. Generate a commit message: start with a verb (Add/Update/Fix/Remove/Refactor), be specific and concise, one line.

5. Run `git commit -m "your generated message"` then `git push`.
