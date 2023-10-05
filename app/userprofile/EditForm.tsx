"use client";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/context";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
}

const EditForm = () => {
  const { userData } = useAppContext();
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
  });

  useEffect(() => {
    if (userData) {
      setFormData({
        firstname: userData.firstname || "",
        lastname: userData.lastname || "",
        email: userData.email || "",
      });
    }
  }, [userData]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

 

  return (
    <Container sx={{ marginBlock: "1rem" }}>
      <Typography fontSize={27} fontWeight={"bold"}>
        Basic Info
      </Typography>
      <Stack sx={{ marginTop: "2rem" }} spacing={3}>
        <TextField
          id="standard-basic"
          label="First name"
          value={formData?.firstname}
          variant="standard"
          name="firstname"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          id="standard-basic"
          label="Last Name"
          name="lastname"
          value={formData?.lastname}
          variant="standard"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          id="standard-basic"
          label="Email"
          value={formData?.email}
          variant="standard"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          id="standard-basic"
          label="Password"
          value="xxxxxxxx"
          variant="standard"
        />

        <Button variant="outlined">Save</Button>
      </Stack>
    </Container>
  );
};

export default EditForm;
