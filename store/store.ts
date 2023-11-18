// "use server";
import { create } from "zustand";
import { TAuthStore, TUserStore } from "./storeTypes";
import { isLoggedIn, user } from "./storeutils";
import { TUser } from "@/types/types";

export const UserStore = create<TUserStore>((set) => ({
  user: user,
  setUser(value) {
    console.log(user, isLoggedIn);
    set({ user: value });
  },
}));

export const authstore = create<TAuthStore>((set) => ({
  isLoggedIn: !isLoggedIn,
  setLoggedIn(value) {
    set({ isLoggedIn: value });
  },
}));
