import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/AppError";
import * as jwt from "jsonwebtoken";
import "dotenv/config";

export const verifyAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const headersToken = req.headers.authorization;

  if (!headersToken) {
    throw new AppError(401, "Missing header authorization");
  }

  const token = headersToken.split(" ")[1];

  return jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      console.error(err);
      throw new AppError(401, err.message);
    }

    req.user = {
      id: String(decoded.sub),
    };

    return next();
  });
};
