"use client";
import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import FormField from "../components/FormFields";
import Link from "next/link";
import { title } from "process";
import CtaButton from "../components/CtaButton";

interface loginI {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [LoginData, setLoginData] = useState<loginI>({
    email: "",
    password: "",
  });
  const [isMobile, setisMobile] = useState<boolean>(false);

  const handleChange = (Event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = Event.target;
    setLoginData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const validate = () => {};

  const login = async () => {};

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
        <FormField
          name="mobile"
          value=""
          title="Mobile Number"
          change={handleChange}
        />
      ) : (
        <FormField
          change={handleChange}
          value={LoginData.email}
          title="Email Address"
          name="email"
        />
      )}

      <FormField
        change={handleChange}
        value={LoginData.password}
        title="password"
        name="password"
      />
      <CtaButton title="Login" />
    </Stack>
  );
};

export default LoginForm;
