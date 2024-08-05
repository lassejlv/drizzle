import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { PostTable } from "./post";

export const UserTable = sqliteTable("users", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  createdAt: text("created_at")
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`(current_timestamp)`)
    .$onUpdate(() => sql`(current_timestamp)`),
});

export const usersRelations = relations(UserTable, ({ many }) => ({
  posts: many(PostTable),
}));

export type InsertUser = typeof UserTable.$inferInsert;
export type SelectUser = typeof UserTable.$inferSelect;
