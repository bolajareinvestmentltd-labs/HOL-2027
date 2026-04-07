import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const EventUpdateSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  description: z.string().min(1).optional(),
  date: z.string().datetime().optional(),
  location: z.string().min(1).optional(),
});

interface RouteParams {
  params: {
    id: string;
  };
}

// GET /api/events/[id] - Get single event with RSVPs
export async function GET(_request: NextRequest, { params }: RouteParams) {
  try {
    const id = parseInt(params.id);

    const event = await prisma.event.findUnique({
      where: { id },
      include: {
        event_rsvps: {
          include: {
            user: { select: { id: true, name: true, email: true } },
          },
        },
      },
    });

    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    return NextResponse.json(event);
  } catch (error) {
    console.error(`GET /api/events/${params.id} error:`, error);
    return NextResponse.json({ error: 'Failed to fetch event' }, { status: 500 });
  }
}

// PUT /api/events/[id] - Update event
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const id = parseInt(params.id);
    const body = await request.json();
    const updates = EventUpdateSchema.parse(body);

    const data: any = { ...updates };
    if (updates.date) {
      data.date = new Date(updates.date);
    }

    const event = await prisma.event.update({
      where: { id },
      data,
    });

    return NextResponse.json(event);
  } catch (error) {
    console.error(`PUT /api/events/${params.id} error:`, error);
    if (error instanceof z.ZodError) {
        return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to update event' }, { status: 500 });
  }
}

// DELETE /api/events/[id] - Delete event
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const id = parseInt(params.id);

    await prisma.event.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`DELETE /api/events/${params.id} error:`, error);
    return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 });
  }
}
