"use client";
import { authstore } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export const Router = ({isLoggedin}:{isLoggedin:boolean}) => {
  const router = useRouter();

  useEffect(() => {
    if (isLoggedin) {
      router.push("/auth/login");
    }
  }, []);

  return <div></div>;
};
