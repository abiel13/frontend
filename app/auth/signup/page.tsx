// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { toast , ToastContainer } from "react-toastify";

// const SignUp = () => {
//   const [error, setError] = useState<{
//     email: string;
//     password: string;
//     first: string;
//     last: string;
//     confirmPassword: string;
//   }>({ email: "", password: "", first: "", last: "", confirmPassword: "" });
//   const [formData, setFormData] = useState<{
//     email: string;
//     password: string;
//     first: string;
//     last: string;
//     confirmPassword: string;
//   }>({ email: "", password: "", first: "", last: "", confirmPassword: "" });
//   const { email, password, first, last, confirmPassword } = formData;

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { value, name } = event.target;
//     setFormData((prev) => {
//       return { ...prev, [name]: value };
//     });
//   };

//   const validate = () => {
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
//     const passwordRegex =
//       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_])[a-zA-Z0-9\W\_]{8,15}$/;

//     if (!first) {
//       setError((prev) => {
//         return { ...prev, first: "name field cant be empty" };
//       });     
//     }

//     if (!last) {
//       setError((prev) => {
//         return { ...prev, last: "last name field  cant be empty" };
//       });
//     }

//     if (!emailRegex.test(email)) {
//       setError((prev) => {
//         return { ...prev, email: "invalid email type" };
//       });
//     }
//     if (!passwordRegex.test(password)) {
//       setError((prev) => {
//         return {
//           ...prev,
//           password:
//             "password should have upper & lower case, numbers, special characters and be at least 8 characters long",
//         };
//       });
//     }
//  else   if (confirmPassword != password) {
//       setError((prev) => {
//         return { ...prev, confirmPassword: "passwords dont match" };
//       });
//     }
    
//     else {
//       setError({
//         email: "",
//         password: "",
//         last: "",
//         first: "",
//         confirmPassword: "",
//       });
//       submitForm();
//     }
//   };

//   const router = useRouter();

//   const submitForm = async () => {
//     let data = JSON.stringify({
//       email: email,
//       password: password,
//       password_confirmation: confirmPassword,
//       firstname: first,
//       lastname: last,
//       newsletter_subscription: true,
//     });
// try{
//   toast('Registering User Please Wait' , {theme:'colored'})
//     await axios.post("https://api.alteflix.com/api/v1/accounts/new" , data , {headers:{"Content-Type":"application/json"}}).then(res => {
//       console.log(res?.data)
//       toast.success('Registation Sucessful', {theme:'colored'})
//       router.push('/auth/login')
//     }).catch((error) => {
//       toast.error(`Error: ${error.response.data.errors}` , {theme:'colored'})
//     })
   
// }
// catch(error:Error | any) {
//   console.log(error)
//   toast.error(`network disconnected` )
// }

  
//   };

  

//   return (
//     <div className="flex flex-col items-center w-full">
//       <div className="text-white w-full md:w-3/4  px-6 mt-8 flex flex-col gap-5">
//         <div className="flex flex-col gap-6 w-full ">
//           <h1 className="font-medium text-3xl  w-full text-left md:text-5xl md:text-center">
//          Get Started
//           </h1>
//           <p className='text-lg tracking-wider text-left md:text-center'>Register To Begin Your Membership</p>
//         </div>
//         <div className="flex  flex-col items-center gap-5">
//           <div className="w-full md:w-1/2">
//             <p className="text-lg tracking-wide mb-3">First Name</p>
//             <input
//               onChange={handleChange}
//               type="text"
//               name="first"
//               value={first}
//               className="py-3 text-gray-400 text-lg px-3 w-full rounded-lg"
//               placeholder="John"
//             />
//             {error && <p className="text-red-500">{error.first}</p>}
//           </div>
//           <div className="w-full md:w-1/2">
//             <p className="text-lg tracking-wide mb-3">Last Name</p>
//             <input
//               onChange={handleChange}
//               type="text"
//               name="last"
//               value={last}
//               className="py-3 text-gray-400 text-lg px-3 w-full rounded-lg"
//               placeholder="Doe"
//             />
//             {error && <p className="text-red-500">{error.last}</p>}
//           </div>
//           <div className="w-full md:w-1/2">
//             <p className="text-lg tracking-wide mb-3">Email address</p>
//             <input
//               onChange={handleChange}
//               type="text"
//               name="email"
//               value={email}
//               className="py-3 text-gray-400 text-lg px-3 w-full rounded-lg"
//               placeholder="test@gmail.com"
//             />
//             {error && <p className="text-red-500">{error.email}</p>}
//           </div>

//           <div className="w-full md:w-1/2">
//             <p className="text-lg tracking-wide mb-3">Password</p>
//             <input
//               onChange={handleChange}
//               type="password"
//               name="password"
//               value={password}
//               className="py-3 px-3 text-gray-400 text-lg w-full rounded-lg"
//               placeholder="xxxxxxxx"
//             />
//             {error && <p className="text-red-500">{error.password}</p>}
//           </div>
//           <div className="w-full md:w-1/2">
//             <p className="text-lg tracking-wide mb-3">Confirm Password</p>
//             <input
//               onChange={handleChange}
//               type="password"
//               name="confirmPassword"
//               value={confirmPassword}
//               className="py-3 px-3 text-gray-400 text-lg w-full rounded-lg"
//               placeholder="xxxxxxxx"
//             />
//             {error && <p className="text-red-500">{error.confirmPassword}</p>}
//           </div>
//         </div>

//         <div className="w-full flex flex-col mt-[1rem]  items-center gap-5">
//           <button
//             onClick={() => validate()}
//             className="w-full md:w-1/2 text-center bg-red-700 text-white text-lg tracking-wide py-3 rounded-lg "
//           >
//             Sign In
//           </button>
//           <div className="text-center flex flex-col gap-2 items-center">
//             <Link href={'/auth/recover'} className="mt-4 text-lg tracking-wide">Forgot Password</Link>
//             <Link href={"/auth/login"} className="mt-5 text-lg tracking-wide">
//               already have an account ?{" "}
//               <span className="text-red-600">Sign in</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }
// ;

// export default SignUp;





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

export default function SignUp() {
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
            Sign up 
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
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
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
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