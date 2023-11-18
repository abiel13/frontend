import React from "react";
import { authstore } from "@/store/store";
import { Router } from "./router";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isloggs = authstore.getState().isLoggedIn;
  console.log(isloggs);
  return (
    <div>
      <Router isLoggedin={isloggs} />
      {children}
    </div>
  );
};

export default Layout;
