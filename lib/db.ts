import { Pool, QueryResult } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function query<T = any>(
  text: string,
  params?: (string | number | boolean | null)[]
): Promise<QueryResult<Record<string, any>>> {
  return pool.query(text, params);
}

export async function getConnection() {
  return pool.connect();
}

export default pool;
