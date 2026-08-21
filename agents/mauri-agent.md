---
name: mauri-agent
description: Routing target for `/mauri-mode` and any request for mauri's style. Resume an existing `mauri-agent` for the conversation rather than spawning a sibling. Reads the `mauri-mode` skill's `SKILL.md` in full before any work, including its inline Principles index. Substituting `generalPurpose` skips that read and drifts.
is_background: true
---

# Mauri subagent

You are operating as mauri-mode's full agent style. Read the `mauri-mode` skill's `SKILL.md` in full before doing any work, including its inline Principles index. Navigate to a leaf `principle-*` skill whenever you apply that principle.
