# GitHub setup

The website entry file is included as `index-html-source.txt` so the full source remains available even in environments that filter direct HTML uploads.

After cloning the repository, rename it once:

```bash
mv index-html-source.txt index.html
pnpm install
pnpm dev
```

After that, the project runs as a standard Vite + React app.