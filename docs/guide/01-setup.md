# Set up mstack

In this page you install the plugin, pick which models mstack uses, and run your first task. Setup is one command plus a short conversation.

## Install the plugin

This copy is not on the Cursor marketplace. Cursor also rejects a symlink whose target sits outside `~/.cursor/plugins/local`. Copy the tree, then reload:

```bash
mkdir -p ~/.cursor/plugins/local/mstack
rsync -a --delete --exclude '.git/' ~/Projects/mstack/ ~/.cursor/plugins/local/mstack/
```

Command Palette → **Developer: Reload Window**. Confirm **mstack** under Customize → Plugins. After you edit this repo, run `rsync` again and reload, or the installed copy stays stale.

Do not keep marketplace **pstack** installed at the same time: the leaf skills share names (`how`, `why`, `architect`).

## Pick your models

Run:

```text
/setup-mstack
```

[`/setup-mstack`](../../skills/setup-mstack/SKILL.md) detects the models you have access to, shows you each role (code delegates, judgment, the review panels), and asks what you want. Answer the questions. It writes `~/.cursor/rules/mstack-models.mdc`, a small rule every mstack skill reads.

You only override what you care about. A role with no line in the rule keeps the skill's default. To restore a default later, delete that role's line, or just run `/setup-mstack` again.

You might be wondering what happens if you use Auto. Set a role to `inherit-parent` or `auto` and mstack omits the subagent `model` field, so the subagent inherits your parent chat model. Both values mean the same thing, and neither is a model slug. For a panel role the value is a list, and one subagent runs per entry, so the list length sets the panel size. Setup also configures `swarm workers`, the default model for every `/swarm` worker unless a race names a model for each arm.

## Accept the verification offer, or don't

At the end of setup, `/setup-mstack` looks for a way to prove app behavior in your project, either a `verify-*` skill or an existing harness. If it finds neither, it offers once to generate one with [`/create-verification-skill`](../../skills/create-verification-skill/SKILL.md).

Say yes and it writes `.cursor/skills/verify-<app>/`, a project-local skill that teaches agents to drive your app the way a user does. It proves the skill works once before handing it over. Say no and setup moves on. You can run `/create-verification-skill` yourself any time. [Verify and ship](./06-verify-and-ship.md#create-a-project-verification-skill) covers when it earns its place.

After setup, start a new chat. The model rule applies to new sessions.

## Run your first task

Pick something real but small, and describe it the way you'd describe it to a colleague:

```text
/mauri-mode add a --json flag to this command. text output stays byte-identical. verify both.
```

Watch the todo list. The first item is always "read the Principles section". The rest are the matched playbook's steps copied in, the Feature playbook for this prompt. If `/mauri-mode` skips a step, the step stays in the list with `skip: <reason>`, so you can see what it chose not to do.

From here you can type normal follow-ups. `/mauri-mode` is sticky. It stays on for the conversation until you opt out by saying so.

Next: [Route work through `/mauri-mode`](./02-mauri-mode.md).
