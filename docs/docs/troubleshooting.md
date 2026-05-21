# Troubleshooting

## Salience won't open / "developer cannot be verified"

Salience is shipped unsigned during early-adopter releases, so macOS Gatekeeper will block the first launch.

The fix:

1. Right-click Salience in **Applications**, choose **Open**, confirm in the dialog.
2. If macOS still refuses, open **System Settings → Privacy & Security**. Scroll to the message about Salience being blocked and click **Open Anyway**.
3. Once you've launched it once, subsequent launches work normally.

When Salience is signed and notarised this step will go away. Track progress at [issues](https://github.com/clegginabox/salience-macos/issues).

## My PRs or tickets aren't appearing

1. Confirm the connector is connected: **Connections** sidebar entry shows a green dot next to the tool name.
2. Check **Network Inspector** — you should see successful requests to the tool's API. If they're 401/403, the token is wrong or has expired; regenerate and re-paste.
3. Sync runs every 5 minutes. Wait, or click **Sync now** if visible.
4. Confirm the project's git remote actually points at the connected host. From the project root: `git remote -v`.

## "Authentication failed" when adding a token

- **GitHub:** classic PATs work; fine-grained tokens need to grant the specific repos read access for Pull requests, Contents, and Checks. Double-check the token hasn't expired.
- **Bitbucket:** app passwords need the explicit checkbox permissions listed on [Connect your tools](/docs/connect-your-tools). Account passwords don't work — only app passwords or workspace/repo access tokens.
- **Jira:** the token is paired with your email. The email must match the Atlassian account, not just the display name.

## Salience is using a lot of CPU

The most common cause is a very large repository being scanned on first add. Wait 30-60 seconds.

If it persists, [open an issue](https://github.com/clegginabox/salience-macos/issues) with the repo size (`du -sh .git`) and the number of branches (`git branch -a | wc -l`).

## I see a host I don't recognise in Network Inspector

That's a bug — please [open an issue](https://github.com/clegginabox/salience-macos/issues) with a screenshot or copy of the request details.

## Reset everything

To start clean (this deletes all credentials, projects, and preferences):

```bash
rm -rf ~/Library/Application\ Support/Salience
rm ~/.salience/preferences.json
```

Then relaunch Salience. You'll need to re-add projects and re-paste tokens.

## Still stuck?

[Open an issue](https://github.com/clegginabox/salience-macos/issues) with steps to reproduce and what you've already tried.
