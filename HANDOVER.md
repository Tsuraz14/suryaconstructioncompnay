# Surya Construction Company — Client Handover

## What’s Included
- Full site in English (EN) and Nepali (NP)
- Dark/light theme with user toggle
- Pages: Home, About, Services, Projects, Contact
- SEO basics: metadata, canonical URLs, hreflang, sitemap, robots
- JSON‑LD Organization/ConstructionCompany schema on Home

## Updating Images & Logos
- Site images live in `public/images/`
- Section images are organized by page folders (e.g. `public/images/home`, `public/images/services`, `public/images/projects`, `public/images/about`)
- Logos live in `public/logo/`
- Replace images by keeping the same filename to avoid code changes

## Image Rules (Recommended)
- Use `.webp` only
- Suggested width: 1600–2400px for hero images, 1200–1600px for cards
- Keep file sizes as small as practical (target under 500KB when possible)
- Use clear, consistent filenames (lowercase with hyphens)

## Deployment
- Push to `main` triggers build and FTP upload
- Deployment configuration and environment variables are documented in `DEPLOYMENT.md`
- Required environment variable:
  - `NEXT_PUBLIC_SITE_URL=https://suryaconstructioncompany.com`

## When to Contact the Developer
- New pages or major layout changes
- Contact form integration or email delivery setup
- Hosting, DNS, or performance issues
- Adding new languages or CMS integration
