import React, { useState } from "react";
import Link from "next/link";
import { Container, Stack, Typography } from "@mui/material";
import SignupForm from "./SignupForm";

export default function SignUp() {
  return (
    <Container>
      <Stack alignItems={"center"} sx={{ marginTop: "1rem" }} spacing={3}>
        <Typography sx={{ color: "white", fontSize: "1.5rem" }}>
          Become A Member Of AlteFlix
        </Typography>
        <SignupForm />
        <Stack alignItems={"end"} sx={{ width: { md: "50%", xs: "100%" } }}>
          <Link href={"/auth/login"}>
            <p className="text-white text-lg">Already have an account? login</p>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}
