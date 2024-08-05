FROM oven/bun:latest

WORKDIR /app
COPY . .

RUN bun install --no-save

CMD ["bun", "start"]