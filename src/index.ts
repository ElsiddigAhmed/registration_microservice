import express from "express";
import allowedCors from "cors";
import routes from "./routes";
import createDatabaseConnection from "./database";
import { catchNotFound, errorHandler } from "./middleware/errors";
import multiLanguage, { middleware } from "./middleware/multi-language";
// create express instance
const app = express();
// use multi-language middleware
app.use(multiLanguage.handle(middleware));
// allow cross origins
app.use(allowedCors());
// use json
app.use(express.json());
// use url encoded
app.use(express.urlencoded({ extended: false }));
// use api services
app.use("/api", routes);
// use not found service middleware
app.use(catchNotFound);
// use error handler middleware
app.use(errorHandler);
// run the app after database connection is initialized
createDatabaseConnection(app);
