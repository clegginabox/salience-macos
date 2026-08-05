# Docs expansion: cover the shipped app — design

**Date:** 2026-08-05
**Approved:** full set (8 new pages + 4 updated), stacked on `landing-map-refresh`.

## Problem

Seven docs pages exist; the app has outgrown them. The map, My Work/Stand-up, build
page, review page, code graph, dashboard, palette/HUD, and the situations model have
zero coverage. Two pages are wrong: mcp.md documents retired tools (`type_of`,
`references_in_file`, `get_snapshot`, `find_callers`) and misses the real surface;
connect-your-tools.md omits AWS, Sentry, Docker, and GitHub Issues, and documents
Bitbucket setup although its settings UI is currently commented out.

Goal: draft content for Paul to edit — accuracy over polish, but nothing invented.

## New pages (docs/docs/)

| File | Title | Covers |
|------|-------|--------|
| map.md | The Map | Desk vs network altitude, islands (worktree/local/remote), station peek card + materialize worktree, notes, error paths + ghost nodes, compose district, event ticker, attention markers, follow-cam, journeys, side panel |
| my-work.md | My Work & Stand-up | Units of work, priority sections, filters; stand-up list vs kanban, audience filter, board picker |
| build.md | Build & run | Suggested actions, Checks (PHP health checks today), per-toolchain tabs, Stack (compose), Tasks, console pane (⌘J), manifest trust prompt |
| review.md | Review | Changed files vs resolved base, inline diffs, linked ticket tile, open-in-editor launchers |
| code-graph.md | Code Graph | Route navigator, BFS walk from controller, node detail, ingest, diagnostics. PHP-only badge |
| command-palette.md | Command palette & HUD | ⌘K sources, HUD pills + popovers, branch switcher, shadow preview |
| views.md | Dashboard, Timeline & Explore | Tile grid + shipped tile types; timeline buckets/filters; explore click-to-grow graph |
| concepts.md | Entities, correlations & situations | Entity model, 11 correlators (the branch→PR→ticket and PR→CI→image→taskdef→running-task chains), situation kinds + loudness, notifications feed |

## Updated pages

- **connect-your-tools.md** — add AWS (named profile + region, sts validation, copyable
  least-privilege IAM policy, ECR/ECS scoping), Sentry (token + org + optional base URL,
  project selection), Docker (no auth, local socket), GitHub Issues (rides GitHub token);
  Bitbucket marked temporarily unavailable (backend ships, settings UI commented out);
  GitHub section notes over-scoped classic PATs are refused with override pref.
- **mcp.md** — tool table rewritten to the real surface: 7 entity/correlation tools
  (list_entity_types, list_entities, get_entity, get_correlations_for_entity,
  describe_entity, my_work, recent_activity) + 8 code-graph tools (find_definition,
  get_symbol, get_file_outline, find_implementations, find_supertypes, find_references,
  find_callees, describe_symbol). Token rotation noted.
- **configuration.md** — add recipes (`~/.salience/recipes/*.toml`, restart to reload),
  workspace-trust prompt for salience.toml, launcher defaults, missing preferences
  fields (updater, `credentials.accept_overprivileged`).
- **getting-started.md** — step 3 payoff becomes the map, not the kanban.

Plus: sidebar in `config.mts` gains a "Guide" section (7 surface pages) and a
"Concepts" section; docs hub `docs/docs/index.md` links refreshed.

## Explicitly not documented

`/debug`, `/demo`, palette-prototype route, TeamCity (no settings UI), Cloudflare
Access decorator, biometrics panel (commented out), AWS RDS/Lambda/EC2 (disabled
"soon" badges), scoreboard (does not exist).

## Method

Parallel drafting agents, one per page cluster, each verifying against the app source
at `/Users/cleggy/Projects/pane` (read-only) and matching the tone of the existing
pages. Paul edits afterwards — pages may carry `<!-- SCREENSHOT SLOT: ... -->` comments
but must not reference image files that don't exist.
