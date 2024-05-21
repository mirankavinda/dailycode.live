import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const sql = neon("postgresql://linebreak-db_owner:dCjQ4XtAbeH9@ep-young-cherry-a5z1i4lg.us-east-2.aws.neon.tech/linebreak-db?sslmode=require");
export const db = drizzle(sql,{schema});