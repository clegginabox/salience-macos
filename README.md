# Salience

**Know the state of your work without opening five tabs.**

Salience is a macOS app that knows what you're working on. It connects to the tools you already use — GitHub, Jira, CI, Docker, AWS, Sentry — and joins what they know into one live picture: every branch, PR, ticket and build, what state it's in, and what needs you.

You glance at it. Your AI agents query it. There's no Salience cloud and no account — your graph stays on your Mac.

> **Alpha.** Salience is shipping early to a small group of users. It's free while it's in alpha; pricing comes later.

[**Download the alpha →**](https://clegginabox.github.io/salience-macos/download) · [**Documentation →**](https://clegginabox.github.io/salience-macos/docs/) · [**Gallery →**](https://clegginabox.github.io/salience-macos/gallery) · [**Discord →**](https://discord.gg/NErgbMHJr)

![The Salience map: the working set as file nodes with typed edges between them](docs/public/screenshots/map-desk.png)

## Features

- **[My Work](https://clegginabox.github.io/salience-macos/docs/my-work)** — everything you have in flight — branch, PR, ticket, CI — joined into one list, worst first. Includes the state no single tool can show you: PR merged but the ticket still open.
- **[Stand-up](https://clegginabox.github.io/salience-macos/docs/my-work#stand-up)** — the ticket board with branches and PRs joined on. Read your update straight off the screen.
- **[Worktrees](https://clegginabox.github.io/salience-macos/docs/worktrees)** — clean up after your AI agents. Every checkout with its PR state, uncommitted changes and disk size — and a verdict on which are safe to reclaim.
- **[The Map](https://clegginabox.github.io/salience-macos/docs/map)** — your changed files as a map you arrange yourself, Compose services as buildings lit by their containers, and your agents moving as they work. Sentry stack traces draw directly over your working copy.
- **[Suggested actions](https://clegginabox.github.io/salience-macos/docs/build)** — change a test file and "run this test" appears, with the exact command — host or container. Results stay on the row.
- **[Checks](https://clegginabox.github.io/salience-macos/docs/build#checks)** — one-click `composer audit`, PHPStan, Psalm, schema validation. Verdicts are cached, so you can always see what they said last time.
- **[Stack](https://clegginabox.github.io/salience-macos/docs/build#stack)** — your Docker Compose services with live health state. Start, stop, restart, tail logs.
- **[Review](https://clegginabox.github.io/salience-macos/docs/review)** — your branch's diff against the right base, before you push. Double-click any file to open it in your editor.
- **[Code Graph](https://clegginabox.github.io/salience-macos/docs/code-graph)** — your routes, like API docs — except each one opens the actual call graph. Pick a route, see the code it touches, ⌘-click into your IDE (PHP today).
- **[MCP server](https://clegginabox.github.io/salience-macos/docs/mcp)** — point Claude, Codex or Cursor at the same joined graph. "What's my stand-up?" "Which worktrees can I delete?" No more scraping five tabs.
- **[Command palette](https://clegginabox.github.io/salience-macos/docs/command-palette)** — ⌘K for every task, container, PR URL and map jump.
- **[Private by design](https://clegginabox.github.io/salience-macos/docs/privacy)** — your graph lives in an encrypted database on your Mac, with credentials in that same encrypted store, unlocked by a key in the macOS Keychain. A built-in network monitor lists every outbound request the app makes, so you can audit it yourself.

![My Work: everything in flight, grouped by what's wrong, worst first](docs/public/screenshots/my-work.png)

**Works with:** GitHub (PRs, reviews, CI, issues) · Jira · AWS (ECR/ECS) · Sentry · Docker Compose — [connect your tools →](https://clegginabox.github.io/salience-macos/docs/connect-your-tools)

## Writing PHP? Start here

Salience works with any git repository, but it goes deepest on PHP today. It reads your `composer.json`, cues PHPUnit, Pest and PHPCS runs for the files you changed, one-clicks PHPStan, Psalm and `composer audit`, syncs your Symfony or Laravel routes, and answers a question grep can't: *what code does this route actually touch?* — in the app, and for your agents over MCP.

[Salience for PHP →](https://clegginabox.github.io/salience-macos/docs/php)

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
