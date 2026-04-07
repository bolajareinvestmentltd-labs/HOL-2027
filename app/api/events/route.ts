import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const EventCreateSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).optional(),
  date: z.string().datetime(),
  location: z.string().min(1),
});

const EventUpdateSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  description: z.string().min(1).optional(),
  date: z.string().datetime().optional(),
  location: z.string().min(1).optional(),
});

// GET /api/events - List all events
export async function GET(request: NextRequest) {
  try {
    const page = request.nextUrl.searchParams.get('page') || '1';
    const limit = request.nextUrl.searchParams.get('limit') || '10';
    const upcoming = request.nextUrl.searchParams.get('upcoming') === 'true';

    const pageNum = Math.max(1, parseInt(page));
    const limitNum = Math.min(100, Math.max(1, parseInt(limit)));
    const skip = (pageNum - 1) * limitNum;

    const where = upcoming ? { date: { gte: new Date() } } : {};

    const [events, total] = await Promise.all([
      prisma.event.findMany({
        where,
        include: {
          _count: { select: { event_rsvps: true } },
        },
        orderBy: { date: 'asc' },
        skip,
        take: limitNum,
      }),
      prisma.event.count({ where }),
    ]);

    return NextResponse.json({
      data: events,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    console.error('GET /api/events error:', error);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}

// POST /api/events - Create new event
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, date, location } = EventCreateSchema.parse(body);

    const event = await prisma.event.create({
      data: {
        title,
        description: description || null,
        date: new Date(date),
        location,
      },
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error('POST /api/events error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}
