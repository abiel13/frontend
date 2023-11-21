"use client";
import React from "react";
import { authstore } from "@/store/store";
import { isLoggedIn } from "@/store/storeutils";
import { useRouter } from "next/navigation";

const Router = () => {
  const router = useRouter();
  const loggedin = authstore((state) => state.isLoggedIn);
  if (!loggedin) {
    router.push("/auth/login");
  }
  return <></>;
};

export default Router;
