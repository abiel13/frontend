"use client";
import { useEffect, useState } from "react";

export const isLoggedIn = !localStorage.getItem("AlteFlixUser");
export const user = JSON.parse(localStorage.getItem("AlteFlixUser")!);

console.log(isLoggedIn, user); 

