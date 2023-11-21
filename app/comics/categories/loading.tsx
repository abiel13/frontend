"use client";
import { Container } from "@mui/material";
import { BallTriangle } from "react-loader-spinner";
import React from "react";
import LoadingComponent from "../../components/LoadingComponent";

const categoriesLoading = () => {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", marginTop: "2rem;" }}
    >
      <LoadingComponent />
    </Container>
  );
};

export default categoriesLoading;
