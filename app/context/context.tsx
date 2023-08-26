"use client ";
import { ReactNode, createContext, useContext, useState ,useEffect } from "react";

interface AppContextType {
  loggedIn: boolean;
  userData: {};
}

interface AppContextProviderI {
  children: ReactNode;
}

declare global{
    interface Window{
        localStorage:Storage;
    }
}


const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("a context must be provided in the useAppContext provider");
  }

  return context;
};

export const AppContextProvider: React.FC<AppContextProviderI> = ({
  children,
}) => { 
    
    const [Login, setLogin] = useState<boolean>(false);
    const [userData , setUserData ] = useState<any>(null)

    useEffect(() => {
        const user = window?.localStorage.getItem("AlteFlixUser");
        if (user) {
          setUserData(JSON.parse(user));
          setLogin(true);
        }
      }, []);

  const contextValue: AppContextType = {
    loggedIn: Login,
    userData: userData,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
