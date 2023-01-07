import { AppError } from "../../error/AppError";
import { snacksCartRepository } from "../../repositories";

export const rmvSnackCartService = async (
  idUserLogged: string,
  idSnack: string
) => {
  const snacksCartQueryBuilder = snacksCartRepository.createQueryBuilder("sc");

  const cart = await snacksCartQueryBuilder
    .innerJoinAndSelect("sc.snack", "s")
    .innerJoinAndSelect("sc.user", "u")
    .where("u.id = :idUser", { idUser: idUserLogged })
    .andWhere("s.id = :idSnack", { idSnack: idSnack })
    .getOne();

  if (!cart) {
    throw new AppError(404, "Snack not found in the cart");
  }

  await snacksCartQueryBuilder
    .delete()
    .where("id = :id", { id: cart.id })
    .execute();

  return {};
};
