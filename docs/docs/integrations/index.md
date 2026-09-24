# Integrations

Salience reads from the tools you already use and connects what it finds into one picture of your work. 

Each guide covers what that tool brings in, how to connect it and what it can't do (yet).

| Integration | What it brings in | Set up in |
| --- | --- | --- |
| [GitHub](./github) | Pull requests, reviews, conversation and GitHub Issues | **Settings → Git accounts** |
| [CI](./ci) | Check results for your pull requests and branches, with logs for failed Actions jobs | Comes with GitHub |
| [Jira](./jira) | Tickets from your boards, linked to branches and pull requests | **Project settings → Jira** |
| [Docker](./docker) | Compose services and their containers, with start, stop and restart | Nothing to set up |
| [AWS](./aws) | ECR images, ECS clusters, task definitions and running tasks | **Project settings → AWS** |
| [Sentry](./sentry) | Unresolved issues, and stack traces mapped onto your code | **Project settings → Sentry** |

Every integration is read-only. Salience never changes anything in the tools it reads from, except that the Docker controls start and stop your local containers when you ask them to.

Credentials are kept in an encrypted store. AWS and Docker don't need one: AWS uses your existing AWS CLI profiles, and Docker uses the `docker` command. See [Privacy and security](/docs/privacy).

New to Salience? Start with [Concepts and terminology](/docs/concepts) to see how connections, entities and units of work fit together.
