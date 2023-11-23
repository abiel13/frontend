"use client";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import FormField from "../components/FormFields";
import { useFormik } from "formik";
import CtaButton from "../components/CtaButton";
import { signupSchema } from "../validations/validations";
import { RegisterUser } from "@/request_api/AuthApiRequest";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface signupI {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  password_confirmation: string;
  newsletter_subscription: boolean;
}

const SignupForm = () => {
  const router = useRouter();
  const onSubmit = async (value: signupI) => {
    const response = await RegisterUser(value);
    if (response) {
      toast.success("Registration Successful", { theme: "colored" });
      router.push("/auth/login");
    }
  };

  const { values, errors, handleChange, handleSubmit } = useFormik<signupI>({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password_confirmation: "",
      newsletter_subscription: true,
    },
    onSubmit,
    validationSchema: signupSchema,
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
            change={handleChange}
            type="text"
          />
          {errors.firstname && (
            <p className="text-red-500">{errors.firstname}</p>
          )}
        </Grid>
        <Grid item xs={12} md={5}>
          <FormField
            name="lastname"
            title="last name"
            value={values.lastname}
            type="text"
            change={handleChange}
          />
          {errors.lastname && <p className="text-red-500">{errors.lastname}</p>}
        </Grid>
        <Grid item xs={12} md={5}>
          <FormField
            name="email"
            title="email address"
            value={values.email}
            type="email"
            change={handleChange}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </Grid>
        <Grid item xs={12} md={5}>
          <FormField
            name="password"
            title="password"
            value={values.password}
            type="password"
            change={handleChange}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </Grid>
        <Grid item xs={12}>
          <FormField
            name="password_confirmation"
            title="confirm password"
            value={values.password_confirmation}
            change={handleChange}
            type="password"
          />
          {errors.password_confirmation && (
            <p className="text-red-500">{errors.password_confirmation}</p>
          )}
        </Grid>
        <CtaButton title="Register now" click={handleSubmit} />
      </Grid>
    </>
  );
};

export default SignupForm;
