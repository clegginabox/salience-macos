---
title: Concepts and terminology
description: Projects, connections, entities, correlations, units of work, situations and tiles — the building blocks of Salience.
---

# Concepts and terminology

Salience brings information from your developer tools into one workspace. A few building blocks explain how that information fits together and how you can arrange it.

This page follows one example: a Jira ticket to add a Docker Compose stack, a branch for the work, a GitHub pull request and its build checks. You can come back to individual sections as you encounter these terms in the app.

## Projects

A **project** gives Salience the context for the work you're doing. Start by adding a local Git repository. Salience can then show its branches and, when you connect the relevant tools, related pull requests, tickets and builds.

For our Docker setup, the project is the repository containing the application. The ticket, branch and pull request describe different parts of work on that application.

[Add your first project →](/docs/getting-started)

![Projects available in Salience](/concepts/concepts-project.png)

## Connections

A **connection** lets Salience read information from a tool you use. For example, a GitHub connection brings in pull requests, reviews and checks; a Jira connection brings in tickets.

Your local repository supplies the branch for the Docker setup. Connecting GitHub and Jira adds the pull request and the ticket. You can start with one tool and connect others as you need them.

The source tools remain the authority for their information. Salience brings that information together and keeps links back to the sources.

[Connect your tools →](/docs/connect-your-tools)

![Jira connector configuration](/concepts/concepts-connectors.png)

## Entities

An **entity** is something Salience knows about. A branch is an entity. So are a pull request, a ticket, a build run and a Docker container.

Each entity holds information about that thing: a branch has a name, a pull request has a review state, and a build run has a result. Salience updates this information as it reads from your tools.

In our example, these are separate entities:

| Entity | Example |
| --- | --- |
| Jira ticket | `DEMO-2`: Docker setup |
| Git branch | `DEMO-2-docker` |
| GitHub pull request | `#3`: Adding a docker-compose stack to the project |
| Build run | The checks for the pull request's latest commit |

![Dashboard showing pull requests and tickets](/concepts/concepts-entities.png)

## Correlations

A **correlation** is a relationship between entities. It connects information that would otherwise sit separately in your tools.

For example, Salience can relate the ticket `DEMO-2` to the branch `DEMO-2-docker` because the branch name contains the ticket key. It can relate the pull request to its branch, and a build run to the pull request's commit.

Together, those relationships let you follow the work:

**Ticket ↔ branch ↔ pull request ↔ build checks**

Some relationships come from explicit identifiers, such as a commit SHA. Others are inferred from conventions, such as a ticket key in a branch name. What Salience can connect depends on the information available from your tools.

![Entity explorer showing a unit and its correlations](/concepts/concepts-correlations.png)

## Units of work

A **unit of work** brings related entities together so you can read them as one piece of work.

For the Docker setup, that means seeing the branch alongside its ticket, pull request and checks. If a check fails, you can see which work it belongs to without matching it up across browser tabs.

A unit can have only some of these parts. A new branch may not have a pull request yet, and work without a linked ticket can still appear.

[See a unit of work in the first-run guide →](/docs/getting-started#_3-look-at-the-result)

![A unit of work bringing together the Docker setup ticket, branch and pull request](/concepts/concepts-unit-of-work.png)

## Tiles and pages

A **tile** is a view of information: a list of units, a pull request description, a diff, or container logs. A **page** holds tiles, and its **layout** is how those tiles are arranged.

For the Docker setup ticket, you might place a units tile beside the pull request details and diff. For work on your local stack, you might arrange containers and logs together instead.

![A blank page with the tile explorer](/concepts/concepts-pages-tiles.png)

## Situations

A **situation** is something Salience notices about your work that may need your attention.

A failed check or a request for changes may need a look. You might also have created `DEMO-2-docker` and started working while the linked Jira ticket still says To Do. Salience can highlight that mismatch because it knows about both the branch and the ticket.

The same joined context also helps with cleanup. After a pull request is merged, Salience can identify local branches still pointing at the merged work and worktrees with no uncommitted changes. The **Clean up** menu lists the candidates and, for worktrees, can show how much disk space they use. Its actions prepare removal commands for you to review and run in your terminal.

A situation helps you understand the state of your work. You decide what to do next: an open ticket after a merge might need updating, or it might be waiting for a deployment.

![The Clean up menu identifying a local branch whose pull request has merged](/concepts/concepts-clean-up.png)

<!-- ## Loudness

**Loudness** describes how prominently a situation is presented. It helps you scan the workspace and decide where to look.

| Level | Meaning |
| --- | --- |
| **Calm** | Background information that can sit quietly. |
| **Notable** | Something worth taking a closer look at. |
| **Loud** | Something given greater prominence. |

Loudness depends on the situation and can change over time. For example, a review request can become more prominent as it waits.

Salience is designed to remain visible without interrupting you. A quiet workspace reflects what Salience currently knows from its connected tools; it isn't a guarantee that all your work is complete or healthy.

Image: examples of calm, notable and loud situations, with text labels. -->

## The same context for your agent

Salience's **MCP server** makes its joined information available to compatible AI tools. Your agent can read related work context without you copying it from each source by hand.

For example, you can ask an agent about the Docker setup using the ticket, pull request and checks Salience has gathered. The available context depends on what you've connected and what has synced.

[Set up the MCP server →](/docs/mcp)

## Next steps

- [First run](/docs/getting-started) — add a project and see its information appear.
- [Connect your tools](/docs/connect-your-tools) — bring in the sources you use.
- [Configuration](/docs/configuration) — adjust Salience for your projects.
- [Privacy and security](/docs/privacy) — understand where your data lives.
