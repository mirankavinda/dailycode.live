import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const DailyTips=pgTable('codetips',{
    id:serial('id').primaryKey(),
    content:varchar('content').notNull(),
    username:varchar('username').notNull(),
    vote:integer('vote').default(0),
    createdAt:varchar('cretedAt').notNull(),
})