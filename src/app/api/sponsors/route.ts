import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyAdmin } from '@/lib/auth';

export async function GET() {
  try {
    const sponsors = await prisma.sponsor.findMany({
      include: {
        event: { select: { title: true } }
      }
    });
    return NextResponse.json(sponsors);
  } catch (error) {
    console.error('Failed to fetch sponsors:', error);
    return NextResponse.json({ error: 'Failed to fetch sponsors' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Sponsor ID is required' }, { status: 400 });
    }

    await prisma.sponsor.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete sponsor:', error);
    return NextResponse.json({ error: 'Failed to delete sponsor' }, { status: 500 });
  }
}
