import { NextRequest, NextResponse } from 'next/server';

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

    // Prepare form data for CRM API
    const formData = new URLSearchParams();
    formData.append('token', 'clyvanta2025api');
    formData.append('name', name.trim());
    formData.append('email', email.trim().toLowerCase());
    formData.append('message', message.trim());
    
    // Add optional fields if provided
    if (body.company?.trim()) {
      formData.append('company', body.company.trim());
    }
    if (body.phone?.trim()) {
      formData.append('phone', body.phone.trim());
    }
    if (body.serviceInterest) {
      formData.append('serviceInterest', body.serviceInterest);
    }
    if (body.budgetRange) {
      formData.append('budgetRange', body.budgetRange);
    }
    if (body.timeline) {
      formData.append('timeline', body.timeline);
    }

    // Submit to CRM API
    const crmResponse = await fetch('https://crm.clyvanta.com/clyvanta-api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    if (!crmResponse.ok) {
      throw new Error(`CRM API error: ${crmResponse.status}`);
    }

    const crmResult = await crmResponse.json();
    
    if (!crmResult.success) {
      throw new Error(crmResult.error || 'CRM API returned error');
    }

    // Log the successful submission (for monitoring)
    console.log('Lead successfully submitted to CRM:', {
      leadId: crmResult.lead_id,
      email: email.trim().toLowerCase(),
      serviceInterest: body.serviceInterest,
      operation: crmResult.operation
    });

    // Return success response
    return NextResponse.json(
      { 
        message: 'Thank you! Your message has been received successfully.',
        leadId: crmResult.lead_id 
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