export function releaseData(releases) {
  const release = releases.filter(item => !item.draft && item.published_at)
    .sort((a, b) => Date.parse(b.published_at) - Date.parse(a.published_at))[0];
  if (!release) throw new Error('No published release found');

  const formats = [
    { suffix: '_aarch64.dmg', label: 'macOS · Apple Silicon', format: '.dmg' },
    { suffix: '_x64.dmg', label: 'macOS · Intel', format: '.dmg' },
    { suffix: '_amd64.AppImage', label: 'Linux · x86_64 · AppImage', format: '.AppImage' },
    { suffix: '_amd64.deb', label: 'Linux · x86_64 · Debian / Ubuntu', format: '.deb' },
  ];
  const downloads = formats.flatMap(format => release.assets
    .filter(asset => asset.name.endsWith(format.suffix))
    .map(asset => ({
      label: format.label,
      format: format.format,
      file: asset.name,
      url: asset.browser_download_url,
      size: `${(asset.size / 1_000_000).toFixed(1)} MB`,
      sha256: /^sha256:[a-f0-9]{64}$/i.test(asset.digest ?? '')
        ? asset.digest.slice(7) : null,
    })));
  if (!downloads.length) throw new Error(`No supported installers in ${release.tag_name}`);
  return {
    version: release.tag_name.replace(/^v/, ''),
    released: new Date(release.published_at).toLocaleDateString('en-GB', {
      day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
    }),
    downloads,
  };
}

export async function fetchReleaseData() {
  const releases = [];
  // Paginate: creation order is not necessarily publication order.
  for (let page = 1; ; page++) {
    const response = await fetch(
      `https://api.github.com/repos/clegginabox/salience-macos/releases?per_page=100&page=${page}`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
          ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
        },
        signal: AbortSignal.timeout(30_000),
      },
    );
    if (!response.ok) throw new Error(`GitHub releases request failed: HTTP ${response.status}`);
    const batch = await response.json();
    releases.push(...batch);
    if (batch.length < 100) break;
  }
  return releaseData(releases);
}
