HOL‑2027 — plan.md (single‑page blueprint for repo)
Project: HOL 2027 — Legacy of Service, Future for Kwara  
Repo: HOL-2027  
Primary contact / Product Owner: Quickserve

1. Purpose & goals
Purpose: Build a fast, hybrid campaign website that centers Alh. Hakeem Lawal’s experience and his father Rear Admiral Mohammed Alabi Lawal’s legacy, drives conversions (email signups, volunteers, RSVPs), and hosts a moderated civic engagement space that serves as the campaign’s source of truth.

Top goals

Credibility: present verifiable timelines, scanned legacy documents, and endorsements.

Engagement: moderated Q&A, suggestion upvotes, volunteer conversion funnel.

Conversion: email capture, volunteer signups, event RSVPs.

Performance: hybrid SSR/SSG for instant loads and SEO.

2. Tech stack (approved)
Frontend: Next.js (TypeScript)

Styling: Tailwind CSS (or CSS Modules if preferred)

State / Data fetching: React Query or SWR

Auth: Clerk or NextAuth.js (email + phone verification)

DB: Neon (Postgres) + Prisma ORM

Storage / CDN: Cloudflare R2 or S3 + CDN; Next/Image optimization

Hosting / Deploy: Vercel (preview + production)

Email: SendGrid / Postmark; SMS (optional): Twilio**

Search (optional): Postgres full‑text; Algolia for instant search

Monitoring: Sentry; Vercel analytics

CI/CD: GitHub Actions + Vercel previews

Optional CMS: Sanity / Strapi for editorial control

Note: Do not enable online donations until legal counsel confirms compliance with campaign finance rules.

3. Repo structure & environment
High‑level folders

/app or /pages — Next.js pages and routes

/components — UI components (Hero, Timeline, Gallery, PostCard)

/lib — API clients, auth helpers, db connectors (Prisma)

/admin — Admin UI for moderation and content editors (protected)

/public/assets — placeholder logos, images, static files

/scripts — migration and maintenance scripts

/docs — SOPs, legal docs, moderation logs

Environment variables (examples to add to Vercel)

DATABASE_URL (Neon)

NEXT_PUBLIC_API_BASE

AUTH_SECRET / Clerk keys or NextAuth keys

SENDGRID_API_KEY / TWILIO_* (if used)

SENTRY_DSN

NEXT_PUBLIC_SITE_URL

4. Core features & pages
Primary pages

Home — Hero (<h1>: Legacy of Service, Future for Kwara — HOL 2027), 3 proof points, CTA.

About — Bio, timeline of campaigns & results, endorsements, Meet the Team.

Legacy — Full biography of Rear Admiral Mohammed Alabi Lawal, scanned speeches, portrait badge.

Issues & Plan — Policy pillars, downloadable one‑pagers.

Engage — Moderated Q&A, suggestion box (upvote), weekly “Ask Hakeem” replies.

Gallery — Filterable sections (Party Elders; Crowd Moments; Community Work; Family & Legacy; Media).

Newsroom — Press releases, fact checks, media kit.

Get Involved — Volunteer roles, micro‑tasks, event RSVPs.

Contact — Media contact, general form.

Admin features

Content editor for Newsroom & Legacy uploads

Moderation dashboard (flagged posts, user management)

Event management & RSVP export

Analytics snapshot & export

5. Data model (core entities)
Core tables

users — id, name, email, phone, role, verified_badge, created_at

posts — id, user_id, title, body, status, upvotes, created_at

comments — id, post_id, user_id, body, created_at

events — id, title, date, location, description, rsvp_count

media — id, type, url, caption, category, date

team_members — id, name, role, bio, photo_url

legacy_items — id, type, title, date, file_url

news_items — id, title, body, published_at, tags

audit_logs — id, actor_id, action, target, timestamp

6. Security, privacy & legal
TLS everywhere; CSP headers; input sanitization.

PII minimization: store minimal personal data; encrypt sensitive fields.

Backups: Neon snapshots nightly; offsite weekly.

Image rights: obtain written permission from family for father’s portrait use.

Donations: legal review before enabling.

Privacy: publish Privacy Policy and Terms of Use; comply with NDPR best practices.

7. Performance & accessibility
Hybrid rendering: SSR for Home/Legacy/Newsroom; SSG for static pages; ISR for updates.

