"use client";
import React, { useState } from "react";
import axios from "axios";
import {toast , ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from "next/navigation";

const ResetPage = () => {
  const router = useRouter()
const [pin , setPin ] = useState<string>('')
const [password , setPassword ] = useState<string>('')
const [confirmPassword , setConfirmPassword ] = useState<string>('')
const [error , setError ] = useState<{pin:string , password:string , confirmPassword: string}>({pin:'' , password:'' , confirmPassword: ''})

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
      return { ...prev , password:'password should include capital letters , numbers and special characters'}
    })
  }
  if(confirmPassword != password){
    setError((prev) => {
      return { ...prev , confirmPassword:'passwords do not match'}
    })
  }
  else if(pin.length ==6 && passwordRegex.test(password) && confirmPassword == password){
  console.log('sucess')
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
        console.log(response)
    toast.success('Reset Sucessfull' , {theme:'colored'});
    setPassword(''),
    setPin('')
setConfirmPassword('')
        router.push('/auth/login')
      }
      catch(error:any){
        console.log(error)
 toast.error(`Error : ${error.response.data.errors || error.message}`)
      }
  };

  return (
    <div className="mt-[1rem] px-3 min-h-[70vh] flex items-center justify-center flex-col">
      <h3 className="text-3xl  font-bold tracking-wider text-white ">
        Reset PassWord{" "}
      </h3>
      <div className=" mt-[1rem] flex flex-col py-4 gap-4 w-full items-center">
        <div className="flex flex-col w-3/4 gap-4">
        <p className="text-white text-xl font-bold">OTP</p>
        <input
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          type="number"
          placeholder="input your six digit pin"
          className="px-2 text-gray-400 text-lg w-full py-5 rounded-xl"
        />
         {error.pin && <p className="text-red-600 text-lg">{error.pin}</p>}
        </div>
        <div className="flex flex-col w-3/4 gap-4">
        <p className="text-white text-xl font-bold">Password</p>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="input your password"
          className="px-2 text-gray-400 w-full text-lg py-5 rounded-xl"
        />
        {error.password && <p className="text-red-600 text-lg">{error.password}</p>}
        </div>
        <div className="flex flex-col w-3/4 gap-4">
        <p className="text-white text-xl font-bold">Confirm Password</p>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="confirm password"
          className="px-2 text-gray-400 w-full text-lg py-5 rounded-xl"
        />
               {error.confirmPassword && <p className="text-red-600 text-lg">{error.confirmPassword}</p>}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button onClick={() => validateRequest()} className="bg-red-700 text-lg text-white px-3 py-4 mt-6 w-3/4  rounded-xl">
          Reset Pin
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPage;
