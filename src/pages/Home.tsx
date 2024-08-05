import Layout from "../components/Layout";
import { db } from "../db";

export async function Home() {
  const users = await db.query.UserTable.findMany({ with: { posts: true } });

  return (
    <Layout title="Home">
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id} x-data="{ isOpen: false, loading: false }">
          <h2>{user.name}</h2>
          <p>{user.email}</p>

          <button
            x-on:click="loading = true; await $fetch(`/api/users/${user.id}`, { method: 'DELETE' });"
            x-bind:disabled="loading"
            x-text="loading ? 'Deleting...' : 'Delete'"
          ></button>
          <button x-on:click="isOpen = !isOpen">Show posts</button>

          <div x-show="isOpen">
            <h3>Posts</h3>
            {user.posts.length === 0 && <p>No posts</p>}
            <ul>
              {user.posts.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </Layout>
  );
}
