import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";
import { AppError } from "../error/AppError";

export const verifyBodyRequestMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const bodyValidated = await schema
      .validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      })
      .catch((err) => {
        throw new AppError(400, err.errors);
      });

    req.body = bodyValidated;

    return next();
  };
