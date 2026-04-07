# HOL-2027 Strategic Implementation Guide

## Overview
This project has been restructured to align with the comprehensive blueprint in `strategies.md`. This document outlines all the changes made and how to proceed with full implementation.

## ✅ Completed Changes

### 1. **Database Schema** (`lib/schema.sql`)
✓ **New core tables created:**
- `users` - Community members with roles and verification badges
- `posts` - Q&A, suggestions, and community content
- `comments` - Threaded responses to posts
- `events` - Campaign events and town halls with RSVP tracking
- `event_rsvps` - Event reservation management
- `media` - Images, videos, documents organized by category
- `team_members` - Campaign team bios and contact info
- `legacy_items` - Historical documents, speeches, achievements
- `news_items` - Press releases and newsroom articles
- `moderation_flags` - Community content flags with holistic tracking
- `audit_logs` - Complete audit trail of all admin/moderation actions

✓ **Optimized indexes added** for performance

### 2. **Public Pages** - All strategic pages now created:
- ✓ **Home** (`app/page.tsx`) - Updated with strategic hero copy and CTAs
- ✓ **About** (`app/about/page.tsx`) - Existing, needs update with Hakeem Lawal bio
- ✓ **Legacy** (`app/legacy/page.tsx`) - Rear Admiral Mohammed Alabi Lawal biography and documents
- ✓ **Agenda** (`app/agenda/page.tsx`) - Existing, maps to "Issues & Plan"
- ✓ **Engage** (`app/engage/page.tsx`) - Q&A, suggestions, moderation policy
- ✓ **Gallery** (`app/gallery/page.tsx`) - Filterable photos by category
- ✓ **Newsroom** (`app/newsroom/page.tsx`) - Press releases and media updates
- ✓ **Get Involved** (`app/get-involved/page.tsx`) - Volunteer signups (existing)
- ✓ **Contact** (`app/contact/page.tsx`) - Multi-channel contact form

### 3. **Admin Dashboard** - Complete moderation and management interface:
- ✓ `app/admin/page.tsx` - Main dashboard with activity log
- ✓ `app/admin/moderation/page.tsx` - Moderation workflow with SOP
- ✓ `app/admin/content/page.tsx` - Content management (Newsroom, Legacy, Team)
- ✓ `app/admin/events/page.tsx` - Event creation and RSVP management
- ✓ `app/admin/users/page.tsx` - User role and status management
- ✓ `app/admin/analytics/page.tsx` - Site analytics and reporting
- ✓ `app/admin/settings/page.tsx` - Configuration and policies

### 4. **Navigation** (`components/Navigation.tsx`)
✓ Updated desktop and mobile menus with all new pages

### 5. **Dependencies** (`package.json`)
✓ Added:
- `@prisma/client` - ORM for database queries
- `swr` - Data fetching library (React Query alternative)

✓ Added dev dependency:
- `prisma` - Schema management and migrations

### 6. **Environment Variables** (`.env.example`)
✓ Comprehensive template with all required services documented

---

## 🚀 Next Steps for Full Implementation

### Phase 1: Database & Backend Setup (Week 1-2)
1. **Set up Neon PostgreSQL**
   - Create Neon project at https://console.neon.tech
   - Copy `DATABASE_URL` to `.env.local`
   - Run migration: `npx prisma migrate dev --name init`

2. **Create Prisma Schema** (`prisma/schema.prisma`)
   ```bash
   npx prisma init
   ```
   Map the SQL tables to Prisma models

3. **Set up Authentication** (Choose one)
   - **Clerk**: Install `@clerk/nextjs`, add middleware
   - **NextAuth.js**: Install `next-auth`, configure providers

4. **API Routes** - Create REST endpoints:
   - `api/posts/route.ts` - Q&A CRUD
   - `api/comments/route.ts` - Comments CRUD
   - `api/events/route.ts` - Event management
   - `api/moderation/flags/route.ts` - Flag management
   - `api/users/route.ts` - User management

### Phase 2: Content & Team (Week 2-3)
1. **Populate Team Members**
   - Use team bios from `strategies.md`
   - Upload photos to `/public/assets`
   - Create team member records in database

2. **Create Legacy Content**
   - Gather historical documents and speeches
   - Upload scanned PDFs
   - Create initial legacy items

3. **Initial News Items**
   - Create first press releases
   - Set up newsroom categories

### Phase 3: Features & Integration (Week 3-5)
1. **Enable Authentication**
   - Test signup/login flows
   - Set up user verification badges
   - Configure role-based access

2. **Moderation System**
   - Implement flagging endpoints
   - Build moderation dashboard actions
   - Set up auto-filter rules

3. **Email Integration**
   - Set up SendGrid or Postmark
   - Create email templates
   - Implement notification system

4. **Event System**
   - Build event creation workflow
   - Implement RSVP tracking
   - Create RSVP export functionality

### Phase 4: Admin & Launch Prep (Week 5-6)
1. **Admin User Creation**
   - Create admin accounts for team members
   - Assign moderation roles
   - Set up dashboard access

