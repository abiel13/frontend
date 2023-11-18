"use client";

export const isLoggedIn = !localStorage.getItem("AlteFlixUser");
export const user = JSON.parse(localStorage.getItem("AlteFlixUser")!);

console.log(isLoggedIn, user);
