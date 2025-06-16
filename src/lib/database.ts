import { Pool } from 'pg';

// Database connection configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://clyvanta_user:clyvanta_pass@localhost:5432/clyvanta_db',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Test database connection
export async function testConnection() {
  try {
    const client = await pool.connect();
    await client.query('SELECT NOW()');
    client.release();
    console.log('✅ Database connection successful');
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    return false;
  }
}

// Execute a query
export async function query(text: string, params?: unknown[]) {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query', { text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// Lead management functions
export interface Lead {
  id?: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  service_interest?: string;
  budget_range?: string;
  timeline?: string;
  status?: string;
  source?: string;
  created_at?: Date;
  updated_at?: Date;
}

export async function createLead(lead: Omit<Lead, 'id' | 'created_at' | 'updated_at'>) {
  const {
    name,
    email,
    company,
    phone,
    message,
    service_interest,
    budget_range,
    timeline,
    status = 'new',
    source = 'website_contact_form'
  } = lead;

  const result = await query(
    `INSERT INTO leads (name, email, company, phone, message, service_interest, budget_range, timeline, status, source)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
     RETURNING *`,
    [name, email, company, phone, message, service_interest, budget_range, timeline, status, source]
  );

  return result.rows[0];
}

export async function getLeads(limit = 50, offset = 0) {
  const result = await query(
    'SELECT * FROM leads ORDER BY created_at DESC LIMIT $1 OFFSET $2',
    [limit, offset]
  );
  return result.rows;
}

export async function getLeadById(id: string) {
  const result = await query('SELECT * FROM leads WHERE id = $1', [id]);
  return result.rows[0];
}

export async function updateLeadStatus(id: string, status: string) {
  const result = await query(
    'UPDATE leads SET status = $1 WHERE id = $2 RETURNING *',
    [status, id]
  );
  return result.rows[0];
}

// Close the pool (useful for testing or graceful shutdown)
export async function closePool() {
  await pool.end();
}

export default pool;