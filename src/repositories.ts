import { AppDataSource } from "./data-source";
import { Category, Snack, SnacksCart, User } from "./entities";

export const userRepository = AppDataSource.getRepository(User);
export const snackRepository = AppDataSource.getRepository(Snack);
export const snacksCartRepository = AppDataSource.getRepository(SnacksCart);
export const categoryRepository = AppDataSource.getRepository(Category);
