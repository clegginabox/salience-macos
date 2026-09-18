# Salience

**Know the state of your work without opening five tabs.**

Salience tells you what needs your attention across the tools you already use. It connects to GitHub, Jira, CI, Docker, AWS and Sentry, and joins what they know into one live picture: every branch, PR, ticket and build, what state it's in, and what needs you.

You glance at it. Your AI agents query it. There's no Salience cloud and no account — your graph stays on your Mac.

[**Download the alpha →**](https://clegginabox.github.io/salience-macos/download) · [**Documentation →**](https://clegginabox.github.io/salience-macos/docs/) · [**Gallery →**](https://clegginabox.github.io/salience-macos/gallery) · [**Discord →**](https://discord.gg/NErgbMHJr)


<img width="2492" height="1440" alt="Screenshot 2026-09-17 at 13 49 41" src="https://github.com/user-attachments/assets/f6b3d2fb-82eb-4d5b-80be-3221d65e3360" />
<img width="2471" height="1264" alt="Screenshot 2026-09-15 at 18 28 37" src="https://github.com/user-attachments/assets/dc8d68f7-f4f7-4a55-b3a4-6dc56610c08f" />
<img width="2608" height="1440" alt="Screenshot 2026-09-15 at 19 07 31" src="https://github.com/user-attachments/assets/9681bbc1-dc63-495a-b55f-201cbe7367bb" />
<img width="2772" height="1374" alt="Screenshot 2026-09-15 at 19 35 30" src="https://github.com/user-attachments/assets/fe2a76d4-2303-4b17-a3e7-b6f5305e5322" />

## Features

- **Units of work** — a branch, its PR, its ticket and its CI joined into one thing, grouped by state, worst first. Includes what no single tool can show you: PR merged but the ticket still open.
- **Dashboards** — every page is a grid of tiles you compose per project: a units board, PR descriptions, diffs, tickets, containers, logs, a console.
- **Suggested actions** — change a test file and "run this test" appears, with the exact command — host or container. Results stay on the row.
- **Checks** — one-click `composer audit`, PHPStan, Psalm, schema validation. Verdicts are cached, so you can always see what they said last time.
- **Stack** — your Docker Compose services with live health state. Start, stop, restart, tail logs.
- **Diffs** — a PR's changes against its base, file by file, without leaving the app.
- **[Code Graph](https://clegginabox.github.io/salience-macos/docs/code-graph)** — your routes, like API docs — except each one opens the actual call graph. Pick a route, see the code it touches, ⌘-click into your IDE (PHP today).
- **[MCP server](https://clegginabox.github.io/salience-macos/docs/mcp)** — point Claude, Codex or Cursor at the same joined graph. "What's my stand-up?" "Which worktrees can I delete?" No more scraping five tabs.
- **Command palette** — ⌘K for every ticket, PR, task and container.
- **[Private by design](https://clegginabox.github.io/salience-macos/docs/privacy)** — your graph stays on your Mac, with no Salience cloud and no account. Credentials are kept apart from it, in an encrypted SQLite store unlocked by a key in the macOS Keychain. A built-in network monitor lists every outbound request the app makes, so you can audit it yourself.

<img width="2082" height="1178" alt="Screenshot 2026-09-17 at 08 12 21" src="https://github.com/user-attachments/assets/6df535c1-0bea-4327-818d-ef5566c3a949" />

**Works with:** GitHub (PRs, reviews, CI, issues) · Jira · AWS (ECR/ECS) · Sentry · Docker Compose — [connect your tools →](https://clegginabox.github.io/salience-macos/docs/connect-your-tools)

## Writing PHP? Start here

Salience works with any git repository, but it goes deepest on PHP today. It reads your `composer.json`, cues PHPUnit, Pest and PHPCS runs for the files you changed, one-clicks PHPStan, Psalm and `composer audit`, syncs your Symfony or Laravel routes, and answers a question grep can't: *what code does this route actually touch?* — in the app, and for your agents over MCP.

[Code Graph →](https://clegginabox.github.io/salience-macos/docs/code-graph)

## Why

Salience is [Home Assistant](https://www.home-assistant.io/) for your dev tools. Each tool knows its own slice; none of them can answer the questions that span them — *is my ticket in sync with my PR? What's actually deployed right now?* Salience joins the slices and turns the questions into answers. [The full story →](https://clegginabox.github.io/salience-macos/docs/about)

## Getting started

1. [Download the alpha](https://clegginabox.github.io/salience-macos/download) — macOS 13+, Apple Silicon and Intel.
2. Add a project (any local git repository).
3. [Connect a tool](https://clegginabox.github.io/salience-macos/docs/connect-your-tools) — GitHub, Jira, AWS, Sentry, Docker — and watch the picture fill in.

Full walkthrough: [First run →](https://clegginabox.github.io/salience-macos/docs/getting-started)

> **Pre-release:** Salience is in early development. Expect rough edges — please report what you find on the [issues page](https://github.com/clegginabox/salience-macos/issues).

## This repository

This repo hosts the documentation site and the release distribution for Salience.

<a href="https://www.star-history.com/?repos=clegginabox%2Fsalience-macos&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=clegginabox/salience-macos&type=date&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=clegginabox/salience-macos&type=date&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=clegginabox/salience-macos&type=date&legend=top-left" />
 </picture>
</a>
