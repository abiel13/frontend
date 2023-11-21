"use client";
import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import FormField from "../components/FormFields";
import CtaButton from "../components/CtaButton";
import { useFormik } from "formik";
import { recoverPasswordSchema } from "../validations/validations";
import { recoverPasswordRequest } from "@/request_api/AuthApiRequest";
import { toast } from "react-toastify";

const RecoveryForm: FC<{}> = () => {
  const router = useRouter();
  const onSubmit = async (values: { email: string }) => {
    try {
      const response = await recoverPasswordRequest(values);
      toast.success(response?.data, { theme: "colored" });
      router.push("/auth/reset");
    } catch (error) {
      console.error('an error occured')
    }
  };


  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit,
    validationSchema: recoverPasswordSchema,
  });

  
  return (
    <Stack spacing={3} sx={{ width: { md: "50%", xs: "100%" } }}>
      <FormField
        name="email"
        title="Email Address"
        type="email"
        value={values.email}
        change={handleChange}
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}
      <CtaButton click={handleSubmit} title="Get Recovery Email" />
    </Stack>
  );
};

export default RecoveryForm;