2. **Analytics & Monitoring**
   - Configure Sentry for error tracking
   - Set up Vercel Analytics
   - Configure Lighthouse CI

3. **Security Review**
   - Enable HTTPS/TLS (automatic on Vercel)
   - Configure CSP headers
   - Review SQL injection protections
   - Validate input sanitization

4. **Legal Review**
   - [ ] Review portrait usage permissions for Rear Admiral Lawal
   - [ ] Confirm donation compliance before enabling
   - [ ] Publish Privacy Policy
   - [ ] Publish Terms of Use

### Phase 5: Testing & Launch (Week 6-7)
1. **QA Testing**
   - Test all pages and forms
   - Verify moderation workflows
   - Check mobile responsiveness

2. **Performance Optimization**
   - Run Lighthouse audit
   - Optimize images
   - Implement ISR/SSG where appropriate

3. **Soft Launch**
   - Deploy to Vercel
   - Test with core supporters
   - Gather feedback

4. **Public Launch**
   - Final security audit
   - Go live
   - Monitor for issues

---

## 📋 Moderation SOP Quick Reference

### User Roles
- **Volunteer** - Can post, comment, upvote
- **Moderator (Level 1)** - Triage flags, apply warnings/removals
- **Senior Moderator (Level 2)** - Appeal reviews, reinstatement decisions
- **Admin** - Final decisions, legal escalations

### Moderation Actions (In Order of Severity)
1. **No Action** - Content approved
2. **Warning** - Private message to user
3. **Edit** - Remove offending phrase, note it publicly
4. **Remove** - Hide content, send removal notice with appeal option
5. **Suspend** - Temporary ban (24-72h) for repeat/severe violations
6. **Ban** - Permanent removal (requires Senior Moderator sign-off)

### Flagging Reasons
- Spam
- Hate speech
- Harassment
- False claims
- Personal attacks
- Threats
- Doxxing
- Other

### Community Guidelines (Published on /engage)
- Be respectful
- No false claims
- No spam or solicitation
- No doxxing
- Constructive engagement welcomed

---

## 🔐 Security Checklist

- [ ] Database backups configured (Neon snapshots)
- [ ] TLS/HTTPS enabled (automatic on Vercel)
- [ ] CSP headers configured
- [ ] Input validation on all forms
- [ ] Role-based access control tested
- [ ] Audit log creation verified
- [ ] Error handling prevents information leakage
- [ ] Rate limiting configured
- [ ] PII data minimization implemented
- [ ] GDPR/NDPR compliance reviewed

---

## 📊 Current Database Schema

### Core Tables
- **users** - id, name, email, phone, role, verified_badge, created_at
- **posts** - id, user_id, title, body, status, upvotes, created_at
- **comments** - id, post_id, user_id, body, created_at
- **events** - id, title, description, date, location, rsvp_count
- **moderation_flags** - id, post_id, comment_id, reason, status, created_at
- **audit_logs** - id, actor_id, action, target_type, target_id, timestamp

### Reference Documentation
- See `lib/schema.sql` for complete DDL
- Full data model in `strategies.md` section 5

---

## 🔗 Key Files Reference

| Component | File | Purpose |
|-----------|------|---------|
| Database Schema | `lib/schema.sql` | PostgreSQL table definitions |
| Home Page | `app/page.tsx` | Strategic hero and CTAs |
| Engage | `app/engage/page.tsx` | Q&A and suggestions |
| Legacy | `app/legacy/page.tsx` | Rear Admiral biography |
| Admin Dashboard | `app/admin/page.tsx` | Central admin hub |
| Moderation | `app/admin/moderation/page.tsx` | Content moderation |
| Navigation | `components/Navigation.tsx` | Main site navigation |
| Environment | `.env.example` | Configuration template |
| Strategy | `strategies.md` | Original blueprint |

---

## 🎯 Strategic Goals Alignment

✅ **Credibility** - Legacy pages, team bios, verified badges, audit logs
✅ **Engagement** - Q&A system, suggestions, upvoting, comments
✅ **Conversion** - Email capture forms, volunteer signups, event RSVPs
✅ **Performance** - Next.js SSR/SSG, image optimization, CDN-ready

---

## 💡 Tips for Developers

1. **Database Queries**
   - Use Prisma for type-safe queries
   - Always include created_at sorting for consistent pagination

2. **Forms**
   - Use react-hook-form + zod for validation
   - Sanitize all user input server-side

3. **Images**
   - Use Next.js Image component for optimization
   - Store in R2 or S3 with CDN

4. **Admin Pages**
   - All require role check (implemented in middleware once auth set up)
   - Document decisions in audit_logs table

5. **Moderation**
   - Flag reason is required field
   - Always create audit log entry
   - Send user notification on action

---

## 📞 Questions?

Refer to:
- `strategies.md` - Full strategic blueprint
- This file - Implementation guide
- Individual component comments - Code-level documentation

---

**Last Updated**: April 7, 2026
**Status**: Schema and UI layer complete, awaiting database and auth integration
