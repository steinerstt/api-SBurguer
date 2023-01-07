import * as yup from "yup";
import {
  iCreateUserRequest,
  iUserLessPassword,
} from "../interfaces/userInterface";

export const createUserSchema: yup.SchemaOf<iCreateUserRequest> = yup
  .object()
  .shape({
    name: yup.string().min(3).max(62).required(),
    email: yup.string().email().min(3).max(72).required(),
    password: yup.string().min(6).max(72).required(),
  });

export const userLessPassword: yup.SchemaOf<iUserLessPassword> = yup
  .object()
  .shape({
    name: yup.string(),
    email: yup.string(),
    id: yup.string(),
  });
