import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

// POST body validation
const PostCreateSchema = z.object({
  title: z.string().min(1).max(255),
  body: z.string().min(1),
  userId: z.number().int(),
});

const PostUpdateSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  body: z.string().min(1).optional(),
  status: z.enum(['published', 'flagged', 'removed', 'draft']).optional(),
});

// GET /api/posts - List all posts with pagination
export async function GET(request: NextRequest) {
  try {
    const page = request.nextUrl.searchParams.get('page') || '1';
    const limit = request.nextUrl.searchParams.get('limit') || '10';
    const status = request.nextUrl.searchParams.get('status') || 'published';

    const pageNum = Math.max(1, parseInt(page));
    const limitNum = Math.min(100, Math.max(1, parseInt(limit)));
    const skip = (pageNum - 1) * limitNum;

    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where: status === 'all' ? {} : { status: status as any },
        include: {
          user: { select: { id: true, name: true, verified_badge: true } },
          _count: { select: { comments: true } },
        },
        orderBy: { created_at: 'desc' },
        skip,
        take: limitNum,
      }),
      prisma.post.count({
        where: status === 'all' ? {} : { status: status as any },
      }),
    ]);

    return NextResponse.json({
      data: posts,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    console.error('GET /api/posts error:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

// POST /api/posts - Create new post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, body: content, userId } = PostCreateSchema.parse(body);

    const post = await prisma.post.create({
      data: {
        title,
        body: content,
        user_id: userId,
      },
      include: {
        user: { select: { id: true, name: true } },
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('POST /api/posts error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
