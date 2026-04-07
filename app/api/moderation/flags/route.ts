import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const FlagCreateSchema = z.object({
  postId: z.number().int().optional(),
  commentId: z.number().int().optional(),
  userId: z.number().int(),
  reason: z.enum([
    'spam',
    'hate_speech',
    'harassment',
    'false_claims',
    'personal_attacks',
    'threats',
    'doxxing',
    'other',
  ]),
  description: z.string().optional(),
});

// GET /api/moderation/flags - List flags (for moderators)
export async function GET(request: NextRequest) {
  try {
    const status = request.nextUrl.searchParams.get('status') || 'open';
    const page = request.nextUrl.searchParams.get('page') || '1';
    const limit = request.nextUrl.searchParams.get('limit') || '20';

    const pageNum = Math.max(1, parseInt(page));
    const limitNum = Math.min(100, Math.max(1, parseInt(limit)));
    const skip = (pageNum - 1) * limitNum;

    const where = status === 'all' ? {} : { status: status as any };

    const [flags, total] = await Promise.all([
      prisma.moderationFlag.findMany({
        where,
        include: {
          user: { select: { id: true, name: true } },
          post: { select: { id: true, title: true } },
          comment: { select: { id: true, body: true } },
        },
        orderBy: { created_at: 'desc' },
        skip,
        take: limitNum,
      }),
      prisma.moderationFlag.count({ where }),
    ]);

    return NextResponse.json({
      data: flags,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    console.error('GET /api/moderation/flags error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch flags' },
      { status: 500 }
    );
  }
}

// POST /api/moderation/flags - Create flag
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { postId, commentId, userId, reason } = FlagCreateSchema.parse(body);

    if (!postId && !commentId) {
      return NextResponse.json(
        { error: 'Either postId or commentId is required' },
        { status: 400 }
      );
    }

    const flag = await prisma.moderationFlag.create({
      data: {
        post_id: postId || null,
        comment_id: commentId || null,
        user_id: userId,
        reason: reason as any,
      },
      include: {
        user: { select: { id: true, name: true } },
      },
    });

    return NextResponse.json(flag, { status: 201 });
  } catch (error) {
    console.error('POST /api/moderation/flags error:', error);
    if (error instanceof z.ZodError) {
        return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json(
      { error: 'Failed to create flag' },
      { status: 500 }
    );
  }
}
