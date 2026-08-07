# Privacy & security

> The user is the customer, not the product.

Salience runs on your machine. Your data stays on your machine. This page is an audit trail of that claim — what's stored where, what (if anything) leaves the device, and how to verify it with your own eyes.

## Where your data lives

- **Credentials** (GitHub tokens, Jira tokens, etc.) — encrypted SQLite at `~/Library/Application Support/clegginabox.salience/`, using SQLCipher with a key stored in the macOS Keychain. Salience never transmits these.
- **Entities** (branches, PRs, tickets, build status) — fetched from the tools you've connected and held in a local store at the same path. Salience never sends entity data off the machine.
- **Preferences** — plain JSON at `~/.salience/preferences.json` (see [Configuration](/docs/configuration)).

There is no Salience server. There is no cloud sync. There is no analytics pipeline.

## Read-only by design

Salience treats your tools as sources to read, never targets to change:

- **No write access.** Connectors fetch state — they never open, close, comment on, edit, or merge anything. GitHub tokens only need read access to Pull requests, Contents, and Checks; [fine-grained tokens](/docs/connect-your-tools#github) are recommended because they're least-privilege by construction.
- **Over-privileged tokens are rejected.** Connect a classic GitHub PAT carrying more scope than Salience needs — say `delete_repo` or `admin:org` — and the connection is refused before the token touches the database, with an error naming exactly which scopes to remove.
- **Jira is endpoint-allowlisted.** The Jira connector can only call a fixed allowlist of read endpoints. A request to anything else is refused by the client itself — it's not a convention, it's a wall.
- **AWS comes with its own policy.** The Permissions card lists every AWS API action Salience can call, each with a plain-English reason — and [**Copy least-privilege policy**](/docs/connect-your-tools#least-privilege-policy) puts a ready-to-attach IAM policy on your clipboard, built from that same list: `Describe*`, `List*`, and one `sts:GetCallerIdentity`. No write, delete, or deploy actions. Attach it to a dedicated role and Salience never needs a broad profile at all.

None of this asks for trust: every call any connector makes shows up in the [network monitor](#network-monitor), so you can watch the traffic yourself.

## Network monitor

Salience makes outbound HTTP calls to the tools you've connected (GitHub, Bitbucket, Jira) plus Sentry while crash reporting is enabled. To audit them with your own eyes, open **Network Inspector** in the sidebar. Every request the app makes is listed there: destination, method, response status, timing.

If the network monitor shows a host you don't recognise, that's a bug — please [open an issue](https://github.com/clegginabox/salience-macos/issues).

## Command monitor

Salience shells out to run local commands — `git for-each-ref`, `git fetch`, `git status`, sometimes `npm` or other project commands you've configured. **Command Inspector** in the sidebar shows every command the app has run, with its arguments and exit code.

This is for the same reason as the network monitor: visibility, not trust. If a command looks wrong or unexpected, you can see exactly what fired and report it.

## Crash reporting (Sentry)

Salience ships with Sentry crash reporting **enabled by default** in the current early-adopter release. Four toggles in **Settings → Privacy** control what's sent:

| Toggle | Default | What it sends |
|--------|---------|---------------|
| **Master switch (`enabled`)** | On | Whether to initialise Sentry at all. Off = nothing sent, ever. |
| **Errors** | On | Panics and uncaught exceptions. |
| **Performance traces** | On | A 10% sample of operation timings. |
| **Breadcrumbs** | On | Trail of recent log lines accompanying an error. |

Sentry errors, traces, and breadcrumbs show up in **Network Inspector** as calls to `*.ingest.sentry.io`. You can verify the master switch works by toggling it off and watching those calls stop in real time.

One exception: **minidumps** (the binary dumps captured after a hard crash) are uploaded by a separate crash-reporter process and do not appear in the Network Inspector. They are only ever sent after the app has crashed, never during normal operation, and the master switch still gates them — toggling Sentry off prevents the crash reporter from starting at all.

The Sentry DSN is hard-coded in the binary; we use Sentry's official Rust SDK with no proxying. No third-party trackers, analytics SDKs, or fingerprinting libraries are bundled.

Future direction: defaults will flip to opt-in once Salience exits early-adopter status.

## What we never collect

- Entity contents (branch names, ticket titles, PR descriptions, comments)
- Credentials or token material
- File paths from your projects (beyond what panics happen to include — Sentry's `before_send` strips known patterns)
- Anything from another user — Salience is single-user

## Reporting a privacy issue

If you notice traffic Salience shouldn't be making, a value being stored you didn't expect, or anything else off — please [open an issue](https://github.com/clegginabox/salience-macos/issues) or email pclegg@gmail.com.
