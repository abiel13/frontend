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
      .catch((err) => {
        toast.error(
          !err?.response.data.errors[0]
            ? err.message
            : err?.response.data.errors[0],
          { theme: "colored" }
        );
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
        toast.error(
          !err?.response.data.errors[0]
            ? err.message
            : err?.response.data.errors[0],
          { theme: "colored" }
        );
      });
    return response?.data;
  } catch (error: any) {
    toast.error(error);
  }
};

export const RegisterUser = async (data: any) => {
  const raw = JSON.stringify(data);

  try {
    const response = await axios
      .post("https://api.alteflix.com/api/v1/accounts/new", raw, {
        headers: { "Content-Type": "application/json" },
      })
      .catch((err) => {
        toast.error(
          !err?.response.data.errors[0]
            ? err.message
            : err?.response.data.errors[0],
          { theme: "colored" }
        );
      });
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const recoverPasswordRequest = async (data: { email: string }) => {
  const raw = JSON.stringify(data);

  try {
    const response = await axios
      .post("https://api.alteflix.com/api/v1/accounts/password_recovery", raw, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .catch((err) => {
        toast.error(
          !err?.response.data.errors[0]
            ? err.message
            : err?.response.data.errors[0],
          { theme: "colored" }
        );
      });
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

// reset password
export const resetPassword = async (data: {
  one_time_code: string;
  password: string;
  password_confirmation: string;
}) => {
  const raw = JSON.stringify(data);

  try {
    const response = await axios
      .post(
        "https://api.alteflix.com/api/v1/accounts/password_code_reset",
        raw,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .catch((err) => {
        toast.error(
          !err?.response.data.errors[0]
            ? err.message
            : err?.response.data.errors[0],
          { theme: "colored" }
        );
      });
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = async (token: string) => {
  try {
    const response = await axios
      .get("https://api.alteflix.com/api/v1/accounts/logout", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (
  data: {
    email?: string;
    firstname?: string;
    lastname?: string;
    newsletter_subscription?: boolean;
    password?: string;
  },
  token: string
) => {
  const raw = JSON.stringify(data);

  try {
    const response = await axios
      .post("https://api.alteflix.com/api/v1/accounts/update", raw, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        toast.error(
          !err?.response.data.errors[0]
            ? err.message
            : err?.response.data.errors[0],
          { theme: "colored" }
        );
      });
    return response?.data;
  } catch (error: any) {
    console.error("an error has occured", error.message);
  }
};
