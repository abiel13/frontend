"use client";
import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import FormField from "../components/FormFields";
import { useFormik } from "formik";
import CtaButton from "../components/CtaButton";
import { isValidPhoneNumber } from "react-phone-number-input";
import { loginMobile, loginSchema } from "../validations/validations";
import { loginUserRequest } from "@/request_api/AuthApiRequest";
import { UserStore } from "@/store/store";

const LoginForm = ({setUser}: any) => {
  const [phone, setPhone] = useState("");
  const [isMobile, setisMobile] = useState<boolean>(false);
  const [phoneerror, setPhoneerror] = useState("");

  let onSubmit = async (values: any) => {
    const { email, password } = values;
    console.log(values);
    console.log(phone);

    if (!isMobile) {
      try {
        const response = await loginUserRequest({ email, password });
        console.log(response?.data);
        setUser(response?.data);
      } catch (error) {
        console.error("an error occured");
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
