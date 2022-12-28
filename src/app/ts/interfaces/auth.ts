import {UserInterface} from "./user";

export interface LoginInterface {
  email: string;
  password: string;
}

export interface CredentialsInterface {
  user: UserInterface;
  token: string;
}
