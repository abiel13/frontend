// "use client";
// import { create } from "zustand";
// import { TAuthStore, TUserStore } from "./storeTypes";
// import data from "./storeutils";
// import { TUser } from "@/types/types";

// export const UserStore = create<TUserStore>((set) => ({
//   user: data.user,
//   setUser(value) {
//     set({ user: value });
//   },
// }));

// export const authstore = create<TAuthStore>((set) => ({
//   isLoggedIn: !data.isLoggedIn,
//   setLoggedIn(value) {
//     set({ isLoggedIn: value });
//   },
// }));

import { create } from "zustand";
import { TAuthStore } from "./storeTypes";

export const authstore = create<TAuthStore>((set) => ({
  isLoggedIn: false,
  user: null,
  initializeWindowEvent: () => {
    if (typeof window !== "undefined") {
      window.addEventListener("load", () => {
        set((state) => ({
          ...state,
          isLoggedIn: !localStorage.getItem("AlteFlixUser"),
          user: JSON.parse(localStorage.getItem("AlteFlixUser")!),
        }));
      });
    }
  },
  setLoggedIn: (value) => {
    set({ isLoggedIn: value });
  },
  setUser: (value) => {
    set({ user: value });
  },
}));
