import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { options } from "./configs";
import * as Entities from "./entity";

export let Models: Entities.DBModels;

async function connect(app: any) {
  try {
    const initial = await createConnection(options);
    Models = {
      User: initial.getRepository(User),
    };

    app.listen(process.env.API_PORT_NUMBER);
    console.log("running...");

    return initial;
  } catch (err) {
    console.error(err);
  }
}
export default connect;
