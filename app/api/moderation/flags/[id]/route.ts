import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const FlagStatusUpdateSchema = z.object({
  status: z.enum(['open', 'investigating', 'resolved']).optional(),
  moderatorNotes: z.string().optional(),
});

interface RouteParams {
  params: {
    id: string;
  };
}

// GET /api/moderation/flags/[id] - Get flag details
export async function GET(_request: NextRequest, { params }: RouteParams) {
  try {
    const id = parseInt(params.id);

    const flag = await prisma.moderationFlag.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, name: true, email: true } },
        post: {
          include: {
            user: { select: { id: true, name: true } },
          },
        },
        comment: {
          include: {
            user: { select: { id: true, name: true } },
          },
        },
      },
    });

    if (!flag) {
      return NextResponse.json({ error: 'Flag not found' }, { status: 404 });
    }

    return NextResponse.json(flag);
  } catch (error) {
    console.error(`GET /api/moderation/flags/${params.id} error:`, error);
    return NextResponse.json(
      { error: 'Failed to fetch flag' },
      { status: 500 }
    );
  }
}

// PUT /api/moderation/flags/[id] - Update flag status
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const id = parseInt(params.id);
    const body = await request.json();
    const updates = FlagStatusUpdateSchema.parse(body);

    const flag = await prisma.moderationFlag.update({
      where: { id },
      data: updates,
      include: {
        user: { select: { id: true, name: true } },
      },
    });

    return NextResponse.json(flag);
  } catch (error) {
    console.error(`PUT /api/moderation/flags/${params.id} error:`, error);
    if (error instanceof z.ZodError) {
        return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json(
      { error: 'Failed to update flag' },
      { status: 500 }
    );
  }
}

// DELETE /api/moderation/flags/[id] - Delete flag (unresolve)
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const id = parseInt(params.id);

    await prisma.moderationFlag.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`DELETE /api/moderation/flags/${params.id} error:`, error);
    return NextResponse.json(
      { error: 'Failed to delete flag' },
      { status: 500 }
    );
  }
}
