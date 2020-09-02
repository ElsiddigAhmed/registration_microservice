import { sign } from "jsonwebtoken";
import { ObjectID } from "typeorm";
import crypto from "crypto";

// access token function
export const generateAccessToke = (payload: ObjectID) => {
  // create token with the given payload
  return sign(payload.toString(), process.env.TOKEN_PRIVATE_KEY, {
    algorithm: "HS256",
  });
};
// hashing function
export const hash = (payload: string) => {
  // hash the payload
  return crypto
    .createHmac("sha256", process.env.HASH_PRIVATE_KEY)
    .update(payload)
    .digest("hex");
};
// compare function
export const compare = (password: string, hashed: string) => {
  // compare passwords if they are same, return true
  if (hash(password) === hashed) return true;
  // else return false
  return false;
};
