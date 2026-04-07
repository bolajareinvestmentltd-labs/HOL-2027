import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { sendEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const { name, lga, question_suggestion } = await req.json();

    // Validate required fields
    if (!lga || !question_suggestion) {
      return NextResponse.json(
        { error: 'LGA and question/suggestion are required' },
        { status: 400 }
      );
    }

    // Insert into database
    const result = await query(
      `INSERT INTO ideas (name, lga, question_suggestion) 
       VALUES ($1, $2, $3) 
       RETURNING id`,
      [name || null, lga, question_suggestion]
    );

    const ideaId = result.rows[0].id;

    // Send email notification to admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL || '',
      subject: 'New Idea/Question Submission - Kwara Ti Wa Ni',
      html: `
        <h2>New Idea/Question Submission</h2>
        <p><strong>Name:</strong> ${name || 'Anonymous'}</p>
        <p><strong>LGA:</strong> ${lga}</p>
        <p><strong>Question/Suggestion:</strong> ${question_suggestion}</p>
        <p><strong>Submission ID:</strong> ${ideaId}</p>
      `,
    });

    return NextResponse.json(
      { success: true, id: ideaId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting idea form:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
