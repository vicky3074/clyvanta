import fs from 'fs/promises';
import path from 'path';
import { Lead, ContactFormData } from '@/types';

const LEADS_FILE = path.join(process.cwd(), 'data', 'leads.json');

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.dirname(LEADS_FILE);
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Read leads from file
export async function getLeadsFromFile(): Promise<Lead[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(LEADS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    // File doesn't exist or is empty, return empty array
    return [];
  }
}

// Write leads to file
async function saveLeadsToFile(leads: Lead[]) {
  await ensureDataDir();
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));
}

// Create a new lead
export async function createLeadInFile(formData: ContactFormData): Promise<Lead> {
  const leads = await getLeadsFromFile();
  
  const newLead: Lead = {
    id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    name: formData.name,
    email: formData.email.toLowerCase(),
    company: formData.company || null,
    phone: formData.phone || null,
    message: formData.message,
    service_interest: formData.serviceInterest || null,
    budget_range: formData.budgetRange || null,
    timeline: formData.timeline || null,
    status: 'new',
    source: 'website_contact_form',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  leads.unshift(newLead); // Add to beginning
  await saveLeadsToFile(leads);
  return newLead;
}

// Update lead status
export async function updateLeadStatusInFile(id: string, status: string): Promise<boolean> {
  const leads = await getLeadsFromFile();
  const leadIndex = leads.findIndex(lead => lead.id === id);
  
  if (leadIndex === -1) {
    return false;
  }

  leads[leadIndex].status = status;
  leads[leadIndex].updated_at = new Date().toISOString();
  await saveLeadsToFile(leads);
  return true;
}

// Get lead by ID
export async function getLeadByIdFromFile(id: string): Promise<Lead | null> {
  const leads = await getLeadsFromFile();
  return leads.find(lead => lead.id === id) || null;
}