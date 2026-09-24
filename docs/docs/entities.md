# Entities

Every entity type Salience stores, and what each one is. For how they fit together, see [Concepts and terminology](/docs/concepts).

| Entity | What it is |
| --- | --- |
| `git.branch` | A local branch in the project's repo, with its head commit and whether it's checked out |
| `git.worktree` | A checked-out worktree: its path, branch, lock state, disk size and which agent it looks like it belongs to |
| `git.remote_refs` | The remote's branch heads from the last `git ls-remote`, used to time CI polling |
| `vcs.repository` | A hosted repository, with its default branch and local path if cloned |
| `vcs.pull_request` | A pull request: number, title, state, draft flag, head and base branch |
| `vcs.pr_thread` | One item in a PR conversation: a review thread, a review verdict or a plain comment |
| `vcs.pr_commit` | One commit in a PR's current commit list |
| `ci.commit_status` | The CI result for one commit: overall verdict, check counts and which checks failed |
| `ci.poll_state` | Salience's CI polling record for a PR: when it last looked and which commits it has seen |
| `ticket` | A Jira ticket or GitHub issue: key, summary, status and assignee |
| `jira.board` | A Jira board you picked for a project |
| `jira.sprint` | The active sprint on a Jira scrum board, with its start and end dates |
| `docker.compose_service` | A service declared in your compose file, running or not |
| `docker.container` | The live container for a compose service: state, health, ports and exit code |
| `aws.ecr.repository` | An ECR repository you selected |
| `aws.ecr.image` | A container image in one of your ECR repositories: digest, tags and push time |
| `aws.ecs.cluster` | An ECS cluster, with its task and service counts |
| `aws.ecs.task_definition` | An ECS task definition family, mirroring its latest active revision |
| `aws.ecs.task` | An ECS task that is running right now |
| `sentry.project` | A Sentry project in your org, ready to be linked to a Salience project |
| `sentry.issue` | A Sentry issue: title, level, status, counts and when it was first and last seen |
| `slack.message` | A Slack message that mentioned you |
| `agent.session` | A coding-agent session Salience launched or tracked: agent, worktree, branch, state and cost |
| `agent.measurement` | Timing and metrics for one agent turn |
| `route` | An HTTP route found in your PHP code: method, path, name and controller |
| `code.entrypoint` | A symbol you tagged as a starting point for exploring the code graph |
| `toolchain.detection` | A toolchain Salience detected in the project, such as Composer or npm |
| `toolchain.issue` | A problem with a project's toolchain, such as a missing PHP extension |
| `toolchain.command` | A runnable project command from a Taskfile or Makefile, or inferred from a toolchain |
| `project.scoped_action` | An action a project can run, shown as a cue when you change matching files |
| `manifest.task` | A task declared in the project manifest |
| `manifest.trust` | Whether you've chosen to trust a project's manifest |
| `salience.project` | A Salience project: its name, path and hosting |
| `recipe.installed` | A recipe file installed in `~/.salience/recipes` |
| `recipe.active` | A recipe that applies to a project |
| `system.tool` | A command-line tool installed on your Mac, such as `php` or `node@20`, with its version |
| `launcher.installed` | An app Salience can hand actions to, such as PhpStorm, VS Code or iTerm2 |
| `file` | A file in a project that a note or drawn link points at |
| `note` | A sticky note attached to other entities, written by you or proposed by an agent |
| `document` | A document collected by a project, either a copy Salience keeps or a pointer to a file in the repo |
| `unit.work` | One piece of work: a branch, its PR, its ticket, its CI and its deploy joined into one |
| `situation` | Something that needs your attention, with how loud it is, why, and the next step |
| `attention.marker` | The attention state of one spot in the UI: the loudest situation there |
| `pr.involvement` | Your relationship to a PR: author or reviewer, and whether it's your turn |
| `ticket.involvement` | Your relationship to a ticket: assignee, mentioned or on your board |
| `project.attention` | How active a project is (Active, Warm or Dormant), which sets how often it syncs |
| `monitor.network` | An outgoing HTTP request Salience made, kept for the network monitor |
| `monitor.command` | A shell command Salience ran: program, exit status and duration (never its output) |
| `monitor.rate_limit` | The latest rate-limit balance for each connector |
| `monitor.sync` | How fresh each project's sync is, per connector, including the last error |
| `monitor.watcher` | The state of each filesystem watcher |

The `monitor.*` and `project.attention` entities live in memory only and reset when Salience restarts. Everything else is stored on your Mac.
