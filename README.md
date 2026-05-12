# Salience

> Salient events are an attentional mechanism by which organisms learn and survive; those organisms can focus their limited perceptual and cognitive resources on the pertinent (that is, salient) subset of the sensory data available to them.

I started building Salience out of frustration. I realised I've been navigating the same sites, doing the same things, over and over again, in search of a salient piece of information. 

Why doesn't my tooling understand my intent?

- Message on Slack: "can you review this PR?"
- Click through to GitHub. Copy the branch name.
- Open a terminal, check out the branch.
- Copy the ticket key from the branch name. Open Jira. Paste.
- Jira opens the ticket in a tiny sidebar. Swear at it.
- Switch between Jira, GitHub comments, and your IDE.
- Get to the bottom of the comments. Build is failing.

All of the above could live in a single place, behind a single button, a button that only shows if the build is passing.

As a developer - everything starts from a git branch. A ticket links to it. You create a PR from it. CI/CD runs on it. It gets deployed into the cloud. Observability metrics flow from it.

Salience is a desktop app for developers. It follows the branch wherever it goes - ticket, PR, CI, stack, deploy, metrics - pulling everything into one view. It surfaces what you need, when you need it.

One button. Only when the build is passing.

And because Salience already knows what's salient, your AI agent does too. Point Claude, Codex, Cursor or any MCP-aware tool at Salience and it stops guessing — it gets the same correlated context you do. 
The branch you're on. The ticket it links to. The tests that are failing. The deploy that just rolled out. Stop copying and pasting context and start asking "what's my stand-up today?"
