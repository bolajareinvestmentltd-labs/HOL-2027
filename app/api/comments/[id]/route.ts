import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const CommentUpdateSchema = z.object({
  body: z.string().min(1).optional(),
});

interface RouteParams {
  params: {
    id: string;
  };
}

// GET /api/comments/[id] - Get single comment
export async function GET(_request: NextRequest, { params }: RouteParams) {
  try {
    const id = parseInt(params.id);

    const comment = await prisma.comment.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, name: true, verified_badge: true } },
      },
    });

    if (!comment) {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }

    return NextResponse.json(comment);
  } catch (error) {
    console.error(`GET /api/comments/${params.id} error:`, error);
    return NextResponse.json({ error: 'Failed to fetch comment' }, { status: 500 });
  }
}

// PUT /api/comments/[id] - Update comment
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const id = parseInt(params.id);
    const body = await request.json();
    const updates = CommentUpdateSchema.parse(body);

    const comment = await prisma.comment.update({
      where: { id },
      data: updates,
      include: {
        user: { select: { id: true, name: true } },
      },
    });

    return NextResponse.json(comment);
  } catch (error) {
    console.error(`PUT /api/comments/${params.id} error:`, error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to update comment' }, { status: 500 });
  }
}

// DELETE /api/comments/[id] - Delete comment
export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  try {
    const id = parseInt(params.id);

    await prisma.comment.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`DELETE /api/comments/${params.id} error:`, error);
    return NextResponse.json({ error: 'Failed to delete comment' }, { status: 500 });
  }
}
