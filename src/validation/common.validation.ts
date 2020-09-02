import Joi from "joi";

// export common joi entity validation for email
export const email = Joi.string().email().required().messages({
  "string.email": "invalid_email",
  "string.empty": "empty_email",
  "any.required": "required_email",
});
// export common joi entity validation for password
export const password = Joi.string().min(8).required().messages({
  "string.empty": "empty_password",
  "any.required": "required_password",
  "string.min": "minimum_password",
});
