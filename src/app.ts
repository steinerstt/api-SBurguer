import "express-async-errors";
import express from "express";
import cors from "cors";
import { handleErrors } from "./error/AppError";
import {
  cartRouter,
  sessionsRouter,
  snacksRouter,
  usersRouter,
} from "./routes";

export const app = express();
app.use("*", cors());
app.use(express.json());

app.use(express());
app.use("/users", usersRouter);
app.use("/login", sessionsRouter);
app.use("/snacks", snacksRouter);
app.use("/cart", cartRouter);

app.use(handleErrors);
