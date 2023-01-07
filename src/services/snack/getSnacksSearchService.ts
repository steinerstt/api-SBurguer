import { snackRepository } from "../../repositories";
import { allSnacksResponseSchema } from "../../schemas/snackSchemas";

export const getSnacksSearchService = async (textSearch: string) => {
  const snackQueryBuilder = snackRepository.createQueryBuilder("s");

  textSearch = `%${textSearch}%`;

  const snacks = await snackQueryBuilder
    .innerJoinAndSelect("s.category", "c")
    .where("s.name ILIKE :textSearchName", {
      textSearchName: textSearch,
    })
    .orWhere("c.name ILIKE :textSearchCategory", {
      textSearchCategory: textSearch,
    })
    .getMany();

  return await allSnacksResponseSchema.validate(snacks, { stripUnknown: true });
};
