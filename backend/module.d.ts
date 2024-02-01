declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string;
    FRONT_END_URL: string;
    JWT_SECRET_KEY: string;
    JWT_REFRESH_TOKEN: string;
    REDIS_HOST: string;
    REDIS_PORT: number;
  }
}
