# Browser validation with control-lize

Use `control-lize` first for browser, web, and Electron validation when `command -v control-lize` finds it. Do not replace it with a Playwright wrapper or another browser adapter while it is available.

## Prepare the session

Run the checks that match the product before interacting with it:

```bash
control-lize doctor
control-lize materiais doctor
```

If `doctor` reports that the `agent-browser` socket directory is missing, set a writable directory and run the check again:

```bash
mkdir -p /tmp/agent-browser
export AGENT_BROWSER_SOCKET_DIR=/tmp/agent-browser
control-lize doctor --json
```

Use the product-specific doctor only when the target is that product. Set one work-session id at the start of the task and reuse it for every call:

```bash
export CONTROL_LIZE_WORK_SESSION="<task-slug>"
```

Use `CONTROL_LIZE_SESSION` only when the task must reuse an existing browser session. Do not set it by default.

## Drive the browser loop

Every browser interaction follows this cycle:

```text
screenshot → check state → decide → one action → repeat
```

Run the screenshot before the action. Check the current state with a fresh accessibility snapshot and, when needed, with `text`, `status`, `get-box`, or a read-only `eval`. Decide from that evidence. Perform one action. Start the next cycle with another screenshot.

```bash
control-lize browser screenshot --json
control-lize browser snapshot --interactive --compact --json
control-lize browser find role button --name '<label>' --exact --action click
```

Use `find` with an accessible locator when possible. Use a CSS selector or `@eN` only when the current evidence supports it. A snapshot reference expires when the page changes, so take a new snapshot after every action that can change the screen.

An `ok: true` result confirms that the driver accepted the command. It does not confirm that the product changed state. Confirm the visible result in the next cycle. If the result did not change, take a new screenshot, check state again, and decide whether to retry or diagnose the product.

Use product commands such as `control-lize materiais editor insert-block` for recurring flows. Use `browser` commands for inspection and interactions without a product command. The same screenshot and state cycle applies to both.

## Finish with evidence

Keep the screenshots that prove the changed behavior. Use the work-session journal to recover the capture and action sequence:

```bash
control-lize observe show --json
```

Report the session id, the screenshot paths, the scenario, and the observed pass predicate. If `control-lize` is unavailable or still fails its doctor after the documented environment fix, report that fact and use the next control path allowed by the mauri-mode skill.
