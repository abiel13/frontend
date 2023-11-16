import React from "react";
import { Stack, Typography } from "@mui/material";
import ResetForm from "./ResetForm";

export default function ResetPasswordPage() {
  return (
    <Stack spacing={3} alignItems="center">
      <Typography sx={{ fontSize: "1.4rem" }} color="white">
        Reset Password
      </Typography>
      <ResetForm />
    </Stack>
  );
}
