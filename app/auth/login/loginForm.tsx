"use client";

import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { InputAdornment } from "@mui/material";
import { loginUserRequest } from "@/request_api/AuthApiRequest";
import Button from "@mui/material/Button";

const LoginForm = () => {
  const [signWithMobile, setSignWithMobile] = useState<boolean>(false);
  const [error, setError] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [formData, setFormData] = useState<{
    email: string;
    password: string;
    mobile: string;
  }>({ email: "", password: "", mobile: "" });
  const { email, password, mobile } = formData;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <Box sx={{ mt: 1 }}>
      {!signWithMobile ? (
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
       sx={{color:'white'}}
        />
      ) : (
        <TextField
          sx={{ marginTop: "1rem" }}
          label="Mobile Number"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Typography>+234</Typography>
              </InputAdornment>
            ),
          }}
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]",
          }}
          name="mobile"
          value={mobile}
          onChange={(e) => handleChange(e)}
          type="number"
        />
      )}

      {error.email && <Typography color={"red"}>{error.email}</Typography>}
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
      {error.password && <Typography color="red">{error.password}</Typography>}
      <Box
        sx={{
          mt: 3,
          mb: 2,
          bgcolor: "white",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: ".8rem 1rem",
          borderRadius: ".4rem",
          cursor: "pointer",
          fontSize: { md: "1.3rem", xs: "1.2rem" },
        }}
        onClick={() => {}}
      >
        Sign In
      </Box>
      <Grid container>
        <Grid item xs>
          <Link style={{ color: "white" }} href="/auth/recover">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link style={{ color: "white" }} href="/auth/signup">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
