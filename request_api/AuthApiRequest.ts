//login user
import axios from "axios";
import { toast } from "react-toastify";

export const loginUserRequest = async (data: {
  email: string;
  password: string;
}) => {
  console.log(data);
  const raw: string = JSON.stringify(data);
  console.log(raw);

  try {
    const response = await axios
      .post("http://167.172.32.178:3001/api/v1/accounts/login", raw, {
        headers: { "Content-Type": "application/json" },
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(response);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginWithMobile = () => {};

export const RegisterUser = () => {};

export const recoverPassword = () => {};

export const resetPassword = () => {};
