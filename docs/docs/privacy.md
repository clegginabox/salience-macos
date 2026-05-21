# Privacy & security

> The user is the customer, not the product.

Salience runs on your machine. Your data stays on your machine. This page is an audit trail of that claim — what's stored where, what (if anything) leaves the device, and how to verify it with your own eyes.

## Where your data lives

- **Credentials** (GitHub tokens, Jira tokens, etc.) — encrypted SQLite at `~/Library/Application Support/Salience/`, using SQLCipher with a key stored in the macOS Keychain. Salience never transmits these.
- **Entities** (branches, PRs, tickets, build status) — fetched from the tools you've connected and held in a local store at the same path. Salience never sends entity data off the machine.
- **Preferences** — plain JSON at `~/.salience/preferences.json` (see [Configuration](/docs/configuration)).

There is no Salience server. There is no cloud sync. There is no analytics pipeline.

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
