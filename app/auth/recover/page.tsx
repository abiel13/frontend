// "use client";
// import React, { useState } from "react";
// import axios from "axios";
// import {toast , ToastContainer} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// const RecoverPage = () => {
//   const [email, setEmail] = useState<string>("");
//   const router = useRouter()

//   const sendRecoveryEmail = async () => {
//     let data = JSON.stringify({
//         "email": email
//       });

//       try{
//         toast('Connecting To Server' , {theme:'colored'})
//     const response =   await   axios.post("https://api.alteflix.com/api/v1/accounts/password_recovery" , data , { headers : { "Content-Type":'application/json' }});
//         toast.success(response.data.data);
//         router.push('/auth/reset')
//       }
//       catch(error:any){
//         console.log(error)
//  toast.error(`Error : ${error.response.data.errors}`)
//       }
//   };

//   return (
//     <div className="mt-[1rem] w-full md:w-1/2 mx-auto px-3 min-h-[70vh] flex items-center justify-center flex-col">
//       <h3 className="text-3xl  font-bold tracking-wider text-white ">
//         Recover PassWord{" "}
//       </h3>
//       <p className="text-white text-lg">input email to get started</p>
//       <div className=" mt-[1rem] flex flex-col py-4 gap-4 w-3/4">
//         <p className="text-white text-xl font-bold">Email</p>
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           placeholder="input your email"
//           className="px-2 text-gray-400 text-lg py-5 rounded-xl"
//         />
//       </div>
//       <div className="w-full flex flex-col gap-8 items-center">
//         <button onClick={() => sendRecoveryEmail()} className="bg-red-700 text-lg text-white px-3 py-4 mt-6 w-3/4  rounded-xl">
//           Recover
//         </button>
//         <div className="flex flex-col gap-3 items-center">
//           <Link className="text-white font-normal text-normal" href='/auth/signup'>Dont have an Account ? Register Now</Link>
//           <Link className="text-white font-normal text-normal" href='/auth/login'>Already Have an Account ? Sign in</Link>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default RecoverPage;













'use client'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function RecoverPassword() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
             variant='contained'
              sx={{ mt: 3, mb: 2 , }}
            >
            
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
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