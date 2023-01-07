import * as yup from "yup";
import { iSnack } from "../interfaces/snackInterface";

export const snackResponseSchema: yup.SchemaOf<iSnack> = yup.object().shape({
  img: yup.string(),
  category: yup.string().transform((category) => category.name),
  price: yup.string(),
  name: yup.string(),
  id: yup.string(),
});

export const allSnacksResponseSchema: yup.SchemaOf<iSnack[]> =
  yup.array(snackResponseSchema);
