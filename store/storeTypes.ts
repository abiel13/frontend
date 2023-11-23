import { TUser } from "@/types/types";

export type TAuthStore = {
  isLoggedIn: any;
  setLoggedIn: (value: boolean) => void;
  user: any;
  setUser: (value: any) => void;
  initializeWindowEvent: () => void;
};
