"use client";
import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormField from "../auth/components/FormFields";
import { useFormik } from "formik";
import CtaButton from "../auth/components/CtaButton";
import { authstore } from "@/store/store";
import { updateUser } from "@/request_api/AuthApiRequest";
import { toast } from "react-toastify";

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

interface EditFormI {
  editing: Function;
  close: Function;
}

const EditForm: React.FC<EditFormI> = ({ editing, close }) => {
  const user = authstore((state) => state.user);
  const setUser = authstore((state) => state.setUser);
  const setIsUpdated = authstore((state) => state.setisUpdated);
  const [initial, setInitial] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    has_subscription: true,
  });

  const onSubmit = async (value: any) => {
    delete value.token;
    try {
      const response = await updateUser(value, user?.token);
      if (response) {
        toast.success("Profile Update Succesfully");
        setUser(response.data);
        localStorage.setItem("AlteFlixUser", JSON.stringify(response?.data));
        setIsUpdated();
        editing(false);
        close();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // set initial to values gotten from zustand auth store
  useEffect(() => {
    setInitial(() => {
      return { ...user, password: "" };
    });
  }, [user]);

  // now i set the values to the formik hook as trying to reset initial value wont work after rend #immutable
  useEffect(() => {
    setValues(initial);
  }, [initial]);

  const { errors, values, handleChange, handleSubmit, setValues } =
    useFormik<FormData>({
      initialValues: initial,
      onSubmit,
    });

  return (
    <Container sx={{ marginBlock: "1rem" }}>
      <Typography color="white" fontSize={27} fontWeight={"bold"}>
        Basic Info
      </Typography>
      <Stack spacing={2} sx={{ marginTop: "2rem" }}>
        <FormField
          name="firstname"
          title="First Name"
          value={values.firstname}
          change={(e) => {
            editing(true);
            handleChange(e);
          }}
          type="text"
        />{" "}
        <FormField
          name="lastname"
          title="Last Name"
          value={values.lastname}
          change={(e) => {
            editing(true);
            handleChange(e);
          }}
          type="text"
        />{" "}
        <FormField
          name="email"
          title="Email Address"
          value={values.email}
          change={(e) => {
            editing(true);
            handleChange(e);
          }}
          type="email"
        />{" "}
        <FormField
          name="password"
          title="Password"
          value={values.password}
          change={(e) => {
            editing(true);
            handleChange(e);
          }}
          type="password"
        />
        <CtaButton title="Confirm Update" click={handleSubmit} />
      </Stack>
    </Container>
  );
};

export default EditForm;
