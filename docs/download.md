---
# Update this block on each release — everything below reads from it.
version: 0.2.0-alpha9
released: 8 August 2026
arm:
  file: Salience_0.2.0-alpha9_aarch64.dmg
  size: 32.8 MB
  sha256: d86e3dc7e8961be8a7e9f97baf0fb31454d79220656414e51d9baa1312106655
intel:
  file: Salience_0.2.0-alpha9_x64.dmg
  size: 36.2 MB
  sha256: 8760777cc594cca1f5bed6106a28b6d902f69ea1536d23898ba17cc6cf95b961
---

# Download Salience

<p class="dl-status">
  <strong>Pre-release.</strong> Salience is in alpha ({{ $frontmatter.version }}, released
  {{ $frontmatter.released }}) and shipping early to a small group of users. Expect rough
  edges, and please <a href="https://github.com/clegginabox/salience-macos/issues">report what you find</a>.
  It's free while it's in alpha; pricing comes later.
</p>

<div class="dl-grid">
  <a class="dl-card" :href="`https://github.com/clegginabox/salience-macos/releases/download/v${$frontmatter.version}/${$frontmatter.arm.file}`">
    <span class="dl-card-kicker">Apple Silicon</span>
    <span class="dl-card-title">Download .dmg</span>
    <span class="dl-card-meta">M1 and newer · {{ $frontmatter.arm.size }}</span>
  </a>
  <a class="dl-card" :href="`https://github.com/clegginabox/salience-macos/releases/download/v${$frontmatter.version}/${$frontmatter.intel.file}`">
    <span class="dl-card-kicker">Intel</span>
    <span class="dl-card-title">Download .dmg</span>
    <span class="dl-card-meta">Intel Macs · {{ $frontmatter.intel.size }}</span>
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
chip line says *Apple M1*, *M2*, *M3* or *M4*, take the Apple Silicon build. If
it says *Intel*, take the Intel one.

## Requirements

- macOS 13 (Ventura) or newer
- Apple Silicon or Intel
- A second monitor is recommended but not required — Salience is designed to be
  glanceable from across the room

## Installing

Open the `.dmg`, drag Salience to your Applications folder, and launch it from
Spotlight or Launchpad. The first time you open it, macOS will ask whether you
trust the developer — click **Open**.

The [install guide](/docs/install) covers first launch in more detail, and
[first run](/docs/getting-started) walks through adding your first project.

## Verifying your download

<pre class="vp-code"><code>shasum -a 256 ~/Downloads/{{ $frontmatter.arm.file }}</code></pre>

| Build | SHA-256 |
|-------|---------|
| Apple Silicon | `{{ $frontmatter.arm.sha256 }}` |
| Intel | `{{ $frontmatter.intel.sha256 }}` |

## Updating

Salience checks for updates on launch and every six hours, and can download
them in the background — applying an update is always gated on you clicking
**Apply and restart**. Both are configurable; see
[configuration](/docs/configuration).

## Other versions

Every build, with its release notes, is on the
[releases page](https://github.com/clegginabox/salience-macos/releases).
