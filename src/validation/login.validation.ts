// importing joi (the validation library)
import Joi from "joi";
// import interface for login data object
import { LoginI } from "../helpers/interfaces";
// importing common validation
import { email, password } from "./common.validation";
// create validation schema in the validation middleware
export const loginSchema = (data: LoginI) => {
  // define schema in a variable
  const schema = Joi.object().keys({
    // define email object
    email,
    // define password object
    password,
  });
  // validate schema then return it to the middleware
  return schema.validate(data, { abortEarly: false, allowUnknown: true });
};
