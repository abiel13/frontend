export type TAuthStore = {
  isLoggedIn: any;
  setLoggedIn: (value: boolean) => void;
  isUpdated: boolean;
  setisUpdated: () => void;
  user: any;
  setUser: (value: any) => void;
  initializeWindowEvent: () => void;
};
