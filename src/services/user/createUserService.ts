import { userRepository } from "../../repositories";
import { AppError } from "../../error/AppError";
import { iCreateUserRequest } from "../../interfaces/userInterface";
import { userLessPassword } from "../../schemas/userSchemas";

export const createUserService = async (dataUser: iCreateUserRequest) => {
  const existEmail = await userRepository.exist({
    where: { email: dataUser.email },
  });

  if (existEmail) {
    throw new AppError(409, "Email already registered");
  }

  const newUser = userRepository.create(dataUser);
  await userRepository.save(newUser);

  return await userLessPassword.validate(newUser, { stripUnknown: true });
};
