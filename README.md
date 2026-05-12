# Salience

> Salient events are an attentional mechanism by which organisms learn and survive; those organisms can focus their limited perceptual and cognitive resources on the pertinent (that is, salient) subset of the sensory data available to them.

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

Salience is a desktop app for developers. It follows the branch wherever it goes - ticket, PR, CI, stack, deploy, metrics - pulling everything into one view. It shows you what you need, when you need it.

One button. Only when the build is passing.

And because Salience already knows what's salient, your AI agent does too. Point Claude, Codex, Cursor or any MCP-aware tool at Salience and it gets the same correlated context as you. 
The branch you're on, the ticket it links to, the tests that are failing and the deploy that just rolled out. Stop copying and pasting context and start asking "what's my stand-up today?"

<img width="1920" height="1046" alt="Screenshot 2026-05-12 at 21 54 53" src="https://github.com/user-attachments/assets/ab9838d4-d6bd-4361-a8b7-bfb7055d1ad6" />
<img width="1916" height="1024" alt="Screenshot 2026-05-12 at 21 56 27" src="https://github.com/user-attachments/assets/167184a6-855c-42c1-907e-68c033971730" />
