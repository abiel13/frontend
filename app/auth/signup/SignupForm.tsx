"use client";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import FormField from "../components/FormFields";
import { useFormik } from "formik";
import CtaButton from "../components/CtaButton";

interface signupI {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  newsletter_subscription: boolean;
}

const SignupForm = () => {
  const onSubmit = () => {};

  const { values, errors, handleChange, handleSubmit } = useFormik<signupI>({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      newsletter_subscription: true,
    },
    onSubmit,
  });



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
            value={values.firstname}
            change={() => {}}
            type="text"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <FormField
            name="lastname"
            title="last name"
            value={values.lastname}
            type="text"
            change={() => {}}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <FormField
            name="email"
            title="email address"
            value={values.email}
            type="email"
            change={() => {}}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <FormField
            name="password"
            title="password"
            value={values.password}
            type="password"
            change={() => {}}
          />
        </Grid>
        <Grid item xs={12}>
          <FormField
            name="confirm_password"
            title="confirm password"
            value={values.confirmPassword}
            change={() => {}}
            type="password"
          />
        </Grid>
      </Grid>
   <CtaButton title="Register now"/>
    </>
  );
};

export default SignupForm;
