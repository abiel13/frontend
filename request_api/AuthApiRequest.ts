import axios from "axios";
import { toast } from "react-toastify";

//login user
export const loginUserRequest = async (data: {
  email: string;
  password: string;
}) => {
  console.log(data);
  const raw: string = JSON.stringify(data);

  try {
    const response = await axios
      .post("https://api.alteflix.com/api/v1/accounts/login", raw, {
        headers: { "Content-Type": "application/json" },
      })
      .catch((error) => {
        console.log(error);
      });
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

//login with mobile
export const loginWithMobile = async (data: {
  msisdn: number;
  password: string;
}) => {
  const raw: string = JSON.stringify(data);
  console.log(raw);
  try {
    const response = await axios
      .post("https://api.alteflix.com/api/v1/accounts/login", raw, {
        headers: { "Content-Type": "application/json" },
      })
      .catch((err) => {
        toast.error(err?.response.data.errors[0], { theme: "colored" });
      });
    return response?.data;
  } catch (error: any) {
    toast.error(error);
  }
};

export const RegisterUser = async (data: any) => {
  const raw = JSON.stringify(data);

  try {
    const response = await axios.post("")
  } catch (error) {
    
  }

};

export const recoverPassword = () => {};

export const resetPassword = () => {};
