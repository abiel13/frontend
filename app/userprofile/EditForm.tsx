"use client";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import React, { useState , useEffect } from "react";
import { useAppContext } from "../context/context";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
}

const EditForm = () => {
   
    
    const { userData } = useAppContext();
    const [formData, setFormData] = useState<FormData>({
      firstname: '',
      lastname: '',
      email: '',
    });
    
    useEffect(() => {
      if (userData) {
        setFormData({
          firstname: userData.firstname || '',
          lastname: userData.lastname || '',
          email: userData.email || '',
        });
      }
    }, [userData]);
    
    console.log(formData);
    
  return (
    <Container sx={{ marginTop: "1rem" }}>
      <Typography fontSize={27} fontWeight={"bold"}>
        Basic Infos
      </Typography>
      <Stack sx={{ marginTop: "2rem" }} spacing={3}>
        <TextField
          id="standard-basic"
          label="First name"
          value={formData?.firstname}
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Last Name"
          value={formData?.lastname}
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Email"
          value={formData?.email}
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Password"
          value="xxxxxxxx"
          variant="standard"
        />

        <Button variant="outlined">
            Save
        </Button>
      </Stack>
    </Container>
  );
};

export default EditForm;
