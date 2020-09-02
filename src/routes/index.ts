import { Adapter } from "../helpers";
import * as C from "../controllers";
import express, { Router } from "express";
import { ValidationMiddleware } from "../middleware/validation";
import { loginSchema } from "../validation/login.validation";
import { signUpSchema } from "../validation/signup.validation";
// logger middleware
const router: Router = express();

// login service
router.post(
  "/login",
  ValidationMiddleware(loginSchema),
  Adapter(C.loginController)
);

// signup service
router.post(
  "/signup",
  ValidationMiddleware(signUpSchema),
  Adapter(C.signupController)
);

// exporting router
export default router;
