"use client";
import React, { useEffect } from "react";
import { authstore } from "@/store/store";

import { useRouter } from "next/navigation";

const Router = () => {
  const execWindow = authstore((state) => state.initializeWindowEvent);
  useEffect(() => {
    execWindow();
  }, []);

  const router = useRouter();
  const loggedin = authstore((state) => state.isLoggedIn);
  if (!loggedin) {
    router.push("/auth/login");
  }
  return <></>;
};

export default Router;