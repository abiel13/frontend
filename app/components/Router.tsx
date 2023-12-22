"use client";
import React, { useEffect } from "react";
import { authstore } from "@/store/store";

import { redirect } from "next/navigation";

const Router = () => {
  const execWindow = authstore((state) => state.initializeWindowEvent);

  useEffect(() => {
    execWindow();
    const loggedin = authstore.getState().isLoggedIn;
    if (!loggedin) {
      redirect("/auth/login");
    }
  });

  return <></>;
};

export default Router;
