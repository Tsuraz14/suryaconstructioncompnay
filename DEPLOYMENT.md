# Deployment (cPanel Node.js App)

This project deploys via Next.js standalone output and a small `deploy/` bundle.

## Build + Prepare Bundle

Run locally or in CI:

```bash
npm ci
npm run deploy
```

This generates `deploy/` with:
- `server.js` and runtime from `.next/standalone`
- static assets in `deploy/.next/static`
- `public/` assets (if present)
- `package.json` (copied for reference)

## Upload to cPanel

FTP upload the **contents** of `deploy/` to your app root folder, for example:

```
/home/<cpanel-user>/apps/surya/
```

## cPanel “Setup Node.js App”

Use these settings:

- Application root: `apps/surya`
- Startup file: `server.js`
- Mode: `Production`

Environment variables:

```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://suryaconstructioncompany.com
```

Restart the app after upload.

## Common issues checklist

- 404 static assets: confirm `deploy/.next/static` was uploaded.
- CSS missing: restart the app and verify `.next/static` exists.
- Wrong domain in OG/SEO: ensure `NEXT_PUBLIC_SITE_URL` is set.
