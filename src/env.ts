interface Env {
  readonly TURSO_CONNECTION_URL: string;
  readonly TURSO_AUTH_TOKEN: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}
