# Firdavsbek's Blog

A personal blog and portfolio site built with Astro, Markdown content collections, Tailwind CSS,
RSS, sitemap generation, a build-time JSON search index, and GitHub Pages deployment.

## Tech stack

- Astro 5
- Markdown posts in `src/content/blog`
- Astro content collections with schema validation
- Tailwind CSS 4 via the Vite plugin
- RSS feed and sitemap
- GitHub Actions deployment to GitHub Pages
- Build-time `search-index.json` generation

## Install

```bash
npm install
```

## Local development

```bash
npm run dev
```

## Build

```bash
npm run build
```

This runs `astro check` and then builds the static site.

## Deploy to GitHub Pages

1. Push the repository to GitHub on the `main` branch.
2. In the repository settings, open `Pages`.
3. Set the source to `GitHub Actions`.
4. Ensure your custom domain is configured in GitHub Pages and DNS.
5. The workflow in `.github/workflows/deploy.yml` will build and deploy the site automatically.

The deployed site is configured for the current custom domain setup:

- `site`: `https://firdavsbek.com`
- `public/CNAME`: `firdavsbek.com`

## Where to edit content and profile data

- Profile info, social URLs, navigation, copyright, and contact email:
  `src/data/site.ts`
- Blog posts:
  `src/content/blog`
- Profile image:
  `public/images/profile-portrait.jpg`
- Blog hero images:
  `public/images/blog`

## Contact form email

The mailto recipient lives in:

`src/data/site.ts`

Look for:

```ts
contact: {
  email: 'self@gmail.com',
}
```

## Project routes

- `/`
- `/blog/`
- `/blog/[slug]/`
- `/about/`
- `/contact/`
- `/404/`
- `/rss.xml`
- `/search-index.json`

## Notes

- Draft posts are excluded from the archive, post routes, RSS, sitemap, and JSON index.
- The JSON index is intentionally lightweight so client-side search can be added later without
  changing the content model.
