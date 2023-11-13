"use client";
import { Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import FormField from "../components/FormFields";
import CtaButton from "../components/CtaButton";

const RecoveryForm:FC<{}> = () => {
  return (
    <Stack spacing={3} sx={{ width: { md: "50%", xs: "100%" } }}>
      <FormField name="" title="Email Address" value="" change={() => {}} />
      <CtaButton
        click={() => console.log("hw far")}
        title="Get Recovery Email"
      />
    </Stack>
  );
};

export default RecoveryForm;
