# Salience

I started building Salience out of frustration. I realised I've been navigating the same sites, doing the same things, over and over again, in search of a salient piece of information.

Why doesn't my tooling understand my intent?

- Message on Slack: "can you review this PR?"
- Click through to GitHub. Copy the branch name.
- Open a terminal, check out the branch.
- Copy the ticket key from the branch name. Open Jira. Paste.
- Jira opens the ticket in a tiny sidebar. Swear at it.
- Switch between Jira, GitHub comments and my IDE.
- Get to the bottom of the comments. Build is failing.

All of the above could live in a single place, behind a single button, a button that only shows if the build is passing.

As a developer - everything starts from a git branch. A ticket links to it. You create a PR from it. CI/CD runs on it. It gets deployed into the cloud. Observability metrics flow from it.

Salience is a desktop app for developers. It follows the branch wherever it goes - ticket, PR, CI, stack, deploy, metrics - pulling everything into one view.

## No inbox, no notifications, no modals

A failed build isn't a line in your inbox - it's a state and state carries context. Your project has a failing build, that's true until it's fixed. A PR review request isn't a one-time notification. If you've left your feedback and nothing has changed since, it's not your concern anymore. A review request on work that unblocks 3 other tickets in the sprint is louder than one that doesn't.

Salience uses this context so you don't have to remember what's important. The most important thing is the first thing you see. When it stops mattering, it stops being there.

## Intent aware shortcuts

When you change a test file. "Run this test" shows up in the command palette and on the build page. You push without a PR. "Open a PR for this branch" shows up. One of your Docker containers logs an error. "Show the stack trace" shows up. 
Pull down a change that added new dependencies. "npm install".

Add a `salience.toml` to your repo and your team's commands show up in the palette alongside the built-in ones.

The more you connect, the more useful it becomes. What might typically take several page navigations in a browser become shortcuts like any other. Streaming CloudWatch logs, generating an SSM exec command or opening the Sentry issue this branch created.

## AI

Because Salience already knows what's salient, your AI agent does too. Point Claude, Codex, Cursor or any MCP-aware tool at Salience and it gets the same correlated context as you.
The branch you're on, the ticket it links to, the tests that are failing and the deploy that just rolled out. Stop copying and pasting context and start asking "what's my stand-up today?"

