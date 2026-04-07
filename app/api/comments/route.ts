import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const CommentCreateSchema = z.object({
  body: z.string().min(1),
  postId: z.number().int(),
  userId: z.number().int(),
});

const CommentUpdateSchema = z.object({
  body: z.string().min(1).optional(),
});

// GET /api/comments - List comments for a post
export async function GET(request: NextRequest) {
  try {
    const postId = request.nextUrl.searchParams.get('postId');
    const page = request.nextUrl.searchParams.get('page') || '1';
    const limit = request.nextUrl.searchParams.get('limit') || '20';

    if (!postId) {
      return NextResponse.json({ error: 'postId is required' }, { status: 400 });
    }

    const pageNum = Math.max(1, parseInt(page));
    const limitNum = Math.min(100, Math.max(1, parseInt(limit)));
    const skip = (pageNum - 1) * limitNum;

    const [comments, total] = await Promise.all([
      prisma.comment.findMany({
        where: { post_id: parseInt(postId) },
        include: {
          user: { select: { id: true, name: true, verified_badge: true } },
        },
        orderBy: { created_at: 'asc' },
        skip,
        take: limitNum,
      }),
      prisma.comment.count({
        where: { post_id: parseInt(postId) },
      }),
    ]);

    return NextResponse.json({
      data: comments,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    console.error('GET /api/comments error:', error);
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 });
  }
}

// POST /api/comments - Create new comment
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { body: content, postId, userId } = CommentCreateSchema.parse(body);

    const comment = await prisma.comment.create({
      data: {
        body: content,
        post_id: postId,
        user_id: userId,
      },
      include: {
        user: { select: { id: true, name: true } },
      },
    });

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    console.error('POST /api/comments error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to create comment' }, { status: 500 });
  }
}
