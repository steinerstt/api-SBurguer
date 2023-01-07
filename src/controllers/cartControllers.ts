import { Request, Response } from "express";
import { addSnackCartService } from "../services/cart/addSnackCartService";
import { rmvSnackCartService } from "../services/cart/rmvSnackCartService";

export const addSnackCartController = async (req: Request, res: Response) => {
  const idUserLogged: string = req.user.id;
  const idSnack: string = req.params.id;
  await addSnackCartService(idUserLogged, idSnack);

  return res.status(204).json({});
};

export const rmvSnackCartController = async (req: Request, res: Response) => {
  const idUserLogged: string = req.user.id;
  const idSnack: string = req.params.id;
  await rmvSnackCartService(idUserLogged, idSnack);

  return res.status(204).json({});
};
