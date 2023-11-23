"use client";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";


interface FormData {
  firstname: string;
  lastname: string;
  email: string;
}

interface EditFormI{
  editing:Function
}

const EditForm:React.FC<EditFormI> = ({editing}) => {
  

  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
  });

  useEffect(() => {
  
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  editing(true)
  };

 

  return (
    <Container sx={{ marginBlock: "1rem" }}>
      <Typography color='white' fontSize={27} fontWeight={"bold"}>
        Basic Info
      </Typography>
     
   
    </Container>
  );
};

export default EditForm;
