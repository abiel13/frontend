"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast ,  } from "react-toastify";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '@/app/components/CopyRight'

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {


  const [error, setError] = useState<{
    email: string;
    password: string;
    first: string;
    last: string;
    confirmPassword: string;
  }>({ email: "", password: "", first: "", last: "", confirmPassword: "" });
  const [formData, setFormData] = useState<{
    email: string;
    password: string;
    first: string;
    last: string;
    confirmPassword: string;
  }>({ email: "", password: "", first: "", last: "", confirmPassword: "" });
  const { email, password, first, last, confirmPassword } = formData;
  const [checked , setChecked ] = useState<boolean>(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const validate = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_])[a-zA-Z0-9\W\_]{8,15}$/;

    if (!first) {
      setError((prev) => {
        return { ...prev, first: "name field cant be empty" };
      });     
    }

    if (!last) {
      setError((prev) => {
        return { ...prev, last: "last name field  cant be empty" };
      });
    }

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
 else   if (confirmPassword != password) {
      setError((prev) => {
        return { ...prev, confirmPassword: "passwords dont match" };
      });
    }
    
    else {
      setError({
        email: "",
        password: "",
        last: "",
        first: "",
        confirmPassword: "",
      });
      submitForm();
    }
  };

  const router = useRouter();

  const submitForm = async () => {
    let data = JSON.stringify({
      email: email,
      password: password,
      password_confirmation: confirmPassword,
      firstname: first,
      lastname: last,
      newsletter_subscription: checked,
    });
try{
  toast('Registering User Please Wait' , {theme:'colored'})
    await axios.post("https://api.alteflix.com/api/v1/accounts/new" , data , {headers:{"Content-Type":"application/json"}}).then(res => {
      
      toast.success('Registation Sucessful', {theme:'colored'})
      router.push('/auth/login')
    }).catch((error) => {
      toast.error(`Error: ${error.response.data.errors}` , {theme:'colored'})
    })
   
}
catch(error:Error | any) {
 
  toast.error(`network disconnected` )
}

  
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up 
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="first"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={first}
                  onChange={(e) => handleChange(e)}
                />
                {error.first && <Typography color='red' > {error.first} </Typography>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="last"
                  autoComplete="family-name"
                  value={last}
                  onChange={(e) => handleChange(e)}
                />
                {error.last && <Typography color='red' > {error.last} </Typography>}

              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => handleChange(e)}
                />
                {error.email && <Typography color='red' > {error.email} </Typography>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => handleChange(e)}
                  value={password}
                />
                {error.password && <Typography color='red' > {error.password} </Typography>}

              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="confirm password"
                  type="password"
                  id="confirm password"
                  autoComplete="new-password"
                  onChange={(e) => handleChange(e)}
                  value={confirmPassword}
                />
                {error.confirmPassword && <Typography color='red' > {error.confirmPassword} </Typography>}

              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox onChange={() => setChecked(prev => !prev)} color="primary" />}
                  label='Subscribe To Newsletters'
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => validate()}
            >
           Register Now
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/auth/login">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}