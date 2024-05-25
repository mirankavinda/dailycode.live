import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
import config from '../config.json';

const sql = neon(config.databaseUrl);
export const db = drizzle(sql, { schema });