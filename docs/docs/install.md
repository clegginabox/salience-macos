# Install Salience

Salience is a desktop app for macOS and Linux. macOS builds support Apple
Silicon and Intel; Linux builds support x86_64 (AMD64).

## Requirements

- macOS 13 (Ventura) or newer, or Linux on x86_64
- See the download page for current package sizes
- A second monitor is recommended but not required — Salience is designed to be glanceable from across the room

## Download

[**Download Salience →**](/download) — pick the macOS or Linux package, with checksums.

On macOS, open the `.dmg`, drag Salience to your Applications folder, and launch
it from Spotlight or Launchpad.

On Linux, install the `.deb` using your software installer, or make the
`.AppImage` executable and run it. See the [Linux installation instructions](/download#linux).

> Pre-release status: Salience is in alpha and shipping early to a small group of users. It's free while it's in alpha; pricing comes later. Expect rough edges; please report what you find on the [issues page](https://github.com/clegginabox/salience-macos/issues).

## First launch

On macOS, the first time you launch Salience, macOS will ask whether you trust the developer. Click **Open**.

Salience stores connector credentials — GitHub tokens, Jira tokens, and other secrets — in an encrypted local SQLite database at `~/Library/Application Support/clegginabox.salience/`. The app itself does not collect or transmit those credentials. (Future releases will gate credential operations behind a biometric (Touch ID) prompt.)

## Next steps

Once Salience is running:

- **[First run →](/docs/getting-started)** — add a project and see entities appear
- **[Connect your tools →](/docs/connect-your-tools)** — GitHub, Jira, Docker, AWS and Sentry
