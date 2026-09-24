# CI

See the checks for your pull requests and branches next to the work they belong to, and read why a check failed without opening GitHub.

## What appears in Salience

Salience reads the **checks on a commit** from GitHub and turns them into one result for that commit:

| Result | Meaning |
| --- | --- |
| **Running** | At least one check is running, queued or waiting. |
| **Passed** | Every check that counts has passed. |
| **Failed** | At least one check has failed. |
| **Cancelled** | The checks were cancelled. |
| **No checks** | GitHub has no checks for this commit. |
| **Unknown** | Salience couldn't read all of the checks. |

This includes GitHub Actions jobs, checks from GitHub Apps and commit statuses posted by other CI systems, such as Jenkins. A check that was cancelled or superseded by a re-run doesn't count against the result. If a check fails and then passes when you re-run it, the result is Passed.

For a failed result, Salience keeps the name of each failing check, such as `CI / vitest`, with a link to it on GitHub.

### Which commits are checked

- The latest commit of each open pull request you're involved in: ones you opened, ones you've been asked to review and ones you've opened in Salience. Salience also checks the commit GitHub creates to test the merge, and shows the worse of the two results.
- The latest pushed commit of the branch you have checked out, and of your default branch.
- The merge commit of a pull request after it merges.

A build result is linked to its pull request by commit SHA, so it appears on the same [unit of work](/docs/concepts#units-of-work) as the ticket and branch. If you also use [AWS](./aws), an image tagged with the commit SHA links the build to the image and to the ECS tasks running it.

### Where results appear

- **Active CI** tile — commits with checks running or failed. A running commit shows how long it's been running.
- **Units** — work with a failing check is grouped under **CI failing**.
- **Branch status**, **Entity status** and **Count** tiles — show or count results.
- The branch switcher — a spinner on branches with checks running.
- The title bar — when you select a build result, it's named by its result and first failing check, e.g. **Failed · CI / vitest +2**.

When a check fails on a pull request you opened, Salience raises a [situation](/docs/concepts#situations): **CI failed on PR #3**. When your pull request is approved, passing and ready to merge, you'll see **PR #3 is approved, green, and mergeable**.

<!-- SCREENSHOT: the Active CI tile with one running and one failed commit, and a failed result expanded to show its logs. -->

### Logs

For a failed GitHub Actions job, click **Logs** to read the last 200 lines inside Salience. Logs are fetched when you ask for them and aren't stored. For the full log, follow the link to GitHub.

Checks from GitHub Apps and commit statuses from other CI systems have no logs in Salience. Their names link to the check on GitHub.

## Before you connect

CI comes through your GitHub connection. You need:

- **GitHub connected** and the project linked to your GitHub account. See [Connect GitHub](./github#connect-github).
- A token that can read checks. For a fine-grained token, grant read access to **Checks** and **Commit statuses**. To read Actions logs in Salience, also grant read access to **Actions**. A classic token with `repo` covers all of these.
- `git ls-remote` working for the project's remote without asking for a password. Salience uses your local Git credentials to find the latest commit on each branch and pull request.

## Connect CI

There's nothing extra to set up. Once GitHub is connected and the project is linked to your account, Salience starts reading checks.

To turn CI off for a project, open **Project settings → Work** and switch off **CI**.

## Check the connection

1. Open or create a pull request, or push to your branch.
2. Add an **Active CI** tile to a page. While checks run, the commit appears as **Running**. If everything passes, it drops off the tile, which shows **Nothing running, nothing failed.**
3. Select a build result to see when it was last checked, e.g. **Last checked 2 minutes ago**. **Not checked yet** means Salience hasn't read it yet.

## How often results refresh

Salience checks more often when you're likely to be waiting for a result:

- Every 30 seconds for running checks on a pull request you've selected, or on your own pull request in the project you're working in.
- Every few minutes for other work in active projects.
- Less often for projects and pull requests that have been quiet for a while — up to once a day for a pull request with no activity for a month.

Pushing a commit, updating a pull request or switching to a project refreshes its results straight away.

## Limitations

- **GitHub only.** Other CI systems appear only if they post commit statuses to GitHub. There's no direct connection for GitLab, Bitbucket, CircleCI, TeamCity or others.
- **One repository per project.** Salience checks the `origin` remote, or the first remote if there's no `origin`.
- **Failures only, in detail.** Passing and running checks are counted, not listed. Salience keeps up to 10 failing checks per commit.
- **No history.** Salience shows the result for the latest commit, not a list of past runs.
- **No re-runs.** Salience doesn't start, cancel or re-run checks. Use GitHub for that.
- **Other people's pull requests.** A pull request you're not involved in is checked only after you open it in Salience.
- **Branches.** Salience checks the branch you have checked out and your default branch, not every branch.
- **Silent errors.** If Salience can't read checks, results stop updating without an error in the app. **Last checked** shows how fresh a result is.

## Troubleshooting

**Results show Unknown.** Salience couldn't read every check. A fine-grained token may be missing **Checks** or **Commit statuses** read access. Commits with a very large number of check suites can also show Unknown.

**No results appear for a pull request.** Check that the project is linked to your GitHub account (see [Connect GitHub](./github#connect-github)) and that **CI** is switched on in **Project settings → Work**. If it's someone else's pull request, open it in Salience first.

**No results appear for my branch.** Push the branch. Then run `git ls-remote origin` in the project folder. If it asks for a password or fails, fix your Git credentials. Salience can't answer a prompt.

**Logs won't load.** Only failed GitHub Actions jobs have logs in Salience. For a fine-grained token, grant **Actions** read access.

**A result looks out of date.** Select it to see **Last checked**. Switching to another project and back refreshes the results for the project you return to.

## Related guides

- [GitHub](./github)
- [AWS](./aws)
- [Check a build](/docs/using/check-a-build)
- [Concepts and terminology](/docs/concepts)
