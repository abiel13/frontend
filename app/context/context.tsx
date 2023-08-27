"use client ";
import { ReactNode, createContext, useContext, useState ,useEffect } from "react";

interface AppContextType {
  loggedIn: boolean | null;
  userData: any;
}

interface AppContextProviderI {
  children: ReactNode;
}

declare global{
    interface Window{
        localStorage:Storage;
    }
}

type userDataI = {
  email: string,
firstname: string
has_subscription: boolean,
lastname: string
newsletter_subscription:boolean
token:string,
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
    
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  const [userData, setUserData] = useState<userDataI | null>(null);

  useEffect(() => {
      const user = window?.localStorage.getItem("AlteFlixUser");
      if (user) {
          setUserData(JSON.parse(user));
          setLoggedIn(true);
      } else {
          setLoggedIn(false);
      }
  }, []);

  const contextValue: AppContextType = {
      loggedIn: loggedIn,
      userData: userData,
  };
  

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
