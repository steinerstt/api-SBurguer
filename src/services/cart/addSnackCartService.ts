import { AppError } from "../../error/AppError";
import {
  snackRepository,
  snacksCartRepository,
  userRepository,
} from "../../repositories";

export const addSnackCartService = async (
  idUserLogged: string,
  idSnack: string
) => {
  const snacksCartQueryBuilder = snacksCartRepository.createQueryBuilder("sc");

  const foundSnackCart = await snacksCartQueryBuilder
    .leftJoinAndSelect("sc.snack", "s")
    .leftJoinAndSelect("sc.user", "u")
    .where("s.id = :idSnack", { idSnack })
    .andWhere("u.id = :idUserLogged", { idUserLogged })
    .getOne();

  if (foundSnackCart) {
    throw new AppError(409, "There is already the some snack in the cart");
  }

  const snack = await snackRepository.findOne({
    where: { id: idSnack },
    relations: { category: true },
  });

  const user = await userRepository.findOneBy({ id: idUserLogged });

  const snackCart = snacksCartRepository.create({ user, snack });
  await snacksCartRepository.save(snackCart);

  return {};
};
