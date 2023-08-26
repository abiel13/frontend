"use client"
import React, { ReactNode } from "react";
import { AppContextProvider } from "./context/context";

interface ProviderI {
  children: ReactNode;
}

const Provider: React.FC<ProviderI> = ({ children }) => {
  return <AppContextProvider>{children}</AppContextProvider>;
};

export default Provider;
