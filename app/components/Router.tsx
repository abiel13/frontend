"use client";
import React, { useEffect } from "react";
import { authstore } from "@/store/store";

import { useRouter } from "next/navigation";

const Router = () => {
  const execWindow = authstore((state) => state.initializeWindowEvent);
  const router = useRouter();
  const loggedin = authstore((state) => state.isLoggedIn);
  useEffect(() => {
    execWindow();
    if (!loggedin) {
      router.push("/auth/login");
    }
  }, []);

  return <></>;
};

export default Router;
