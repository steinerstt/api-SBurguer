import { Router } from "express";
import { loginController } from "../controllers/sessionControllers";
import { verifyBodyRequestMiddleware } from "../middlewares/verifyBodyRequestMiddleware";
import { loginSchema } from "../schemas/sessionSchemas";

export const sessionsRouter = Router();
sessionsRouter.post(
  "",
  verifyBodyRequestMiddleware(loginSchema),
  loginController
);
