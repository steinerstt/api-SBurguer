import * as yup from "yup";
import {
  iLoginRequest,
  iLoginUserSnacksCartResponse,
  iLoginUser,
  iLoginResponse,
} from "../interfaces/sessionInterface";
import { userLessPassword } from "./userSchemas";

export const loginSchema: yup.SchemaOf<iLoginRequest> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const loginUserSnacksCartSchema: yup.SchemaOf<iLoginUserSnacksCartResponse> =
  yup.object().shape({
    category: yup.string().transform((category) => category.name),
    img: yup.string(),
    price: yup.string(),
    name: yup.string(),
    id: yup.string(),
  });

export const loginUserSchema: yup.SchemaOf<iLoginUser> =
  userLessPassword.concat(
    yup.object().shape({
      snacks_cart: yup.array().of(loginUserSnacksCartSchema),
    })
  );

export const loginResponseSchema: yup.SchemaOf<iLoginResponse> = yup
  .object()
  .shape({
    user: loginUserSchema,
    token: yup.string(),
  });
