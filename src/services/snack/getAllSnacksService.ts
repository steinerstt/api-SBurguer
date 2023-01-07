import { snackRepository } from "../../repositories";
import { allSnacksResponseSchema } from "../../schemas/snackSchemas";

export const getAllSnacksService = async () => {
  const allSnacks = await snackRepository.find({
    relations: { category: true },
  });
  return await allSnacksResponseSchema.validate(allSnacks, {
    stripUnknown: true,
  });
};
