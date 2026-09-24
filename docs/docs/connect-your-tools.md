# Connect your tools

| Tool | What it brings in | Set up in | Credential |
| --- | --- | --- | --- |
| [GitHub](/docs/integrations/github) | Pull requests, reviews, conversation and GitHub Issues | **Settings → Git accounts**, then each project | Personal access token |
| [CI](/docs/integrations/ci) | Check results for your pull requests and branches | Comes with GitHub | Your GitHub token |
| [Jira](/docs/integrations/jira) | Tickets from the boards you pick | **Project settings → Jira** | Email and API token |
| [Docker](/docs/integrations/docker) | Compose services and their containers | Nothing to set up | None. Uses your `docker` command |
| [AWS](/docs/integrations/aws) | ECR images, ECS clusters, task definitions and running tasks | **Project settings → AWS** | None. Uses your AWS CLI profile |
| [Sentry](/docs/integrations/sentry) | Unresolved issues, and stack traces mapped onto your code | **Project settings → Sentry** | Auth token and organisation |

GitHub is the only code host Salience supports. There's no connector for GitLab or Bitbucket.

Every connector is read-only. The one exception is Docker, where the controls start and stop your local containers when you ask them to.

## Where things are set up

- **Settings → Git accounts** holds your GitHub accounts. They're shared by every project on your Mac.
- **Project settings → Overview → Source** chooses which GitHub account a project uses, under **Hosting account**. When you add a project, the **Detected Connectors** card offers the same choice.
- **Project settings → Jira** and **Project settings → AWS** are per project, so different projects can use different Jira sites or AWS profiles.
- **Project settings → Sentry** stores the token and organisation once for your Mac. Each project then picks which Sentry projects it tracks.

Docker needs nothing. Salience finds the Compose file at the root of your project.

## What each tool needs

**GitHub.** A fine-grained token with read access to **Pull requests**, **Contents**, **Checks**, **Commit statuses** and **Issues**. Add **Actions** read access to read failed job logs in Salience. A classic token with `repo` also works. Salience accepts `public_repo`, `read:org` and `notifications` too, and refuses a classic token with any other scope before storing it. See [GitHub](/docs/integrations/github#before-you-connect).

**CI.** Nothing beyond GitHub. Salience reads GitHub's check suites and the commit statuses other CI systems post to GitHub. See [CI](/docs/integrations/ci).

**Jira.** A Jira Cloud site, your Atlassian account email and an API token. See [Jira](/docs/integrations/jira#before-you-connect).

**AWS.** A working AWS CLI profile. Salience stores no AWS secret. The **Permissions** card lists the ten read-only actions it calls and can copy a least-privilege IAM policy for them. See [AWS](/docs/integrations/aws#permissions).

**Sentry.** An auth token with only `org:read`, `project:read` and `event:read`, and your organisation slug. See [Sentry](/docs/integrations/sentry#before-you-connect).

**Docker.** The `docker` command working in your terminal. See [Docker](/docs/integrations/docker#before-you-connect).

## How often things refresh

Salience checks more often for the project you're working in and less often for projects that have gone quiet.

| What | How often |
| --- | --- |
| Git branches and worktrees | As soon as they change on disk. A slower check catches anything missed. |
| Pull requests | Every 5 minutes for the project you're working in, every 30 minutes for projects with activity in the past week and every 3 hours for others. |
| GitHub Issues | About every minute for the project you're working in, less often for others. |
| CI results | Every 30 seconds for running checks you're waiting on, every few minutes for other active work and less often for quiet work. |
| Jira tickets | Every 5 minutes. |
| Sentry issues | About every 2 minutes, more often for the project you're working in and less often for quiet ones. |
| AWS | About every minute for the project you're working in, less often for others. |
| Docker | As soon as a container changes. Salience watches Docker rather than polling it. |

Connecting a tool or saving what a project tracks starts a sync straight away.

## Revoking access

1. Disconnect in Salience. For GitHub, use **Settings → Git accounts**. This removes the account from every project that used it. For Jira, AWS and Sentry, use the project's **Project settings**.
2. Revoke the token where you created it: GitHub, your Atlassian profile or Sentry.

AWS has nothing to revoke in Salience. It never stored a secret, only the name of your AWS CLI profile.

Disconnecting stops syncing, but some data that's already synced stays in Salience. Each guide's **Limitations** section says what.

Credentials are kept in an encrypted store on your Mac. See [Privacy and security](/docs/privacy).