Image optimization: multiple sizes, lazy loading, CDN.

Accessibility: WCAG AA, semantic HTML, keyboard nav, alt text.

Testing: Lighthouse, axe-core, E2E tests (Cypress/Playwright).

8. Roadmap (12 weeks, sprinted)
Week 0–1: Discovery, asset collection, legal checks for portrait & donations.

Week 2: Repo setup, CI, basic Next.js skeleton, wireframes.

Week 3–4: Home, About, Legacy (static content), auth setup.

Week 5–6: Engage features (Q&A, suggestion box), moderation dashboard.

Week 7: Gallery, Newsroom CMS, Event RSVP flows.

Week 8: Admin panel, content migration, team bios.

Week 9: QA, accessibility, performance tuning.

Week 10: Soft launch to core supporters.

Week 11: Public launch.

Week 12+: Iterate, scale moderation, A/B test CTAs.

9. Immediate next steps (developer checklist)
Add this plan.md to repo root.

Create Vercel project and link GitHub repo.

Add Neon DATABASE_URL to Vercel env when ready.

Collect and store assets in /public/assets (placeholders until final).

Assign roles and invite devs to repo.

Schedule legal review for portrait and donations.

10. Appendix: hero copy (ready for use)
H1: Legacy of Service, Future for Kwara — HOL 2027
Subhead: For decades Hakeem Lawal has stood for steady leadership and service. Now he brings that experience back to build a stronger, fairer Kwara for everyone.
Primary CTA: Join the movement
Secondary CTA: Explore the legacy

Admin Moderation SOP (Standard Operating Procedure)
SOP meaning: Standard Operating Procedure — a step‑by‑step set of instructions that describes how moderators should handle community content, flags, and escalations to ensure consistent, transparent moderation.

Purpose
Provide a clear, repeatable process for moderating the site’s community features (Q&A, suggestions, comments) to protect safety, maintain civility, and preserve the campaign’s credibility.

Roles & responsibilities
Moderator (Level 1): triage flags, apply warnings, remove spam.

Senior Moderator (Level 2): review appeals, reinstate content, escalate legal issues.

Admin (Campaign Lead / Legal): final decisions on defamation, legal takedowns, and policy changes.

Moderation workflow
Flagging

Any registered user can flag a post/comment for: spam, hate speech, harassment, false claims, personal attacks, threats, or other policy violations.

Flags create a ticket in the moderation dashboard.

Triage (within 24 hours)

Auto‑filter runs first (bad words, links to known spam). If auto‑flagged, moderator reviews within 12 hours.

Level 1 Moderator reviews flagged content and chooses one action: No action / Warning / Edit (minor) / Remove / Suspend user.

Document action in audit_logs with reason.

Actions & templates

Warning: private message to user explaining violation and next steps. Use standard template.

Edit: remove offending phrase; note edit publicly (e.g., “Edited for policy”).

Remove: hide content; send removal notice with reason and appeal instructions.

Suspend: temporary suspension (24–72 hours) for repeat or severe violations.

Ban: permanent ban for severe or repeated violations (requires Senior Moderator sign‑off).

Appeals

Users can appeal removals via a form. Senior Moderator reviews within 72 hours. Outcome recorded publicly in moderation log (summary).

Escalation to Legal

If content contains threats, defamation, or potential criminal activity, escalate immediately to Admin/Legal. Preserve all logs and export evidence.

Transparency & reporting

Publish a monthly moderation report: number of flags, removals, suspensions, appeals, and outcomes (aggregate counts only).

Keep a private audit trail for all moderation actions.

Moderation policy (short)
Be respectful. No hate speech, harassment, or threats.

No false claims. Posts that knowingly spread false information about other candidates or public safety will be removed.

No spam or solicitation. Commercial or unrelated political ads are prohibited.

No doxxing. Sharing private personal information is forbidden.

Constructive engagement encouraged. Upvoting, civil debate, and policy suggestions are welcome.

Moderation tools & signals
Auto filters: profanity list, URL blacklist, repeated posting detection.

Human review: required for any removal or suspension.

Verified badge: posts from verified users are flagged as such; still subject to policy.

Rate limits: prevent mass posting or bot activity.

Data retention & privacy
Keep moderation logs for 12 months (or per legal guidance).

