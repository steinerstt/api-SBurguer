import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/AppError";
import { snackRepository } from "../repositories";

export const verifyExistSnackMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idSnack: string = req.params.id;

  const existSnack: boolean = await snackRepository.exist({
    where: { id: idSnack },
  });

  if (!existSnack) {
    throw new AppError(404, "Snack not found");
  }

  return next();
};
