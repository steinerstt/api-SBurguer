import { Router } from "express";
import {
  addSnackCartController,
  rmvSnackCartController,
} from "../controllers/cartControllers";
import { verifyAuthMiddleware } from "../middlewares/verifyAuthMiddleware";
import { verifyExistSnackMiddleware } from "../middlewares/verifyExistSnackMiddleware";

export const cartRouter = Router();
cartRouter.patch(
  "/:id",
  verifyAuthMiddleware,
  verifyExistSnackMiddleware,
  addSnackCartController
);
cartRouter.delete(
  "/:id",
  verifyAuthMiddleware,
  verifyExistSnackMiddleware,
  rmvSnackCartController
);
