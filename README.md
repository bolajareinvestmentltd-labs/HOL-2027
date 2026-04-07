# Kwara Ti Wa Ni - Website

A professional, mobile-first profile website for Engr. Olufemi Sanni's (ARABA) political initiative "Kwara Ti Wa Ni".

Built with Next.js, TypeScript, Tailwind CSS, and PostgreSQL (Neon).

## Quick Setup

### Prerequisites
- Node.js 18+
- PostgreSQL (Neon recommended)
- npm

### Installation

1. Setup environment variables in `.env.local`:
```bash
DATABASE_URL=postgresql://user:password@host/db
NEXT_PUBLIC_SITE_URL=http://localhost:3000
ADMIN_EMAIL=admin@example.com
```

2. Install and run:
```bash
npm install
npm run dev
```

3. Initialize database:
```bash
psql -d "$DATABASE_URL" -f lib/schema.sql
```

Visit `http://localhost:3000`

## Project Structure

```
/app                   Pages and routes
  /api                 API endpoints (forms, admin)
  /about               About page
  /agenda              Agenda/policy page
  /get-involved        Volunteer form
  /share-ideas         Ideas submission form
  /admin               Admin dashboard

/components            Reusable React components
  Navigation.tsx       Header navigation
  Footer.tsx           Footer
  VolunteerForm.tsx    Volunteer form
  IdeaForm.tsx         Ideas form
  ImageCarousel.tsx    Homepage carousel
  AnimatedHeroBackground.tsx  About page hero

/lib                   Utilities and database
  db.ts                Database connection
  types.ts             TypeScript types
  email.ts             Email utilities
  schema.sql           Database schema
```

## Features

✅ 5 responsive pages with mobile-first design
✅ Volunteer registration form
✅ Ideas/suggestions submission form
✅ Admin dashboard with CSV export
✅ Email notifications (configurable)
✅ Image carousels with animations
✅ PostgreSQL database with Neon
✅ SEO-optimized
✅ Ready for Vercel deployment

## Deployment to Vercel

```bash
# 1. Push to GitHub
git push

# 2. Visit vercel.com and import repository
# 3. Add environment variables
# 4. Deploy

# Enable custom domain:
# - Add domain in Vercel dashboard
# - Update DNS records
# - SSL auto-enabled
```

## Admin Dashboard

Access at `/admin` with token authentication.

Features:
- View all volunteer submissions
- View all idea submissions
- Export data as CSV
- Filter by LGA
- Real-time submission counts

## Customization

- **Colors**: Edit `tailwind.config.ts` for custom palette
- **Images**: Replace placeholders in `/public` folder
- **Content**: Edit page files in `/app` directory
- **Email**: Configure SMTP in `.env.local`

## Support

For documentation and support, see the full README.md or contact the dev team.
