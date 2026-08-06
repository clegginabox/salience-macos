# Salience for PHP

Salience works with any git repository — but it understands PHP projects best. If your day is Symfony or Laravel, Composer and PHPUnit, this is the five-minute tour of what it does for you specifically.

Everything here sits on top of the core app: [My Work](/docs/my-work), [the Map](/docs/map), [worktree cleanup](/docs/worktrees) and the [MCP server](/docs/mcp) are language-agnostic and work the same for every project.

## The right tests, cued by your changes

Change a file and the [Build page](/docs/build) cues the runners it detected — PHPUnit, Pest, PHPCS — scoped to what you touched. Each cue prints the exact command it would run, including the `docker compose exec` prefix when your PHP runtime lives in a container rather than on your host. Hit Run, the output streams into the console, and the result stays on the row as a chip (`763 passed · 1 skipped`).

![Suggested test and lint actions for the changed files, with pass/clean chips](/screenshots/build.png)

## One-click health checks

Seven checks ship today, and every one of them is PHP ([Build → Checks](/docs/build#checks)):

| Check | Tool |
|-------|------|
| Composer - audit | `composer audit` |
| Composer - validate | `composer validate` |
| Doctrine - Schema Validation | `doctrine:schema:validate` |
| Symfony - lint:container | `lint:container` |
| PHPStan - analyse | PHPStan |
| Psalm - analyse | Psalm |
| Mago - analyze | Mago |

Each appears only when your project shows evidence of that tool, never auto-runs, and caches its last verdict — so the tab answers "what did PHPStan say last time?" without running anything.

![The Checks tab with composer audit findings expanded](/screenshots/checks.png)

## Looks like API docs. It's your actual call graph

Salience indexes your symbols using the autoload roots in your `composer.json` — the first index builds automatically when you add the project — then syncs routes with your framework's own dump: `debug:router` for Symfony, `route:list` for Laravel. Thanks to [Mago](https://github.com/carthage-software/mago), the Rust-based PHP toolchain, Salience builds a real AST of your codebase — the graph is derived from parse trees, not regexes. The result reads like your API docs: a filterable list of every route. Except each row opens the code behind it — pick a route and Salience walks the call graph from its controller and draws the files involved: a map of the code paths that route depends on, something grep can't give you. ⌘-click any node to open it in your IDE.

Nothing is installed in your project to make this happen — no composer package, no mounted route, no instrumentation, and you never have to run the app. Salience reads the code from outside, and the graph stays on your machine.

![The Code Graph page: routes navigator, a walked route rendered as a file map, and the context panel](/screenshots/code-graph.png)

[Code Graph →](/docs/code-graph)

## Toolchain doctoring

The Build page grows a PHP tab when something is off with the runtime itself: an extension your project needs that isn't declared or isn't loaded, lockfile drift, a missing binary. It tints red when an issue is high severity, amber when it can wait.

## Symfony & Composer recipes

The [command palette](/docs/command-palette) carries recipes for the tools it detects — Symfony console commands and Composer actions, ready to run with ⌘K.

## Your agent speaks PHP too

The same code graph ships over the [MCP server](/docs/mcp#code-graph-php-only): `find_definition`, `find_references`, `find_callees`, `find_implementations`, `find_supertypes`, `get_file_outline`, `describe_symbol`. Point Claude, Codex or Cursor at it and your agent navigates by type hierarchy instead of grep — alongside the same joined branch, PR and ticket context you see.

## What "PHP today" means

The data model isn't PHP-specific — PHP is simply the first language with a full producer. Suggested actions already cue Jest and Playwright for Node projects, and deeper support for other languages follows the same path the PHP support took.
