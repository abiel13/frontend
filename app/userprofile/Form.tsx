"use client";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useAppContext } from "../context/context";
import React from "react";

const Form = () => {
  const { userData } = useAppContext();

  return (
    <Box component="form" sx={{ mt: 3, padding: "0 1rem " }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="first"
            required
            fullWidth
            id="firstName"
            label={`first name : ${userData?.firstname == undefined ? ' ' : userData?.firstname}`}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="lastName"
            label={`last name : ${userData?.lastname == undefined ? '' : userData?.lastname}`}
            name="last"
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label={`Email Address : ${userData?.email == undefined ? ' ' : userData?.email}`}
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="xxxxxxxx"
            type="password"
            id="password"
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12}>
          <Checkbox
            checked={userData?.newsletter_subscription}
            color="primary"
          />
          Subscribed To Newsletters
        </Grid>
      </Grid>
      <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Update Profile
      </Button>
    </Box>
  );
};

export default Form;
