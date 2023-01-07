import { iSnack } from "./snackInterface";
import { iUserLessPassword } from "./userInterface";

export interface iLoginRequest {
  email: string;
  password: string;
}

export interface iLoginUserSnacksCartResponse extends iSnack {}

export interface iLoginUser extends iUserLessPassword {
  snacks_cart: iLoginUserSnacksCartResponse[];
}

export interface iLoginResponse {
  token: string;
  user: iLoginUser;
}
