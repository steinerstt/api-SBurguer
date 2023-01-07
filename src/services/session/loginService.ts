import { compare } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { userRepository } from "../../repositories";
import { AppError } from "../../error/AppError";
import { iLoginRequest } from "../../interfaces/sessionInterface";
import { loginResponseSchema } from "../../schemas/sessionSchemas";
import { Snack } from "../../entities";

export const loginService = async (dataLogin: iLoginRequest) => {
  const userQueryBuilder = userRepository.createQueryBuilder("u");

  const user = await userQueryBuilder
    .leftJoin("u.snacks_cart", "sc")
    .leftJoinAndMapMany("u.snacks_cart", Snack, "s", "s.id = sc.snackId")
    .leftJoinAndSelect("s.category", "c")
    .where("email = :email", { email: dataLogin.email })
    .getOne();

  console.log(user);

  if (!user) {
    throw new AppError(401, "Email or password invalid");
  }

  const matchPassword = await compare(dataLogin.password, user.password);

  if (!matchPassword) {
    throw new AppError(401, "Email or password invalid");
  }

  const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, {
    expiresIn: "48h",
    subject: user.id,
  });

  const loginResponse = await loginResponseSchema.validate(
    { token, user },
    {
      stripUnknown: true,
    }
  );

  return loginResponse;
};
