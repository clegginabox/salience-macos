# Entities, correlations & situations

Every view in Salience — [the map](/docs/map), [My Work & Stand-up](/docs/my-work), the notifications feed — is a lens over the same four-step model. Understanding it takes five minutes and explains everything you'll see.

## The four steps

1. **Entities in.** Salience reads your tools and stores what it finds as typed records.
2. **Correlations drawn.** Correlators join entities from different sources into one graph.
3. **Situations derived.** Rules read that graph and promote the parts that need you.
4. **Loudness assigned.** Each situation gets a level that decides how hard it tugs.

Nothing in Salience shouts unless step 4 decided it deserved to.

## Entities

An entity is a typed, addressed record of something real: `git.branch`, `vcs.pull_request`, `ticket`, `ci.run`, `ci.commit_status`, `docker.container`, `aws.ecr.image`, `aws.ecs.task`, `route`, `sentry.issue`, and around thirty more — plus the derived ones Salience computes itself (`unit.work`, `situation`, `pr.involvement`).

Two things follow from that, and they're the reason Salience isn't a dashboard:

- **Entities persist.** They live in an embedded database on your machine, not in a fetch-and-forget render loop. Yesterday's PR is still there.
- **Entities stream.** When a sync updates one, the change flows straight to the UI as a delta. You don't refresh anything.

Tickets are the one type deliberately kept global — the same Jira ticket can legitimately belong to more than one project. Everything else is scoped to the project it came from, which is why two repos with a `main` branch never bleed into each other.

## Correlations

A correlator is a small piece of logic that looks at two entity types and draws an edge when they match. Each edge carries a confidence: **deterministic** when the join is exact (a SHA, an ID, a declared link) or **inferred** when it rests on a naming convention.

| Link drawn | How |
| --- | --- |
| CI run → pull request | The run's commit SHA equals the PR's head SHA |
| Branch → ticket | A ticket key appears in the branch name (`LW-508-login`) |
| Branch → GitHub issue | GitHub's `3-bootstrap-application` issue-number branch convention |
| Branch → pull request | The branch name matches the PR's head branch |
| PR → ticket | Ticket key in the title or head branch, classified *Closes* (a closing keyword), *Implements* (key in the branch) or *References* (a bare mention) |
| CI pipeline → repository | The pipeline declares which repo it builds; you can pin it yourself |
| CI run → ECR image | The run's SHA appears in an image tag — only where you've pinned the pipeline to that ECR repo |
| Task definition → ECR image | The task def's container image resolves to an image in your registry |
| Running ECS task → task definition | The task's family matches a mirrored task definition |
| Ticket → ticket | Jira's own *blocks* / *blocked by* links |
| Compose service → container | A declared service in your compose file matched to the container actually running |

Individually these are unremarkable. Chained, they're the point.

**Branch → PR → ticket.** The chain that makes a piece of work one thing rather than three browser tabs. It's what powers the unit of work Salience builds for every branch, and what lets Stand-up group your week by what needs you instead of by ticket ID.

**PR → CI run → ECR image → task definition → running ECS task.** The chain that answers *what's actually deployed right now* — walk from a running container back to the commit, or from a merged PR forward to whether it's live. No single tool in that chain can answer it.

Edges are also inspectable and, in places, yours to control: a pipeline→repo link you pin by hand is treated as declared fact, and the CI-run→image correlator refuses to guess until you've pinned it.

## Rules and situations

Rules read the correlated graph and derive new entities from it. Some produce raw analysis; others produce **situations** — the things Salience will actually surface to you.

| Rule | What it derives |
| --- | --- |
| PR involvement | Your relationship to each open PR — author, reviewer, whether the ball is in your court, who acted last |
| Ticket involvement | Whether a ticket is yours (assignee today; mentions and board ownership are placeholders) |
| Review situations | *Needs my review* and *needs my re-look* — the reviewer side |
| PR author situations | One situation per author-facing condition: changes requested, CI failed, merge conflicts, unresolved threads awaiting your reply, and ready-to-merge |
| Drift situations | Cross-source hygiene — PR merged but the ticket is still open, ticket Done but the PR isn't, branch exists but the ticket never moved, ticket with no branch or PR at all |
| Unit of work | Materialises branch ∪ PR ∪ ticket ∪ CI as a single `unit.work` entity — what the HUD, My Work, Stand-up and map all read |
| Attention markers | Resolves each situation back to a branch and places it as an edge-of-map marker |
| CI expectation | Tracks commits whose CI hasn't settled, so polling follows real work rather than a fixed timer |

A situation carries four things: a **kind** (`work_item`, `review_gate`, `check`, `build_status`, `hygiene`), a **loudness**, a plain-English **reason** — *"PR #412 merged but LW-508 is still 'In Progress' — move it to Done"* — and at most one **primary action**.

One action, deliberately. Salience surfaces state and hands you the next step; it doesn't decide on your behalf, and destructive work goes to a pre-filled terminal command rather than a button.

## Loudness

Loudness is the contract between Salience and your attention. Every situation is exactly one of:

| Level | Means | Behaviour |
| --- | --- | --- |
| **Calm** | True, worth knowing, not urgent | Sits quietly. Your PR is approved and green; your ticket has no branch yet |
| **Notable** | Something wants you, soon | Visible without being loud. Changes requested, CI red, merge conflicts, a review just landed on your desk |
| **Loud** | This has waited long enough | Earns real prominence. A requested review you haven't looked at for hours |

Loudness isn't a severity label baked into an event type — it's computed, and some of it moves with time. A requested review starts **Notable** and escalates to **Loud** once it has waited past your threshold (three hours by default, configurable). Hygiene drift is Notable when it's a real inconsistency, Calm when it's just a branch that got ahead of its ticket.

The practical consequence: you can leave Salience on a second monitor all day. If nothing is loud, nothing needs you — and that's a claim the rules are accountable for, not a mood.

## Where to see it

- **The notifications feed** is every situation across every project, filterable by loudness. It's the flat view of what the rules decided.
- **[The map](/docs/map)** places the same situations spatially — attention markers at the edge point toward the branch that needs you. Whichever branch you're currently on never gets a marker; you're already there.
- **[My Work & Stand-up](/docs/my-work)** reads the materialised units of work, which is why it can group your week by state rather than by ticket number.
- **[The MCP server](/docs/mcp)** exposes the same entities, edges and situations to your AI agent. When you ask "what's my stand-up?", it's reading this graph — not scraping five tabs.

Everything here is derived locally, from data already on your machine or already in your tools. See [Privacy & security](/docs/privacy) for where it lives.
