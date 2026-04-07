import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const RSVPSchema = z.object({
  eventId: z.number().int(),
  userId: z.number().int(),
});

// GET /api/events/rsvp - Get RSVPs for an event
export async function GET(request: NextRequest) {
  try {
    const eventId = request.nextUrl.searchParams.get('eventId');

    if (!eventId) {
      return NextResponse.json({ error: 'eventId is required' }, { status: 400 });
    }

    const rsvps = await prisma.eventRSVP.findMany({
      where: { event_id: parseInt(eventId) },
      include: {
        user: { select: { id: true, name: true, email: true } },
      },
    });

    return NextResponse.json(rsvps);
  } catch (error) {
    console.error('GET /api/events/rsvp error:', error);
    return NextResponse.json({ error: 'Failed to fetch RSVPs' }, { status: 500 });
  }
}

// POST /api/events/rsvp - Create RSVP
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventId, userId } = RSVPSchema.parse(body);

    // Check if user already RSVP'd
    const existing = await prisma.eventRSVP.findUnique({
      where: {
        user_id_event_id: {
          user_id: userId,
          event_id: eventId,
        },
      },
    });

    if (existing) {
      return NextResponse.json(
        { error: 'User already RSVP'd to this event' },
        { status: 409 }
      );
    }

    const rsvp = await prisma.eventRSVP.create({
      data: {
        user_id: userId,
        event_id: eventId,
      },
      include: {
        user: { select: { id: true, name: true } },
      },
    });

    // Update event RSVP count
    await prisma.event.update({
      where: { id: eventId },
      data: { rsvp_count: { increment: 1 } },
    });

    return NextResponse.json(rsvp, { status: 201 });
  } catch (error) {
    console.error('POST /api/events/rsvp error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to create RSVP' }, { status: 500 });
  }
}
