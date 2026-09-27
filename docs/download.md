<script setup>
import { data as release } from "./releases.data.js";
</script>

# Download Salience

<p class="dl-status">
  <strong>Pre-release.</strong> Salience is in alpha ({{ release.version }}, released
  {{ release.released }}) and shipping early to a small group of users. Expect rough
  edges, and please <a href="https://github.com/clegginabox/salience-macos/issues">report what you find</a>.
  It's free while it's in alpha; pricing comes later.
</p>

<div class="dl-grid">
  <a v-for="download in release.downloads" :key="download.file" class="dl-card" :href="download.url">
    <span class="dl-card-kicker">{{ download.label }}</span>
    <span class="dl-card-title">Download {{ download.format }}</span>
    <span class="dl-card-meta">{{ download.size }}</span>
  </a>
</div>

<style>
.dl-status {
  border: 1px solid var(--vp-c-divider);
  border-left: 3px solid var(--vp-c-brand-1);
  border-radius: 8px;
  padding: 0.9rem 1.1rem;
  font-size: 0.925rem;
  line-height: 1.6;
}
.dl-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1.5rem 0 2rem;
}
@media (max-width: 640px) {
  .dl-grid { grid-template-columns: 1fr; }
}
.dl-card {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 1.1rem 1.25rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  text-decoration: none !important;
  transition: border-color 0.2s, transform 0.2s;
}
.dl-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}
.dl-card-kicker {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--vp-c-text-2);
}
.dl-card-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}
.dl-card-meta {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
</style>

### Which one do I need?

Open the **Apple menu** in your menu bar and choose **About This Mac**. If the
chip line says *Apple M…*, take the Apple Silicon build. If it says *Intel*,
take the Intel one.

On **Linux**, choose the `.deb` for Debian or Ubuntu, or the `.AppImage` for
other distributions. Both Linux downloads are for x86_64 (AMD64) computers.

## Requirements

- macOS 13 (Ventura) or newer, on Apple Silicon or Intel; or Linux on x86_64
- A second monitor is recommended but not required — Salience is designed to be
  glanceable from across the room

## Installing

### macOS

Open the `.dmg`, drag Salience to your Applications folder, and launch it from
Spotlight or Launchpad. The first time you open it, macOS will ask whether you
trust the developer — click **Open**.

### Linux

For Debian or Ubuntu, install the downloaded `.deb` using your software
installer, or run `sudo apt install ./Salience_*.deb` from the download folder.

For an AppImage, make the downloaded file executable and launch it:

```sh
chmod +x Salience_*.AppImage
./Salience_*.AppImage
```

Run these commands in the download folder with only the version you want to
install present.

The [install guide](/docs/install) covers first launch in more detail, and
[first run](/docs/getting-started) walks through adding your first project.

## Verifying your download

On macOS, run `shasum -a 256 <downloaded-file>`. On Linux, run
`sha256sum <downloaded-file>`. Compare the result with the matching SHA-256 below.

<table>
  <thead><tr><th>Download</th><th>SHA-256</th></tr></thead>
  <tbody>
    <tr v-for="download in release.downloads" :key="download.file">
      <td>{{ download.file }}</td>
      <td><code v-if="download.sha256">{{ download.sha256 }}</code><span v-else>Not provided by GitHub</span></td>
    </tr>
  </tbody>
</table>

## Updating

Salience checks for updates on launch and every six hours, and can download
them in the background — applying an update is always gated on you clicking
**Apply and restart**. Both are configurable; see
[configuration](/docs/configuration).

## Other versions

Every build, with its release notes, is on the
[releases page](https://github.com/clegginabox/salience-macos/releases).
