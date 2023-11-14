import { TUser } from "@/types/types";

export type TAuthStore = {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
};

export type TUserStore = {
  // userToken: string;
  user: any;
  setUser: (value: TUser) => void;
};
