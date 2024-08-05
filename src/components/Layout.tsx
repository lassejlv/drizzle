import type { Child } from "hono/jsx";

interface PageProps {
  children: Child;
  title: string;
}

export default function Layout({ children, title }: PageProps) {
  return (
    <html>
      <head>
        <title>{title}</title>
        <script src="//unpkg.com/alpinejs" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
