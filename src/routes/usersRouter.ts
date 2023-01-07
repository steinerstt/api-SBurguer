import { Router } from "express";
import { createUserController } from "../controllers/userControllers";
import { verifyBodyRequestMiddleware } from "../middlewares/verifyBodyRequestMiddleware";
import { createUserSchema } from "../schemas/userSchemas";

export const usersRouter = Router();
usersRouter.post(
  "",
  verifyBodyRequestMiddleware(createUserSchema),
  createUserController
);
