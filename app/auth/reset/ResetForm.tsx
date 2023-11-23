"use client";
import { Stack } from "@mui/material";
import React from "react";
import FormField from "../components/FormFields";
import { useFormik } from "formik";
import CtaButton from "../components/CtaButton";
import { resetPasswordSchema } from "../validations/validations";
import { resetPassword } from "@/request_api/AuthApiRequest";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ResetForm = () => {
  const router = useRouter();
  const onSubmit = async (values: any) => {
    try {
      const response = await resetPassword(values);
      if (response) {
        toast.success("Password Reset Successful", { theme: "colored" });
        router.push("/auth/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      one_time_code: "",
      password: "",
      password_confirmation: "",
    },
    onSubmit,
    validationSchema: resetPasswordSchema,
  });

  return (
    <Stack
      spacing={3}
      sx={{ width: { md: "50%", xs: "100%" }, padding: "1rem" }}
    >
      <FormField
        value={values.one_time_code}
        name="one_time_code"
        title="Pin"
        type="number"
        change={handleChange}
      />
      {errors.one_time_code && (
        <p className="text-red-500">{errors.one_time_code}</p>
      )}
      <FormField
        value={values.password}
        name="password"
        title="New Password"
        type="password"
        change={handleChange}
      />
      {errors.password && <p className="text-red-500">{errors.password}</p>}

      <FormField
        value={values.password_confirmation}
        name="password_confirmation"
        title="Confirm Password"
        type="password"
        change={handleChange}
      />
      {errors.password_confirmation && (
        <p className="text-red-500">{errors.password_confirmation}</p>
      )}

      <CtaButton title="Reset Password" click={handleSubmit} />
    </Stack>
  );
};

export default ResetForm;
