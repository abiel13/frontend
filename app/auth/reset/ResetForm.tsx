"use client";
import { Stack } from "@mui/material";
import React from "react";
import FormField from "../components/FormFields";
import { useFormik } from "formik";

const ResetForm = () => {
  const onSubmit = () => {
    console.log("hello");
  };

  const {} = useFormik({
    initialValues: {
      pin: "",
      password: "",
      confirm_password: "",
    },
    onSubmit,
  });

  return (
    <Stack spacing={3}>
      <FormField
        value=""
        name="pin"
        title="Pin"
        type="text"
        change={() => {}}
      />
      <FormField
        value=""
        name="password"
        title="Password"
        type="password"
        change={() => {}}
      />
      <FormField
        value=""
        name=""
        title="Confirm Password"
        type="password"
        change={() => {}}
      />
    </Stack>
  );
};

export default ResetForm;
