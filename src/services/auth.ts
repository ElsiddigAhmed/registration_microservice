/* eslint-disable no-async-promise-executor */
import { Models } from "../database";
import * as auth from "../helpers/open-authentication";
import { LoginI } from "../helpers/interfaces";
import { User } from "../database/entity";

export const login = async (data: LoginI) => {
  return new Promise(async (resolve, reject) => {
    // retrieve user from the database
    const user = await Models.User.findOne({ email: data.email });
    // create response shape incase of incorrect credentials
    const incorrect = { message: "incorrect_user_or_pass", status: 401 };
    // if no user found send 401
    if (!user) return reject(incorrect);
    // else grab password from user info
    const { password } = user;
    // compare the password given by user with database one
    if (!auth.compare(data.password, password)) return resolve(incorrect);
    // if password is correct then generate token
    const token = auth.generateAccessToke(user.id);
    // resolve with the token
    resolve({ token });
  });
};

// signup service
export const signup = async (data: User) => {
  return new Promise(async (resolve, reject) => {
    // grab email and phone from user
    const { email, phone } = data;
    // check if user's email is exist in the database
    const byEmail = await Models.User.findOne({ email });
    // check if user's phone is exist in the database
    const byPhone = await Models.User.findOne({ phone });
    // if user is exist then reject with conflict
    if (byEmail || byPhone)
      return reject({ message: "user_already_exist", status: 409 });
    // else hash the password
    data.password = auth.hash(data.password);
    // write user to the database
    const result = await Models.User.create(data);
    // save the result
    const saved = await Models.User.save(result);
    // delete password from response data
    delete saved.password;
    // response with created user
    resolve({ user: saved, status: 201 });
  });
};
