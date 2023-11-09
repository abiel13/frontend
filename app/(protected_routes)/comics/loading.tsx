"use client";
import React from "react";
import { Container } from "@mui/material";
import { ColorRing } from "react-loader-spinner";
import LoadingComponent from "../components/LoadingComponent";

const Loading = () => {
  return (
    <Container
      sx={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}
    >
      <LoadingComponent />
    </Container>
  );
};

export default Loading;
