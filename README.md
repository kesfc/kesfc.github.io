# Weihao Li

A personal portfolio for Weihao Li, built as a single-page static site with
Next.js. It presents research interests without exposing unpublished titles,
results, or collaborator details.

## Local development

Node.js 22.13 or newer is required.

```bash
npm install
npm run dev
```

## GitHub Pages

The repository includes a GitHub Actions workflow that exports and deploys the
site automatically on every push to `main`.

1. Create a GitHub repository and push this project to its `main` branch.
2. Open **Settings → Pages** in GitHub.
3. Set **Source** to **GitHub Actions**.
4. Open the URL shown by the completed `Deploy portfolio to GitHub Pages` run.

Both `username.github.io` repositories and normal project repositories are
supported; the workflow configures the correct asset path automatically.

## Privacy approach

- No phone numbers are published.
- Ongoing manuscripts use topic-level summaries only.
- Paper titles, venues, results, and collaborator details remain private.
- Public repositories are linked directly from the project cards.
