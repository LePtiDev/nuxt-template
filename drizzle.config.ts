import type { Config } from 'drizzle-kit';
import { config } from 'dotenv';

config();
export default {
  schema: './server/database/schema.ts',
  out: './server/database/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NUXT_DATABASE_URL!,
  },
} satisfies Config;
