---
title: Concepts and terminology
description: Projects, connections, entities, correlations, units of work, situations and tiles — the building blocks of Salience.
---

# Concepts and terminology

Salience brings information from your developer tools into one workspace. A few building blocks explain how that information fits together and how you can arrange it.

This page follows one example: a Jira ticket to fix a login problem, a branch for the fix, a GitHub pull request and its build checks. You can come back to individual sections as you encounter these terms in the app.

## Projects

A **project** gives Salience the context for the work you're doing. Start by adding a local Git repository. Salience can then show its branches and, when you connect the relevant tools, related pull requests, tickets and builds.

For our login fix, the project is the repository containing the application. The ticket, branch and pull request describe different parts of work on that application.

[Add your first project →](/docs/getting-started)

<!-- Image: a project selected in the sidebar, with its repository name visible. -->

## Connections

A **connection** lets Salience read information from a tool you use. For example, a GitHub connection brings in pull requests, reviews and checks; a Jira connection brings in tickets.

Your local repository supplies the branch for the login fix. Connecting GitHub and Jira adds the pull request and the ticket. You can start with one tool and connect others as you need them.

The source tools remain the authority for their information. Salience brings that information together and keeps links back to the sources.

[Connect your tools →](/docs/connect-your-tools)

<!-- Image: configured GitHub and Jira connections. Hide account details and credentials. -->

## Entities

An **entity** is something Salience knows about. A branch is an entity. So are a pull request, a ticket, a build run and a Docker container.

Each entity holds information about that thing: a branch has a name, a pull request has a review state, and a build run has a result. Salience updates this information as it reads from your tools.

In our example, these are separate entities:

| Entity | Example |
| --- | --- |
| Jira ticket | `APP-42`: Fix login after session expiry |
| Git branch | `APP-42-fix-login` |
| GitHub pull request | PR #123: Fix login after session expiry |
| Build run | The checks for the pull request's latest commit |

They remain individual things even when Salience displays them together. The same entity can appear in more than one view.

<!-- Image: an entity list or inspector showing the example branch or pull request. -->

## Correlations

A **correlation** is a relationship between entities. It connects information that would otherwise sit separately in your tools.

For example, Salience can relate the ticket `APP-42` to the branch `APP-42-fix-login` because the branch name contains the ticket key. It can relate the pull request to its branch, and a build run to the pull request's commit.

Together, those relationships let you follow the work:

**Ticket ↔ branch ↔ pull request ↔ build checks**

Some relationships come from explicit identifiers, such as a commit SHA. Others are inferred from conventions, such as a ticket key in a branch name. What Salience can connect depends on the information available from your tools.

<!-- Image: the related ticket, branch, PR and checks, with their relationships annotated. -->

## Units of work

A **unit of work** brings related entities together so you can read them as one piece of work.

For the login fix, that means seeing the branch alongside its ticket, pull request and checks. If a check fails, you can see which work it belongs to without matching it up across browser tabs.

A unit can have only some of these parts. A new branch may not have a pull request yet, and work without a linked ticket can still appear.

[See a unit of work in the first-run guide →](/docs/getting-started#_3-look-at-the-result)

<!-- Image: one expanded unit of work showing the login fix and a failed check. -->

## Situations

A **situation** is something Salience notices about your work that may need your attention. It includes a reason explaining what was noticed.

While you're working on the login fix, a failed check or a request for changes may need a look. Later, the pull request might be merged while the linked Jira ticket is still marked In Progress. Salience can surface that mismatch because it has information from both tools.

A situation helps you understand the state of your work. You decide what to do next: an open ticket after a merge might need updating, or it might be waiting for a deployment.

<!-- Image: a situation showing a merged PR with its linked ticket still open. -->

## Loudness

**Loudness** describes how prominently a situation is presented. It helps you scan the workspace and decide where to look.

| Level | Meaning |
| --- | --- |
| **Calm** | Background information that can sit quietly. |
| **Notable** | Something worth taking a closer look at. |
| **Loud** | Something given greater prominence. |

Loudness depends on the situation and can change over time. For example, a review request can become more prominent as it waits.

Salience is designed to remain visible without interrupting you. A quiet workspace reflects what Salience currently knows from its connected tools; it isn't a guarantee that all your work is complete or healthy.

<!-- Image: examples of calm, notable and loud situations, with text labels. -->

## Tiles and pages

A **tile** is a view of information: a list of units, a pull request description, a diff, or container logs. A **page** holds tiles, and its **layout** is how those tiles are arranged.

For the login fix, you might place a units tile beside the pull request details and diff. For work on your local stack, you might arrange containers and logs together instead.

Tiles display the underlying entities. Changing the arrangement changes how you see your work; it doesn't change the branch, ticket or pull request in its source tool.

<!-- Image: a page with three tiles, annotated to distinguish the page, tiles and layout. -->

## The same context for your agent

Salience's **MCP server** makes its joined information available to compatible AI tools. Your agent can read related work context without you copying it from each source by hand.

For example, you can ask an agent about the login fix using the ticket, pull request and checks Salience has gathered. The available context depends on what you've connected and what has synced.

[Set up the MCP server →](/docs/mcp)

## Next steps

- [First run](/docs/getting-started) — add a project and see its information appear.
- [Connect your tools](/docs/connect-your-tools) — bring in the sources you use.
- [Configuration](/docs/configuration) — adjust Salience for your projects.
- [Privacy and security](/docs/privacy) — understand where your data lives.
