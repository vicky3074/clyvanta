import { NextResponse } from 'next/server';
import { updateLeadStatus } from '@/lib/database';
import { updateLeadStatusInFile } from '@/lib/fileStorage';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const body = await request.json();
    const { status } = body;

    if (!status) {
      return NextResponse.json(
        { success: false, error: 'Status is required' },
        { status: 400 }
      );
    }

    // Try database first, fallback to file storage
    let result;
    try {
      result = await updateLeadStatus(resolvedParams.id, status);
    } catch {
      console.log('Database unavailable, using file storage fallback');
      result = await updateLeadStatusInFile(resolvedParams.id, status);
    }
    
    if (result) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: 'Lead not found' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Failed to update lead status:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update lead status' },
      { status: 500 }
    );
  }
}