# Authentication Setup Guide

This project is configured with **Clerk** for authentication. Clerk provides a modern, secure authentication solution with built-in support for email, phone, and social login.

## Setup Instructions

### 1. Create Clerk Account
1. Go to [clerk.com](https://clerk.com)
2. Sign up for a free account
3. Create a new project for HOL-2027

### 2. Install Clerk Dependencies
```bash
npm install @clerk/nextjs svix
```

### 3. Configure Environment Variables
Add these variables to your `.env.local` file (get these from Clerk Dashboard):

```
# Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
CLERK_WEBHOOK_SECRET=your_webhook_secret
```

### 4. Set Up Webhooks in Clerk Dashboard
1. Go to Clerk Dashboard → Webhooks
2. Create a new webhook endpoint:
   - **URL**: `https://yourdomain.com/api/webhooks/clerk` (use Vercel URL during development)
   - **Events**: Select `user.created`, `user.updated`, `user.deleted`
   - Copy the signing secret to `.env.local` as `CLERK_WEBHOOK_SECRET`

### 5. Protected Routes
The following routes are automatically protected and require authentication:
- `/admin/*` - Admin dashboard
- `/api/moderation/*` - Moderation endpoints
- `/api/users/*` - User management endpoints

### 6. User Roles
Roles are managed in the database and can be set via the admin dashboard:
- `volunteer` - Regular user (default)
- `moderator` - Can moderate content
- `senior_moderator` - Can manage moderators
- `admin` - Full system access

### 7. Authentication Pages
- Sign Up: `/sign-up`
- Sign In: `/sign-in`

## Database Sync

When users sign up or update their profile in Clerk, webhooks automatically sync to the database:
- New users are created in the `User` table with `role='volunteer'`
- User updates (name, phone) are synced automatically
- Deleted users are removed from the database

## API Route Protection

To protect API routes, use the `auth()` helper from Clerk:

```typescript
import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { userId } = await auth();
  
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Your protected route logic here
}
```

## Alternative: NextAuth.js

If you prefer **NextAuth.js** instead of Clerk:

### Setup NextAuth.js
```bash
npm install next-auth prisma-adapter
```

See `NEXTAUTH_SETUP.md` for detailed configuration.

## Troubleshooting

### Webhook Not Triggering
- Check Clerk Dashboard for webhook logs
- Verify `CLERK_WEBHOOK_SECRET` is correctly set
- Ensure webhook URL is publicly accessible

### Users Not Syncing
- Check database connection in `.env`
- Verify Prisma migrations have been run
- Check server logs for Prisma errors

### Session Issues
- Clear browser cookies
- Check that `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` is public (OK to expose)
- Verify `CLERK_SECRET_KEY` is in `.env.local` (never public)
