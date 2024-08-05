import { Hono } from "hono/quick";
import Layout from "./components/Layout";
import { Home } from "./pages/Home";

const app = new Hono();

app.get("/", (c) => {
  return c.render(<Home />);
});

const server = Bun.serve({
  port: parseInt(process.env.PORT) || 3001,
  fetch: app.fetch,
});

console.log(`Server running at http://localhost:${server.port}`);
