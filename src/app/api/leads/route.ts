import { NextResponse } from 'next/server';
import { getLeads } from '@/lib/database';
import { getLeadsFromFile } from '@/lib/fileStorage';

export async function GET() {
  try {
    // Try database first, fallback to file storage
    let leads;
    try {
      leads = await getLeads();
    } catch {
      console.log('Database unavailable, using file storage fallback');
      leads = await getLeadsFromFile();
    }
    
    return NextResponse.json({ 
      success: true, 
      leads: leads || [] 
    });
  } catch (error) {
    console.error('Failed to fetch leads:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch leads',
        leads: [] 
      },
      { status: 500 }
    );
  }
}