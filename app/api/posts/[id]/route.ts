import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const PostUpdateSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  body: z.string().min(1).optional(),
  status: z.enum(['published', 'flagged', 'removed', 'draft']).optional(),
});

interface RouteParams {
  params: {
    id: string;
  };
}

// GET /api/posts/[id] - Get single post with comments
export async function GET(_request: NextRequest, { params }: RouteParams) {
  try {
    const id = parseInt(params.id);

    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, name: true, verified_badge: true } },
        comments: {
          orderBy: { created_at: 'desc' },
          include: {
            user: { select: { id: true, name: true } },
          },
        },
      },
    });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error(`GET /api/posts/${params.id} error:`, error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}

// PUT /api/posts/[id] - Update post
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const id = parseInt(params.id);
    const body = await request.json();
    const updates = PostUpdateSchema.parse(body);

    const post = await prisma.post.update({
      where: { id },
      data: updates,
      include: {
        user: { select: { id: true, name: true } },
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error(`PUT /api/posts/${params.id} error:`, error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

// DELETE /api/posts/[id] - Delete post
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const id = parseInt(params.id);

    await prisma.post.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`DELETE /api/posts/${params.id} error:`, error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
