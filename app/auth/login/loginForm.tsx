"use client";
import { Box, Stack } from "@mui/material";
import React, { FC, useState } from "react";
import FormField from "../components/FormFields";
import { useFormik } from "formik";
import CtaButton from "../components/CtaButton";
import { isValidPhoneNumber } from "react-phone-number-input";
import { loginMobile, loginSchema } from "../validations/validations";
import {
  loginUserRequest,
  loginWithMobile,
} from "@/request_api/AuthApiRequest";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {  authstore } from "@/store/store";


const LoginForm= () => {
  const [phone, setPhone] = useState("");
  const [isMobile, setisMobile] = useState<boolean>(false);
  const [phoneerror, setPhoneerror] = useState("");
  const router = useRouter();
  const setUser = authstore((state) => state.setUser);
  const setlogged = authstore((state) => state.setLoggedIn);

  let onSubmit = async (values: any) => {
    const { email, password } = values;
    console.log(phone.split("+")[1]);

    if (!isMobile) {
      try {
        const response = await loginUserRequest({ email, password });
        if (response?.data) {
          setUser(response?.data);
          setlogged(true);
          localStorage.setItem("AlteFlixUser", JSON.stringify(response?.data));
          toast.success("Login Successful", { theme: "colored" });
          router.push("/comics");
        }
      } catch (error) {
        console.error("an error occured");
      }
    } else {
      try {
        const parsenum = parseInt(phone.split("+")[1]);
        const response = await loginWithMobile({
          msisdn: parsenum,
          password,
        });
        if (response?.data) {
          console.log(response?.data);
          localStorage.setItem("AlteFlixUser", JSON.stringify(response?.data));
          setUser(response?.data);
          setlogged(true);
          toast.success("Login Successful", { theme: "colored" });
          router.push("/comics");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
      mobile: "",
    },
    onSubmit,
    validationSchema: isMobile ? loginMobile : loginSchema,
  });

  const validatePhone = () => {
    if (!isValidPhoneNumber(phone) && isMobile) {
      setPhoneerror("Invalid phone number for selected country");
      return;
    }
    setPhoneerror((prev) => (prev = ""));
  };

  return (
    <Stack spacing={4} sx={{ marginTop: "1rem", width: "100%" }}>
      <Box
        onClick={() => setisMobile((prev) => !prev)}
        alignSelf={"center"}
        className="bg-red-700"
        sx={{ padding: ".7rem 2rem", borderRadius: ".7rem", cursor: "pointer" }}
      >
        <p style={{ color: "white", fontSize: "1rem" }}>
          {isMobile ? "Sign in With Email" : "Sign in With Mobile"}
        </p>
      </Box>
      {isMobile ? (
        <>
          <FormField
            name="mobile"
            value={phone}
            title="Mobile Number"
            change={setPhone}
            type="number"
          />
          <p className="text-red-500">{phoneerror.length != 0 && phoneerror}</p>
        </>
      ) : (
        <>
          <FormField
            value={values.email}
            title="Email Address"
            name="email"
            type="email"
            change={handleChange}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </>
      )}
      <FormField
        value={values.password}
        title="password"
        name="password"
        change={handleChange}
        type="password"
      />
      {errors.password && <p className="text-red-500">{errors.password}</p>}

      <CtaButton title="Login" click={handleSubmit} />
    </Stack>
  );
};

export default LoginForm;
