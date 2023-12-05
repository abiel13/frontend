"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css'


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
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
    validate();
  };

  const validate = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_])[a-zA-Z0-9\W\_]{8,87}$/;

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
    if (last) {
      setError((prev) => {
        return { ...prev, last: "" };
      });
    }

    if (!emailRegex.test(email)) {
      setError((prev) => {
        return { ...prev, email: "invalid email type" };
      });
    }
    if (emailRegex.test(email)) {
      setError((prev) => {
        return { ...prev, email: "" };
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
    } else if (confirmPassword != password) {
      setError((prev) => {
        return { ...prev, confirmPassword: "passwords dont match" };
      });
    } else {
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
    try {
      toast("Registering User Please Wait", { theme: "colored" });
      await axios
        .post("https://api.alteflix.com/api/v1/accounts/new", data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          toast.success("Registation Sucessful", { theme: "colored" });
          router.push("/auth/login");
        })
        .catch((error) => {
          toast.error(`Error: ${error.response.data.errors}`, {
            theme: "colored",
          });
        });
    } catch (error: Error | any) {
      toast.error(`network disconnected`);
    }
  };

  
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="text-white w-full md:w-3/4  px-6 mt-8 flex flex-col gap-5">
        <div className="flex flex-col gap-6 w-full ">
          <h1 className="font-medium text-3xl  w-full text-left md:text-5xl md:text-center">
            Get Started
          </h1>
          <p className="text-lg tracking-wider text-left md:text-center">
            Register To Begin Your Membership
          </p>
        </div>
        <div className="flex  flex-col items-center gap-5">
          <div className="w-full md:w-1/2">
            <p className="text-lg tracking-wide mb-3">First Name</p>
            <input
              onChange={handleChange}
              type="text"
              name="first"
              value={first}
              className="py-3 text-gray-400 text-lg px-3 w-full rounded-lg"
              placeholder="John"
            />
            {error && <p className="text-red-500">{error.first}</p>}
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg tracking-wide mb-3">Last Name</p>
            <input
              onChange={handleChange}
              type="text"
              name="last"
              value={last}
              className="py-3 text-gray-400 text-lg px-3 w-full rounded-lg"
              placeholder="Doe"
            />
            {error && <p className="text-red-500">{error.last}</p>}
          </div>
          <div className="w-full md:w-1/2">
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
                {error.email && (
                  <Typography color="red"> {error.email} </Typography>
                )}
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

        <div className="w-full flex flex-col mt-[1rem]  items-center gap-5">
          <button
            onClick={() => validate()}
            className="w-full md:w-1/2 text-center bg-red-700 text-white text-lg tracking-wide py-3 rounded-lg "
          >
            Sign In
          </button>
          <div className="text-center flex flex-col gap-2 items-center">
            <Link href={"/auth/recover"} className="mt-4 text-lg tracking-wide">
              Forgot Password
            </Link>
            <Link href={"/auth/login"} className="mt-5 text-lg tracking-wide">
              already have an account ?{" "}
              <span className="text-red-600">Sign in</span>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default SignUp;
