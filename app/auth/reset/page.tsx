'use client'
import  React , {useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Copyright from '@/app/components/CopyRight';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {toast } from 'react-toastify'
import { useRouter } from "next/navigation";
import axios from "axios";



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {

  const [pin , setPin ] = useState<string>('')
  const [password , setPassword ] = useState<string>('')
  const [confirmPassword , setConfirmPassword ] = useState<string>('')
  const [error , setError ] = useState<{pin:string , password:string , confirmPassword: string}>({pin:'' , password:'' , confirmPassword: ''})


  const router = useRouter()
const validateRequest = () => {
  const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_])[a-zA-Z0-9\W\_]{8,15}$/;
  if(pin?.length != 6 ){
    setError((prev) => {
      return { ...prev , pin:'make sure otp is equal to six characters'}
    })
  }
  if(!passwordRegex.test(password)){
    setError((prev) => {
      return { ...prev , password:'password should have upper & lower case, numbers, special characters and be at least 8 characters long'}
    })
  }
  if(confirmPassword != password){
    setError((prev) => {
      return { ...prev , confirmPassword:'passwords do not match'}
    })
  }
  else if(pin.length ==6 && passwordRegex.test(password) && confirmPassword == password){
  
setError({pin:'' , password:'' , confirmPassword:''})
 sendRecoveryRequest()
}

 
}


  const sendRecoveryRequest = async () => {
    let data = JSON.stringify({
        "one_time_code": pin,
        "password":password,
        "password_confirmation":password
      });

      try{
        toast('Connecting To Server' , {theme:'colored'})
    const response = await axios.post("https://api.alteflix.com/api/v1/accounts/password_code_reset" , data , { headers : { "Content-Type":'application/json' }});
       
    toast.success('Reset Sucessfull' , {theme:'colored'});
    setPassword(''),
    setPin('')
setConfirmPassword('')
        router.push('/auth/login')
      }
      catch(error:any){
        
 toast.error(`Error : ${error.response.data.errors || error.message}`)
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
        
          <Typography component="h1" variant="h5">
            Reset PassWord
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="pin"
              label="pin"
              type="numbers"
              id="pin"
              autoComplete="one time pin"
              value={pin}
              onChange={( e) => setPin(e.target.value)}
            />
            {error.pin && <Typography color='red'>{error.pin}</Typography>}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.password && <Typography color='red'>{error.password}</Typography>}

            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm PassWord"
              label="confirm PassWord"
              type="password"
              id="confirm password"
              autoComplete="current-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error.confirmPassword && <Typography color='red'>{error.confirmPassword}</Typography>}
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => validateRequest()}
            >
             Reset PassWord
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}