"use client";
import React, { useState } from "react";
import axios from "axios";
import {toast , ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from "next/navigation";

const ResetPage = () => {
  const [email, setEmail] = useState<string>("");
  const router = useRouter()
const [pin , setPin ] = useState<number | string>(0)

  const sendRecoveryEmail = async () => {
    let data = JSON.stringify({
        "email": email
      });

      try{
        toast('Connecting To Server' , {theme:'colored'})
    const response =   await   axios.post("https://api.alteflix.com/api/v1/accounts/password_recovery" , data , { headers : { "Content-Type":'application/json' }});
        toast.success(response.data.data);
        router.push('/auth/reset')
      }
      catch(error:any){
        console.log(error)
 toast.error(`Error : ${error.response.data.errors}`)
      }
  };

  return (
    <div className="mt-[1rem] px-3 min-h-[70vh] flex items-center justify-center flex-col">
      <h3 className="text-3xl  font-bold tracking-wider text-white ">
        Reset PassWord{" "}
      </h3>
      <div className=" mt-[1rem] flex flex-col py-4 gap-4 w-full items-center">
        <div className="w-3/4">
        <p className="text-white text-xl font-bold">Code</p>
        <input
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          type="number"
          placeholder="input your six digit pin"
          className="px-2 text-gray-400 text-lg py-5 rounded-xl"
        />
        </div>
        <div className="w-3/4">
        <p className="text-white text-xl font-bold">Password</p>
        <input
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          type="password"
          placeholder="input your six digit pin"
          className="px-2 text-gray-400 text-lg py-5 rounded-xl"
        />
        </div>
        <div className="w-3/4">
        <p className="text-white text-xl font-bold">Confirm Password</p>
        <input
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          type="password"
          placeholder="input your six digit pin"
          className="px-2 text-gray-400 text-lg py-5 rounded-xl"
        />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button onClick={() => sendRecoveryEmail()} className="bg-red-700 text-lg text-white px-3 py-4 mt-6 w-3/4  rounded-xl">
          Reset Pin
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPage;
