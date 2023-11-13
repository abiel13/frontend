import React from "react";
import axios from "axios";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Stack } from "@mui/material";
import RecoveryForm from "./RecoveryForm";

export default function RecoverPassword() {
  return (
    <Container sx={{ marginTop: "3rem" }}>
      <Stack spacing={4} alignItems={"center"} sx={{ color: "white" }}>
        <Typography sx={{ fontSize: "1.4rem" }}>Forgot Password</Typography>
        <RecoveryForm />
      </Stack>
    </Container>
  );
}
