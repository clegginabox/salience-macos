---
layout: home

hero:
  name: Salience
  text: Home Assistant for developer tools.
  tagline: A single view of all your work across ticket, PR, CI, deploy and observability - anchored by the branch you've currently checked out
  image:
    src: /screenshots/my-work-kanban.png
    alt: Salience showing the My Work kanban view
  actions:
    - theme: brand
      text: Download for macOS
      link: https://github.com/clegginabox/salience-macos/releases/latest
    - theme: altq
      text: Read the docs
      link: /docs/

features:
  - title: Local and secure
    details: asdas
  - title: Calm by default
    details: No inbox, no notifications, no modals. Salience filters everything else to bring you what's important right now.
  - title: Intent-aware shortcuts
    details: Change a test file and "run this test" appears. Pull new dependencies and "npm install" shows up. Stop typing the same commands over and over again.
  - title: Cross-source insights
    details: Get rid of all those browser tabs and let the answers come to you. "Did the build pass?", "What's my stand up today?" "Are my tickets in sync with Jira?"
---

## What is Salience

Salience is Home Assistant for your dev tools — an ambient pane that lives on
your second monitor, calm until something needs your attention.

It was inspired by two things: a recent contract where I essentially worked as
a one-man scrum team, and Home Assistant.

Over a few weeks, I was late for a handful of meetings. I got up on time, got
ready on time, got into my car on time. And when I started the car, the fuel
gauge informed me I didn't have enough fuel to make it to the meeting. A detour
to the petrol station — **late again**.

My car has a phone app, my calendar lives online, and my house has smart
lights. Each lives in its own silo. Home Assistant brings those three silos
into a single place and makes the following possible:

> When I turn my lights on in a morning, if the meeting in my calendar is
> further away than my remaining fuel will take me — turn the lights red.

It's unobtrusive. It isn't a one-time notification I can swipe away and forget.
It's information that already exists, brought to me instead of me having to go
and find it. Most importantly, with enough time to act on it. So I'm not
late...again.

Working as a one-man scrum team was exhausting. I was drowning in tabs and
windows: IDEs, terminals, Teams, email, Docker, Jira, Bitbucket, TeamCity,
AWS, Sentry. Context switching meant another set of everything.

Many of those tabs existed to repeat the same actions — run the tests, SSH into
an instance, run a migration. The rest existed to answer questions whose
answers lived across several tools at once: *Is my Jira ticket in sync with my
work? What caused that Sentry issue? What's actually deployed right now?*

Just as Home Assistant doesn't replace my calendar or my car's app, Salience
doesn't replace any of those tools. It replaces the tabs — and the questions
with **answers**. A red light at just the right time.


## See it work

**Suggested — the right action shows up where you already are**

![Suggested actions for the current branch](/screenshots/checks-tests.png)

**Command palette — every action, every entity, one keystroke away**

![Command palette over the console view](/screenshots/command-palette.png)

**Console — your build output, your terminal, your stack traces, together**

![Build and log output in the console](/screenshots/console.png)

**Stand-up — your week, organised by what needs you, not by ticket ID**

![Stand-up grouped by status: changes requested, stuck in review, CI failing](/screenshots/my-work-list.png)

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

The UI is just tiles over that graph. And because the graph is the substrate, the 
same correlated context is open to your AI tools: Salience ships with an **MCP server**. 
Point your AI agent at it and ask in natural language:
"What's my stand-up today?", "Can I unblock anyone?", "What work was on the last deployment?".

[Read the docs →](/docs/) · [View on GitHub →](https://github.com/clegginabox/salience-macos)
