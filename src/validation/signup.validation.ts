// importing joi (the validation library)
import Joi from "joi";
// import interface for login data object
import { SignupI } from "../helpers/interfaces";
// importing common validation
import { email, password } from "./common.validation";

// create validation schema in the validation middleware
export const signUpSchema = (data: SignupI) => {
  // define schema in a variable
  const schema = Joi.object().keys({
    // define email object
    email,
    // define password object
    password,
    // define firstName object
    firstName: Joi.string().required().messages({
      "string.empty": "empty_firstName",
      "any.required": "required_firstName",
    }),
    // define lastName object
    lastName: Joi.string().required().messages({
      "string.empty": "empty_lastName",
      "any.required": "required_lastName",
    }),
    // define phone object
    phone: Joi.number().required().messages({
      "number.empty": "empty_phone",
      "any.required": "required_phone",
    }),
  });
  // validate schema then return it to the middleware
  return schema.validate(data, { abortEarly: false, allowUnknown: true });
};
