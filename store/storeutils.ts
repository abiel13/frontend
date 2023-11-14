import { LocalStorage } from "node-localstorage";

global.localStorage = new LocalStorage("./scratch");

export const isLoggedIn = !localStorage.getItem("AlteFlixUser");
export const user = localStorage.getItem("AlteFlixUser");
