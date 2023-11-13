"use client";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import FormField from "../components/FormFields";

interface signupI {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm = () => {
  const [registerData, setRegisterData] = useState<signupI>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setRegisterData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <Grid
        container
        sx={{
          bgcolor: "reds",
          justifyContent: "space-between",
          gap: "1rem",
          width: { md: "50%", xs: "100%" },
        }}
      >
        <Grid item xs={12} md={5}>
          <FormField
            name="firstname"
            title="first name"
            value=""
            change={() => {}}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <FormField
            name="lastname"
            title="last name"
            value=""
            change={() => {}}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <FormField
            name="email"
            title="email address"
            value=""
            change={() => {}}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <FormField
            name="password"
            title="password"
            value=""
            change={() => {}}
          />
        </Grid>
        <Grid item xs={12}>
          <FormField
            name="first name"
            title="confirm password"
            value=""
            change={() => {}}
          />
        </Grid>
      </Grid>
      <Box
        className="bg-red-600"
        sx={{
          width: { md: "50%", xs: "100%" },
          color: "white",
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "4px",
        }}
      >
        <Typography sx={{ fontSize: "1.3rem" }}>Sign Up</Typography>
      </Box>
    </>
  );
};

export default SignupForm;
