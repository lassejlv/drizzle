import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as user from "./schemas/user";
import * as post from "./schemas/post";

const client = createClient({
  url: process.env.TURSO_CONNECTION_URL,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export const db = drizzle(client, { schema: { ...user, ...post } });
