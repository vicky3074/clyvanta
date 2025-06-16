import { NextRequest, NextResponse } from 'next/server';
import { createLead } from '@/lib/database';
import { createLeadInFile } from '@/lib/fileStorage';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Prepare lead data
    const leadData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: body.company?.trim() || null,
      phone: body.phone?.trim() || null,
      message: message.trim(),
      service_interest: body.serviceInterest || null,
      budget_range: body.budgetRange || null,
      timeline: body.timeline || null,
    };

    // Try database first, fallback to file storage
    let newLead;
    try {
      newLead = await createLead(leadData);
    } catch {
      console.log('Database unavailable, using file storage fallback');
      newLead = await createLeadInFile(leadData);
    }

    // Log the successful submission (for monitoring)
    console.log('New lead created:', {
      id: newLead.id,
      email: newLead.email,
      service_interest: newLead.service_interest,
      created_at: newLead.created_at
    });

    // Return success response
    return NextResponse.json(
      { 
        message: 'Thank you! Your message has been received successfully.',
        leadId: newLead.id 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    // Return generic error message to client
    return NextResponse.json(
      { message: 'Sorry, there was an error submitting your message. Please try again.' },
      { status: 500 }
    );
  }
}

// Handle GET requests (optional - for health check)
export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint is working' },
    { status: 200 }
  );
}