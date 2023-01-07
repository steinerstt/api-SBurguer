import { snackRepository } from "../../repositories";
import { snackResponseSchema } from "../../schemas/snackSchemas";

export const getSnackService = async (idSnack: string) => {
  const snack = await snackRepository.findOne({
    where: { id: idSnack },
    relations: { category: true },
  });

  return await snackResponseSchema.validate(snack, { stripUnknown: true });
};
