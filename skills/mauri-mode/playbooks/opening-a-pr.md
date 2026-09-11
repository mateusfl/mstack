### Opening a PR

This is an explicit final delivery step. Run it only when the user asks to open or create a PR, or when a separately authorized shipping workflow invokes it. Normal feature, fix, refactor, performance, and prototype work stops at a validated branch.

Read `../references/work-context.md` first. Confirm the actual environment, current branch, status, worktrees, remotes, and completed verification. If the branch contains unrelated changes or the verification is incomplete, do not open the PR.

**Worktree.** Work from the current validated task branch in the environment discovered above. Preserve unrelated changes. Use a separate worktree only when it is necessary to isolate concurrent writers and the branch can be transferred without losing work. Never reset a dirty checkout to make PR creation convenient.

**Commits.** Keep the commits already made on the task branch unless cleanup is needed for a readable review. Do not turn each commit into a PR. Do not create a branch stack or use Graphite. Amend when the fix belongs in a just-made commit. Create a new commit when the change is separable.

**PRs.** Run `/deslop` from `cursor-team-kit` over the diff before commit. Run `/no-comments` before review. Write every PR title, PR description, and commit body with `/technical-writing`, then apply `/unslop`. Apply every technical-writing layer except Diátaxis. Use one word for each action, keep articles, and avoid `-ing` when a plain verb works.

**Titles.** Use Conventional Commits in the form `type(scope): subject`. Use `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, or `perf` as the type. Use the changed area, such as `mstack` or `mauri-mode`, as the scope. Keep the subject short and imperative. Name a real symbol when one carries the change. For example, `fix(mstack): retarget opening-a-pr babysit trigger`. Do not add a trailing period.

**Descriptions.** The PR body is a briefing, not the lab notebook. A reviewer who has the diff should learn why the change exists, what is out of scope, and how you proved the change works. The squash commit body is the PR body. If the body would make the squash commit longer than about 40 lines, cut the body.

Use these sections in order. Drop a section when it has nothing to say.

- `## Why`. State the intent and approach in one or two short paragraphs. Do not list SHAs or rebase genealogy. Do not add a "based on main" preamble.
- `## Scope`. Use bullets to list real symbols and paths. Name both sides of a rename or retarget. State what is in and out only when the boundary matters. Do not write a file-by-file essay.
- `## Tradeoffs`. Name only rejected alternatives that a reviewer would otherwise ask about. Skip this section when there was no real choice.
- `## Blast Radius`. In one to three sentences, name who or what the change touches and why the change is safe or risky. State the continuing cost if main stays red without the fix.
- `## Verification`. Name each real run path and its outcome. For browser, web, or Electron changes, name `control-lize` when it was available and report the work-session evidence. Otherwise name the project-local `verify-*` skill, the PATH `control-*` binary it named, `control-ui` / `control-cli` from `cursor-team-kit` only as the fallback, or the targeted tests. For a performance change, report one primary number with its unit in `before → after` form. Link the arena or swarm directory for the remaining evidence. Do not include sample-size methodology, swarm recitals, or metric tables.

After these sections, attach videos or screenshots when they prove a claim. Do not paste full SHAs, swarm or arena lane recitals, lever-correction essays, file-by-file checklists, or "CLEAN" verdicts. Put these details in a linked artifact. Do not use `## Summary` or `## Test plan` boilerplate. A commit body does not restate its subject.

**Forge.** Resolve the forge before the first PR operation and keep that choice for create, edit, view, watch, and merge. GitHub CLI (`gh`) is the default. If `command -v origin` succeeds and Origin can resolve the repository, prefer `origin pr ...`. If Origin is absent or cannot resolve the repository, stay on `gh` and record the fallback. Do not require Graphite (`gt`).

**Size and stacks.** Create one PR for the current task branch. The PR targets trunk or the repository's normal base branch. Do not split the work into stacked PRs, retarget child branches, or use Graphite. A stacked or multi-PR delivery is an exceptional workflow and needs an explicit user request before this playbook is replaced by it.

**Readiness.** Open the one PR only after verification is complete. Use the repository's normal ready or draft policy. With Origin, pass `--status open` when the user asked for a ready PR. With `gh`, omit `--draft` when the user asked for a ready PR. If the user asked only to prepare a draft, honor that explicit request. Run `origin pr view <number>` or `gh pr view <number>` before you refer to PR status.

**Babysit.** Opening a PR does not start a babysit. Post the URL and keep building. Finish the phase or stack first. Run a separate babysit pass only when the user asks for one after the whole stack exists. A babysit for each new PR stalls the build and spends checks on commits that later waves restart. Push back when feedback drifts from intent.

A subagent that opens a PR runs `interrogate`, `/deslop`, and `/no-comments`. It returns the URL and does not babysit. Return to the parent.
