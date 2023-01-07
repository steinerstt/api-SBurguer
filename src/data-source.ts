import "reflect-metadata";
import "dotenv/config";
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceConfig = (): DataSourceOptions => {
  const pathEntities: string = path.join(__dirname, "./entities/*.{js,ts}");
  const pathMigrations: string = path.join(__dirname, "./migrations/*.{js,ts}");
  const nodeEnv: string = process.env.NODE_ENV;

  if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [pathEntities],
      migrations: [pathMigrations],
    };
  }

  return {
    type: "postgres",
    host: process.env.PGHOST,
    port: parseInt(process.env.PORT),
    username: process.env.PGUSERNAME,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    synchronize: false,
    logging: true,
    entities: [path.join(__dirname, "./entities/**.{js,ts}")],
    migrations: [path.join(__dirname, "./migrations/**.{js,ts}")],
  };
};

export const AppDataSource = new DataSource(dataSourceConfig());
