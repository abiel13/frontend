"use client";
import React, { useEffect } from "react";
import { authstore } from "@/store/store";

import { useRouter } from "next/navigation";

const Router = () => {
  const execWindow = authstore((state) => state.initializeWindowEvent);
  const router = useRouter();
  useEffect(() => {
    execWindow();
    const loggedin = authstore.getState().isLoggedIn;
    if (!loggedin) {
      router.push("/auth/login");
      console.log(loggedin);
    }

  }, []);

  return <></>;
};

export default Router;
