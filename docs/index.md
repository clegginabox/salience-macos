---
layout: home

hero:
  name: Salience
  text: Know the state of your work without opening five tabs.
  tagline: Salience connects GitHub, Jira, CI, Docker, AWS and Sentry into one live picture of your work. You glance at it. Your agents query it. Nothing leaves your machine.
  # Interim hero: desk altitude. Swap for a network-altitude shot (islands,
  # stations, agent presence) once that view is visually ready.
  image:
    src: /screenshots/map-desk.png
    alt: The Salience map — the working set as file nodes with typed edges between them
  actions:
    - theme: brand
      text: Download for macOS
      link: https://github.com/clegginabox/salience-macos/releases/latest
    - theme: alt
      text: Read the docs
      link: /docs/

features:
  - title: A living map, not a dashboard
    details: Your branches, PRs, tickets and CI laid out as places, not rows. Positions stay stable, so you always know where to look — and you can watch your AI agents move as they work.
  - title: Calm by default
    details: No inbox, no notifications, no modals. Salience promotes what matters into situations, each with a loudness that matches how urgently it needs you.
  - title: Readable by your agents
    details: The same joined graph the map renders ships with an MCP server. Point your agent at it and ask — "What's my stand-up?", "What shipped in the last deploy?" — no more scraping five tabs.
  - title: Verifiably local
    details: An encrypted database on your machine, credentials in the OS keychain, and a built-in network monitor showing every outbound request Salience makes. You're the customer, not the product.
---

## Why Salience

On a recent contract I worked as a one-man scrum team, drowning in tabs and
windows: IDEs, terminals, Teams, Jira, Bitbucket, TeamCity, Docker, AWS,
Sentry. Some tabs existed to repeat the same actions — run the tests, SSH into
an instance, run a migration. The rest existed to answer questions whose
answers lived across several tools at once: *Is my ticket in sync with my
work? What's actually deployed right now?*

Home Assistant showed me the fix. My car knows its fuel level, my calendar
knows my next meeting, my house has smart lights — three silos. Home Assistant
joins them: if the morning's meeting is further away than the remaining fuel
will take me, the lights turn red. Information that already exists, brought to
me instead of me going to find it — with enough time to act.

Salience does that for developer tools. It doesn't replace any of them — it
replaces the tabs, and the questions with **answers**. A red light at just the
right time.

[The full story →](/docs/about)

## See it work

<!-- GALLERY SLOT: zoomed-out map / world view (network altitude, once visually ready) -->

**Home — every project, its checked-out branch, and what needs your attention**

![Home: the Needs Attention feed across all projects, above per-project cards with branch state](/screenshots/home.png)

**Your stack, on the map — compose services as buildings, lit by their running containers**

![Docker Compose services rendered as buildings on the map, with the compose.yaml diff open](/screenshots/map-compose.png)

**Select a file, see its diff — without leaving the map**

![A selected file node with its diff in the map's detail panel](/screenshots/map-detail.png)

**Code graph — pick a route, walk the calls, open anything in your IDE**

![A route walked through the call graph, with source and callers in the context panel](/screenshots/code-graph.png)

**Worktrees — every agent checkout, triaged: what matters, what's just eating disk**

![The worktrees page with per-branch status phrases and disk sizes](/screenshots/worktrees.png)

**My Work — everything in flight, grouped by what's wrong, worst first**

![My Work: out-of-sync, stale, and in-progress sections with per-item chain state](/screenshots/my-work.png)

**Suggested — change a test file and "run this test" appears, with its last result**

![Suggested test and lint actions for the changed files, with pass/clean chips](/screenshots/build.png)

**Command palette — every action, every entity, one keystroke away**

![The command palette: actions, work, recipes, and map navigation in one list](/screenshots/command-palette.png)

**Console — every run's result, its output, and a terminal, one keystroke away**

![The console pane over the map: run history, a phpcs report, and a terminal](/screenshots/console-pane.png)

## How it works

Salience connects to your tools (git, GitHub, Bitbucket, Jira, Docker, AWS)
and turns what it finds into **entities** — branches, PRs, tickets, CI runs,
containers. Unlike a dashboard, these aren't fetched, shown once, and thrown
away. Entities are typed, queryable and persisted as a correlated graph in an
embedded database on your machine.

Every change streams out of the store as a live-query delta into a
derivation engine. **Correlators** draw edges between entities from
different sources — this branch implements that ticket, this container runs
that image, this PR's commit is what's deployed. **Rules** then promote what the
graph knows into **situations** — *"PR merged but the ticket is still open"* —
each with a **loudness** that decides how hard it tugs at your attention at
the current moment in time.

The map is just a lens over that graph.

### Agents read the same graph

Because the graph is the substrate, the same correlated context is open to
your AI tools: Salience ships with an **MCP server**. Point your AI agent at
it and ask in natural language: "What's my stand-up today?", "Can I unblock
anyone?", "What work was on the last deployment?".

[Read the docs →](/docs/) · [View on GitHub →](https://github.com/clegginabox/salience-macos)
