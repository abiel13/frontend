import { create } from "zustand";
import { TAuthStore } from "./storeTypes";

const UserStore = create((set) => ({
    
}));

const AuthStore = create<TAuthStore>((set) => ({
    isLoggedIn:false,
    setLoggedIn(){
        
    }
}))