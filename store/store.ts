import { create } from "zustand";
import { TAuthStore } from "./storeTypes";

export const authstore = create<TAuthStore>((set) => ({
  isLoggedIn: null,
  user: null,
  isUpdated: false,
  initializeWindowEvent: () => {
    if (typeof window !== "undefined") {
      set((state) => ({
        ...state,
        isLoggedIn: !!localStorage.getItem("AlteFlixUser"),
        user: JSON.parse(localStorage.getItem("AlteFlixUser")!),
      }));
    }
    console.log(authstore.getState().isLoggedIn);
  },
  setLoggedIn: (value) => {
    set({ isLoggedIn: value });
  },
  setUser: (value) => {
    set({ user: value });
  },
  setisUpdated: () => {
    set((state) => ({ isUpdated: !state.isUpdated }));
  },
}));
