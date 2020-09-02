import { Repository } from "typeorm";
import { User } from "./User";

export interface DBModels {
  User: Repository<User>;
}

export { User };
