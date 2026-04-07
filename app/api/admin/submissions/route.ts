import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

// Admin GET - fetch submissions
export async function GET(req: NextRequest) {
  try {
    // Check admin authentication (simplified - should use proper auth)
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const type = req.nextUrl.searchParams.get('type') || 'volunteers';
    const format = req.nextUrl.searchParams.get('format') || 'json';

    let result;
    if (type === 'volunteers') {
      result = await query('SELECT * FROM volunteers ORDER BY created_at DESC');
    } else if (type === 'ideas') {
      result = await query('SELECT * FROM ideas ORDER BY created_at DESC');
    } else {
      return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    }

    if (format === 'csv') {
      const csv = convertToCSV(result.rows, type);
      return new NextResponse(csv, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="${type}_${new Date().toISOString()}.csv"`,
        },
      });
    }

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}

function convertToCSV(data: any[], type: string): string {
  if (data.length === 0) return '';

  const headers = Object.keys(data[0]);
  const csv = [
    headers.join(','),
    ...data.map((row) =>
      headers
        .map((header) => {
          const value = row[header];
          if (typeof value === 'string' && value.includes(',')) {
            return `"${value}"`;
          }
          return value;
        })
        .join(',')
    ),
  ];

  return csv.join('\n');
}
