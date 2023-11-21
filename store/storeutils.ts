"use client";
// import { useEffect, useState } from "react";

export const isLoggedIn =
  typeof window !== undefined && !localStorage.getItem("AlteFlixUser");
export const user =
  typeof window !== undefined &&
  JSON.parse(localStorage.getItem("AlteFlixUser")!);

console.log(isLoggedIn, user);
