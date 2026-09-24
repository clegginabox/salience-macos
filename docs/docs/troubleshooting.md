# Troubleshooting

## Salience won't open / "developer cannot be verified"

Salience is shipped unsigned during early-adopter releases, so macOS Gatekeeper will block the first launch.

The fix:

1. Right-click Salience in **Applications**, choose **Open**, confirm in the dialog.
2. If macOS still refuses, open **System Settings → Privacy & Security**. Scroll to the message about Salience being blocked and click **Open Anyway**.
3. Once you've launched it once, subsequent launches work normally.

When Salience is signed and notarised this step will go away. Track progress at [issues](https://github.com/clegginabox/salience-macos/issues).

## My PRs or tickets aren't appearing

1. For pull requests, check the project has a GitHub account chosen in **Project settings → Overview → Source**. A project without one shows **unbound — pull requests and CI won't sync**.
2. For Jira tickets, check the ticket's board is ticked under **Included boards** in **Project settings → Jira**.
3. Check the **Sync status** tile. It shows a row for each kind of data and whether its last sync failed.
4. Check **Network Inspector**. If requests return 401 or 403, the token is wrong or has expired.
5. Confirm the project's git remote points at `github.com`. From the project root: `git remote -v`.

Each [integration guide](/docs/integrations/) has its own troubleshooting section.

## "Authentication failed" when adding a token

- **GitHub:** `Token not stored: it grants more than Salience needs` means your classic token has scopes Salience doesn't need. The message lists them. Create a fine-grained token, or a classic token with only `repo`. If an account shows **Reconnect required**, GitHub rejected the token, usually because it expired or was revoked. Disconnect it, create a new token and connect again. Then choose the account again for each project. See [GitHub](/docs/integrations/github#troubleshooting).
- **Jira:** the token is paired with your email. The email must be the one on the Atlassian account that created the token. See [Jira](/docs/integrations/jira#troubleshooting).

## Salience is using a lot of CPU

The most common cause is a very large repository being scanned on first add. Wait 30-60 seconds.

If it persists, [open an issue](https://github.com/clegginabox/salience-macos/issues) with the repo size (`du -sh .git`) and the number of branches (`git branch -a | wc -l`).

## I see a host I don't recognise in Network Inspector

That's a bug — please [open an issue](https://github.com/clegginabox/salience-macos/issues) with a screenshot or copy of the request details.

## Reset everything

To start clean (this deletes all credentials, projects, and preferences):

```bash
rm -rf "$HOME/Library/Application Support/clegginabox.salience"
rm "$HOME/.salience/preferences.json"
```

Then relaunch Salience. You'll need to re-add projects and re-paste tokens.

## Still stuck?

[Open an issue](https://github.com/clegginabox/salience-macos/issues) with steps to reproduce and what you've already tried.
