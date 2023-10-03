"use client";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAppContext } from "../../context/context";
import Copyright from "@/app/components/CopyRight";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {
  const [error, setError] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    { email: "", password: "" }
  );
  const { email, password } = formData;
  const router = useRouter();
  const { setloggedin, sUserData } = useAppContext();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const validate = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_])[a-zA-Z0-9\W\_]{8,87}$/;

    if (!emailRegex.test(email)) {
      setError((prev) => {
        return { ...prev, email: "invalid email type" };
      });
    }

    if (!passwordRegex.test(password)) {
      setError((prev) => {
        return {
          ...prev,
          password:
            "password should have upper & lower case, numbers, special characters and be at least 8 characters long",
        };
      });
    }
    if (emailRegex.test(email)) {
      setError((prev) => {
        return { ...prev, password: "" };
      });
    }
    if (passwordRegex.test(password)) {
      setError((prev) => {
        return { ...prev, password: "" };
      });
    }
    if (passwordRegex.test(password) && emailRegex.test(email)) {
      setError({ email: "", password: "" });
      submitForm();
    }
  };

  const submitForm = async () => {
    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    try {
      toast("Connecting to server...", { theme: "colored" });
      const response = await axios.post(
        "https://api.alteflix.com/api/v1/accounts/login",
        raw,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success("Login Sucessful", { theme: "colored" });
      localStorage.setItem("AlteFlixUser", JSON.stringify(response.data.data));
      setloggedin();
      sUserData(response.data.data);
      router.push("/comics");
    } catch (errors: any) {
      toast.error(`Error: ${errors.response.data.errors}`, {
        theme: "colored",
      });
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
          <Avatar sx={{ m: 1, bgcolor: "#3456aa" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
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
              onChange={(e) => handleChange(e)}
            />
            {error.email && (
              <Typography color={"red"}>{error.email}</Typography>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => handleChange(e)}
            />
            {error.password && (
              <Typography color="red">{error.password}</Typography>
            )}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                validate();
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/auth/recover">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link href="/auth/signup">
                  {"Don't have an account? Sign Up"}
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
