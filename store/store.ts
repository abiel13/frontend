import { create } from "zustand";
import { TAuthStore } from "./storeTypes";
import { isLoggedIn } from "./storeutils";

export const UserStore = create((set) => ({}));


export const authstore = create<TAuthStore>((set) => ({
  isLoggedIn: !isLoggedIn,
  setLoggedIn() {},
}));
