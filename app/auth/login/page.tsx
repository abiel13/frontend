"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [error, setError] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    { email: "", password: "" }
  );
  const [reqError, setreqError] = useState("");
  const { email, password } = formData;
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const validate = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_])[a-zA-Z0-9\W\_]{8,15}$/;

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
            "password must contain a capital letter with special character and be more than 8 characters",
        };
      });
    }
   
     else {
      console.log("arrived at the function");
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
      // Handle successful response
      console.log(response);
      toast.success("Login Sucessful", { theme: "colored" });
      router.push('/comics')
    } catch (errors: any) {
      toast.error(`Error: ${errors.response.data.errors}`, {
        theme: "colored",
      });
    }
  };

  return (
    <div className="text-white w-full px-6 mt-8 flex flex-col gap-8">
      <div className="flex flex-col gap-8 w-full ">
        <h1 className="font-medium text-3xl md:text-5xl md:text-center">
          Welcome Back
        </h1>
        <p className="text-lg leading-8 w-3/4 md:text-center md:text-xl md:w-full">
          Sign in to pick up from where you stoped
        </p>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="flex  w-full md:w-1/3 flex-col gap-10">
          <div>
            <p className="text-lg tracking-wide mb-3">Email address</p>
            <input
              onChange={handleChange}
              type="text"
              name="email"
              value={email}
              className="py-3 text-gray-400 text-lg px-3 w-full rounded-lg"
              placeholder="test@gmail.com"
            />
            {error && <p className="text-red-500">{error.email}</p>}
          </div>

          <div>
            <p className="text-lg tracking-wide mb-3">Password</p>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={password}
              className="py-3 px-3 text-gray-400 text-lg w-full rounded-lg"
              placeholder="xxxxxxxx"
            />
            {error && <p className="text-red-500">{error.password}</p>}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col mt-[4rem] items-center  gap-5">
        <button
          onClick={() => validate()}
          className="w-full md:w-1/3 text-center bg-red-700 text-white text-lg tracking-wide py-3 rounded-lg "
        >
          Sign In
        </button>
        <div className="text-center flex flex-col gap-2">
          <Link href="/auth/recover" className="mt-4 text-lg tracking-wide">
            Forgot Password
          </Link>
          <Link href={"/auth/signup"} className="mt-5 text-lg tracking-wide">
            want to join Alteflix? <span className="text-red-600">Sign Up</span>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
