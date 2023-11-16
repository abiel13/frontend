import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LoginForm from "./loginForm";
import { Stack } from "@mui/material";
import Link from "next/link";
import { UserStore } from "@/store/store";
import { TUser } from "@/types/types";

export default function SignIn() {
 
  return (
    <Container component="main" maxWidth="xs">
      <Stack
        spacing={3}
        sx={{
          marginTop: 8,
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{ cursor: "pointer", color: "white" }}
        >
          Sign in To Alteflix
        </Typography>
        <LoginForm
          setUser={async (value) => {
            "use server";
            const setUser = UserStore.getState().setUser;
            setUser(value);
          }}
        />
        <Stack
          sx={{ width: "100%" }}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Link href={"/auth/recover"}>
            <p className="text-red-500">Forgot Password</p>
          </Link>
          <Link href={"/auth/signup"}>
            <p className="text-white">Dont have an account ? Register</p>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}
