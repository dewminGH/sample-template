# FAISCA Starter demo: Larkspur & Bean

A sample website showing what FAISCA's **$150 Starter package** includes. The package
covers up to 3 pages; this sample builds just the home page.

- Up to 3 pages
- Mobile & tablet ready
- Scroll animations & 3D entry effects (pure CSS, respects reduced-motion)
- Contact links & social
- Basic SEO setup (metadata, Open Graph, `robots.txt`, `sitemap.xml`)
- Domain, AWS Amplify hosting & SSL for 3 years
- A few cosmetic changes, free

Larkspur & Bean is a fictional café. The phone number is in ACMA's range reserved
for fiction, and the email and site URL use the reserved `.example` domain.

## Run

```bash
pnpm install
pnpm dev      # http://localhost:3003
pnpm build
```

## Where to change things

- All text, menu, hours, contact links: `src/features/site/constants.ts`
- `FAISCA_PRICING_URL`: set it to show the "Get this site" button
- `SITE_INDEXABLE`: `false` keeps the demo out of search engines (robots meta + robots.txt)
- Colours and fonts: `src/app/globals.css` and `src/app/layout.tsx`

## Licence

© FAISCA. All rights reserved. This template is proprietary and published only as a
sample. Copying, reusing, modifying, redistributing or reselling any part of it without
written permission from FAISCA is prohibited. See [LICENSE](LICENSE).
