import { Router } from "express";
import {
  getAllSnacksController,
  getSnackController,
  getSnacksSearchController,
} from "../controllers/snackControllers";
import { verifyAuthMiddleware } from "../middlewares/verifyAuthMiddleware";
import { verifyExistSnackMiddleware } from "../middlewares/verifyExistSnackMiddleware";

export const snacksRouter = Router();
snacksRouter.get("", verifyAuthMiddleware, getAllSnacksController);
snacksRouter.get(
  "/:id",
  verifyAuthMiddleware,
  verifyExistSnackMiddleware,
  getSnackController
);
snacksRouter.get(
  "/search/:textSearch",
  verifyAuthMiddleware,
  getSnacksSearchController
);
