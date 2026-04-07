import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const UserUpdateSchema = z.object({
  name: z.string().min(1).optional(),
  phone: z.string().optional(),
  role: z.enum(['volunteer', 'moderator', 'senior_moderator', 'admin']).optional(),
  verified_badge: z.boolean().optional(),
});

interface RouteParams {
  params: {
    id: string;
  };
}

// GET /api/users/[id] - Get user profile
export async function GET(_request: NextRequest, { params }: RouteParams) {
  try {
    const id = parseInt(params.id);

    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        verified_badge: true,
        created_at: true,
        updated_at: true,
        posts: {
          select: { id: true, title: true, created_at: true },
          take: 5,
        },
        comments: {
          select: { id: true, body: true, created_at: true },
          take: 5,
        },
        _count: {
          select: {
            posts: true,
            comments: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error(`GET /api/users/${params.id} error:`, error);
    return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
  }
}

// PUT /api/users/[id] - Update user
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const id = parseInt(params.id);
    const body = await request.json();
    const updates = UserUpdateSchema.parse(body);

    const user = await prisma.user.update({
      where: { id },
      data: updates,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        verified_badge: true,
        updated_at: true,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error(`PUT /api/users/${params.id} error:`, error);
    if (error instanceof z.ZodError) {
        return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}

// DELETE /api/users/[id] - Delete user
export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  try {
    const id = parseInt(params.id);

    // Delete all related records (cascade by Prisma)
    await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`DELETE /api/users/${params.id} error:`, error);
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}
