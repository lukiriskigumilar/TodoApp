import express from "express";

import reqBodyValidator from "../../middleware/reqBodyValidator.js";
import { registerSchema } from "../../validators/userValidation.js";
import userController from "./user.controller.js";

const userRouter = express.Router();

userRouter.post('/register',reqBodyValidator(registerSchema), userController.userRegisterController)

export default userRouter
