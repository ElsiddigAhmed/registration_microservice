import { login, signup } from "../services";
// login controller
export const loginController = async (data: any) => {
  // run login service & await it & return the result
  return await login(data);
};

// signup controller
export const signupController = async (data: any) => {
  // run signup service & await it & return the result
  return await signup(data);
};
