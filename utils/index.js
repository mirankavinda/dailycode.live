import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon("postgresql://linebreak-db_owner:************@ep-young-cherry-a5z1i4lg.us-east-2.aws.neon.tech/linebreak-db?sslmode=require");
const db = drizzle(sql);