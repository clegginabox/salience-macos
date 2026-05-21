# Install Salience

Salience is a macOS desktop app. It runs on Apple Silicon and Intel.

## Requirements

- macOS 13 (Ventura) or newer
- ~50 MB disk
- A second monitor is recommended but not required — Salience is designed to be glanceable from across the room

## Download

[**Download the latest release →**](https://github.com/clegginabox/salience-macos/releases/latest)

The download is a `.dmg`. Open it, drag Salience to your Applications folder, and launch it from Spotlight or Launchpad.

> Pre-release status: Salience is shipping early to a small group of users. Expect rough edges; please report what you find on the [issues page](https://github.com/clegginabox/salience-macos/issues).

## First launch

The first time you launch Salience, macOS will ask whether you trust the developer. Click **Open**.

Salience stores connector credentials — GitHub tokens, Jira tokens, and other secrets — in a local SQLite database at `~/Library/Application Support/Salience/`. The app itself does not collect or transmit those credentials. (Future releases will gate credential operations behind a biometric (Touch ID) prompt.)

## Next steps

Once Salience is running:

- **[First run →](/docs/getting-started)** — add a project and see entities appear
- **[Connect your tools →](/docs/connect-your-tools)** — wire up GitHub, Bitbucket, or Jira
