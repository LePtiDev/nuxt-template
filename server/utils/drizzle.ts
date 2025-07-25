import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '../database/schema';
export { sql, eq, and, or } from 'drizzle-orm';

export const tables = schema;

const client = postgres(process.env.NUXT_DATABASE_URL!);

export function useDrizzle() {
  return drizzle(client, { schema });
}
