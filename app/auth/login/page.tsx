import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";

import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Copyright from "@/app/components/CopyRight";
import LoginForm from "./loginForm";

// TODO remove, this demo shouldn't need to reset the theme.

export default function SignIn() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{ cursor: "pointer", color: "white" }}
        >
          Sign in
        </Typography>
        <LoginForm />
      </Box>
    </Container>
  );
}
