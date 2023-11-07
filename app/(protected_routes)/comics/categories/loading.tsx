'use client'
import { Container} from "@mui/material";
import  { BallTriangle } from 'react-loader-spinner'
import React from "react";

const categoriesLoading = () => {
  return (
    <Container sx={{display:'flex' , justifyContent:'center' , marginTop:'2rem;'}}>
    <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  visible={true}
/>
    </Container>
  );
};

export default categoriesLoading;
