"use client";
import { authstore } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export const Router = () => {
  const router = useRouter();
  const isloggedIn = authstore((state) => state.isLoggedIn);

  if (!isloggedIn) {
    router.push("/comics");
  }

  return <div></div>;
};
