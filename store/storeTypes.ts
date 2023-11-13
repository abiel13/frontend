export type TAuthStore = {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
};

export type TUserStore = {
  userToken: string;
  user: any;
};
