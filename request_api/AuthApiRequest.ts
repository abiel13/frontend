//login user

import axios from "axios";
import { toast } from "react-toastify";

export const loginUserRequest = async ({
  mobile,
  signWithMobile,
  email,
  password,
}: {
  mobile: number;
  signWithMobile: boolean;
  email: string;
  password: string;
}) => {
  const number: number = parseInt(`234${mobile}`);

  const data: Record<string, any> = !signWithMobile
    ? { email }
    : { msisdn: number };
  data.password = password;

  console.log(data);
  const raw: string = JSON.stringify(data);
  console.log(raw);
  try {
    toast("Connecting to server...", { theme: "colored" });
    const response = await axios.post(
      "https://api.alteflix.com/api/v1/accounts/login",
      raw,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    toast.success("Login Sucessful", { theme: "colored" });
    localStorage.setItem("AlteFlixUser", JSON.stringify(response.data.data));
  } catch (errors: any) {
    toast.error(`Error: ${errors.response.data.errors}`, {
      theme: "colored",
    });
  }
};
