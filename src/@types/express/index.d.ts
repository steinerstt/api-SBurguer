import * as express from "express";
import { iUserExpressRequest } from "../../interfaces/userInterface";

declare global {
  namespace Express {
    interface Request {
      user: iUserExpressRequest;
    }
  }
}
