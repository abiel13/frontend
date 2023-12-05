"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "@/app/components/CopyRight";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function RecoverPassword() {
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  const sendRecoveryEmail = async () => {
    let data = JSON.stringify({
      email: email,
    });

    try {
      toast("Connecting To Server", { theme: "colored" });
      const response = await axios.post(
        "https://api.alteflix.com/api/v1/accounts/password_recovery",
        data,
        { headers: { "Content-Type": "application/json" } }
      );
      toast.success(response.data.data);
      router.push("/auth/reset");
    } catch (error: any) {
      console.log(error);
      toast.error(`Error : ${error.response.data.errors}`);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Forgot password 
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Button
              fullWidth
              variant="contained"
              onClick={() => sendRecoveryEmail()}
              sx={{ mt: 3, mb: 2 }}
            >
              Send Recovery Email
            </Button>
            <Grid container spacing={"1rem"}>
              <Grid item>
                <Link href="/auth/signup">
                  <Typography fontSize={".8rem"}>
                    {"Don't have an account? Sign Up"}
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/auth/login">
                  <Typography fontSize={".8rem"}>
                    {"Already have an account? Login"}
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