Remove PII on user request unless required for legal reasons.

Exported evidence for legal escalation stored securely and shared only with legal counsel.

Onboarding & training
Provide a 2‑hour onboarding for new moderators covering: policy, dashboard use, escalation paths, and templates.

Quarterly refresher training and policy updates.

Templates (short examples)
Removal notice: “Your post was removed because it violated our community guidelines (reason). If you believe this was an error, you may appeal here: [appeal link].”

Warning message: “Please avoid [behavior]. Continued violations may result in suspension. See our community rules: [link].”

Meet the Team — 10 short bios (placeholders ready for your images and resume details)
Heading to use on site: Meet the Team (collective, inclusive)

Each profile below includes: Name, Role, 2‑line bio, Notable achievement, Contact / Volunteer link (placeholder).

Name: Alh. Hakeem Lawal  
Role: Campaign Lead / Candidate  
Bio: Decades of public service and repeated campaigns for Kwara governorship; focused on continuity, development, and inclusive leadership.
Notable achievement: Longstanding public profile with multiple strong primary finishes and broad party recognition.
Contact: /volunteer?member=hakeem

Name: Aisha Bello  
Role: Campaign Director  
Bio: Seasoned political organizer with experience running statewide outreach and volunteer mobilization.
Notable achievement: Led voter registration drives that increased turnout in key districts.
Contact: /volunteer?member=aisha

Name: Suleiman Adeyemi  
Role: Policy Lead (Economy & Infrastructure)  
Bio: Policy strategist with background in public finance and infrastructure planning.
Notable achievement: Authored municipal infrastructure plan adopted by local councils.
Contact: /volunteer?member=suleiman

Name: Fatima Yusuf  
Role: Community Liaison  
Bio: Deep roots in Kwara communities; coordinates town halls and grassroots listening tours.
Notable achievement: Organized community health outreach programs across three LGAs.
Contact: /volunteer?member=fatima

Name: Dr. Musa Oladipo  
Role: Health & Education Advisor  
Bio: Public health professional and education advocate focused on practical, scalable reforms.
Notable achievement: Implemented school health initiatives that improved attendance rates.
Contact: /volunteer?member=musa

Name: Hajara Mohammed  
Role: Communications Director  
Bio: Media strategist with experience in press relations, social media, and narrative building.
Notable achievement: Secured major media endorsements and organized high‑impact press events.
Contact: /volunteer?member=hajara

Name: Ibrahim Lawal  
Role: Operations & Logistics  
Bio: Logistics expert who ensures events, rallies, and field operations run smoothly.
Notable achievement: Managed logistics for multi‑city campaign tours with zero major incidents.
Contact: /volunteer?member=ibrahim

Name: Ngozi Eze  
Role: Digital & Tech Lead  
Bio: Full‑stack developer and digital strategist responsible for site, analytics, and digital outreach.
Notable achievement: Built voter engagement tools and optimized digital funnels for conversions.
Contact: /volunteer?member=ngozi

Name: Sadiq Olanrewaju  
Role: Volunteer Coordinator  
Bio: Community organizer who recruits, trains, and supports volunteers across constituencies.
Notable achievement: Scaled volunteer base from dozens to hundreds in under six months.
Contact: /volunteer?member=sadiq

Name: Maryam Abdullahi  
Role: Legal & Compliance Advisor  
Bio: Legal counsel specializing in election law, compliance, and risk mitigation.
Notable achievement: Guided previous campaigns through compliance audits and reporting.
Contact: /volunteer?member=maryam

How to use these bios
Replace placeholders with real photos and exact role titles.

Each profile should be two lines on the public page with a “Read more” modal for full CV/resume (if desired).

Use consistent photo aspect ratio and short captions for accessibility.

Final notes & next actions (from me as your Senior Architect)
I’ll prepare the plan.md file in markdown format ready to paste into your repo root.

I’ll draft the moderation dashboard UI spec and the admin role matrix next.

When you’re ready for content population, I will help search for public records and verifiable details about Hakeem’s public service to enrich the Timeline and Legacy pages (I’ll run web searches and provide citations at that stage).

You said you have images and resume — keep them ready in /public/assets and share any legal permissions for the father’s portrait.

When you confirm, I’ll produce the plan.md file content formatted for direct paste into your repo and then draft the moderation dashboard spec.

