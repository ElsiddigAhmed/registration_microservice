import path from "path";
import { ConnectionOptions } from "typeorm";

export const options: ConnectionOptions = {
  type: "mongodb",
  useUnifiedTopology: true,
  useNewUrlParser: true,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: true,
  entities: [path.join(__dirname, "../", "entity/", "**/*.ts")],
  migrations: [path.join(__dirname, "../", "migration/", "**/*.ts")],
  subscribers: [path.join(__dirname, "../", "subscriber/", "**/*.ts")],
};
