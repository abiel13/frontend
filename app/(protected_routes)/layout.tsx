import React from "react";
import { authstore } from "@/store/store";
import { Router } from "./router";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Router  />
      {children}
    </div>
  );
};

export default Layout;
