"use client";
import React, { useState } from "react";
import axios from "axios";
import {toast , ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from "next/navigation";

const RecoverPage = () => {
  const [email, setEmail] = useState<string>("");
  const router = useRouter()

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
        Recover PassWord{" "}
      </h3>
      <p className="text-white text-lg">input email to get started</p>
      <div className=" mt-[1rem] flex flex-col py-4 gap-4 w-3/4">
        <p className="text-white text-xl font-bold">Email</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="input your email"
          className="px-2 text-gray-400 text-lg py-5 rounded-xl"
        />
      </div>
      <div className="w-full flex justify-center">
        <button onClick={() => sendRecoveryEmail()} className="bg-red-700 text-lg text-white px-3 py-4 mt-6 w-3/4  rounded-xl">
          Recover
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RecoverPage;
