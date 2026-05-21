# Salience

> Home Assistant for developer tools.

This repo hosts the [Salience website and documentation](https://clegginabox.github.io/salience-macos/).

The macOS app source lives in a separate repository.

## Editing the site

```bash
nvm use
npm install
npm run docs:dev
```

Open [http://localhost:5173/salience-macos/](http://localhost:5173/salience-macos/).

Pushing to `main` triggers an automatic Pages deploy via `.github/workflows/deploy.yml`.

## Structure

- `docs/index.md` — landing page
- `docs/docs/*.md` — documentation pages
- `docs/.vitepress/config.mts` — nav, sidebar, theme
- `docs/.vitepress/theme/custom.css` — accent and typography overrides
- `docs/public/` — static assets (favicons, OG image, screenshots)

## License

MIT.
