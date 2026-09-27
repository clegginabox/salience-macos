import assert from 'node:assert/strict';
import { test } from 'node:test';
import { releaseData } from './releases.mjs';

const asset = (name, digest = `sha256:${'a'.repeat(64)}`) => ({
  name, digest, size: 12345678,
  browser_download_url: `https://github.com/example/releases/download/v1/${name}`,
});
const release = (overrides = {}) => ({
  tag_name: 'v1.0.0', published_at: '2026-09-01T12:00:00Z', draft: false,
  assets: [asset('Salience_1_aarch64.dmg')], ...overrides,
});

test('selects newest published release by publication date, including prereleases', () => {
  const result = releaseData([
    release(),
    release({ tag_name: 'v2-alpha', prerelease: true, published_at: '2026-09-02T12:00:00Z' }),
    release({ tag_name: 'v3', draft: true, published_at: '2026-09-03T12:00:00Z' }),
  ]);
  assert.equal(result.version, '2-alpha');
  assert.equal(result.released, '2 September 2026');
});

test('lists macOS and Linux installers, excluding updater archives and signatures', () => {
  const names = ['Salience_1_aarch64.dmg', 'Salience_1_x64.dmg',
    'Salience_1_amd64.AppImage', 'Salience_1_amd64.deb'];
  const result = releaseData([release({ assets: [...names,
    'latest.json', 'Salience_1_x64.app.tar.gz', 'Salience_1_x64.dmg.sig',
  ].map(name => asset(name)) })]);
  assert.deepEqual(result.downloads.map(item => item.file), names);
  assert.deepEqual(result.downloads.map(item => item.label),
    ['macOS · Apple Silicon', 'macOS · Intel', 'Linux · x86_64 · AppImage', 'Linux · x86_64 · Debian / Ubuntu']);
  assert.equal(result.downloads[0].size, '12.3 MB');
  assert.equal(result.downloads[0].sha256, 'a'.repeat(64));
  assert.equal(result.downloads[0].url, asset(names[0]).browser_download_url);
});

test('does not invent a checksum when GitHub omits it', () => {
  const result = releaseData([release({ assets: [asset('Salience_1_x64.dmg', null)] })]);
  assert.equal(result.downloads[0].sha256, null);
});

test('fails clearly when no published releases or installers exist', () => {
  assert.throws(() => releaseData([]), /No published release/);
  assert.throws(() => releaseData([release({ assets: [] })]), /No supported installers/);
});
