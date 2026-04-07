import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { sendEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const { full_name, lga, phone_number, email_address, support_type } = await req.json();

    // Validate input
    if (!full_name || !lga || !phone_number || !email_address || !support_type) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Insert into database
    const result = await query(
      `INSERT INTO volunteers (full_name, lga, phone_number, email_address, support_type) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING id`,
      [full_name, lga, phone_number, email_address, support_type]
    );

    const volunteerId = result.rows[0].id;

    // Send email notification to admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL || '',
      subject: 'New Volunteer Submission - Kwara Ti Wa Ni',
      html: `
        <h2>New Volunteer Submission</h2>
        <p><strong>Name:</strong> ${full_name}</p>
        <p><strong>LGA:</strong> ${lga}</p>
        <p><strong>Phone:</strong> ${phone_number}</p>
        <p><strong>Email:</strong> ${email_address}</p>
        <p><strong>Support Type:</strong> ${support_type}</p>
        <p><strong>Submission ID:</strong> ${volunteerId}</p>
      `,
    });

    return NextResponse.json(
      { success: true, id: volunteerId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting volunteer form:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
