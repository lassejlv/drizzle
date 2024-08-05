import { eq } from "drizzle-orm";
import { db } from "./db";
import { PostTable } from "./db/schemas/post";
import { UserTable } from "./db/schemas/user";

// const user = await db.query.UserTable.findFirst({
//   where: eq(UserTable.id, 1),
//   with: { posts: true },
// });

// console.log(user);

const post = await db.query.PostTable.findFirst({
  where: eq(PostTable.id, 1),
  with: { author: true },
});

console.log(post);
