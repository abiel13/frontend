"use client";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";
import { Bars } from "react-loader-spinner";
import LoadingComponent from "../../components/LoadingComponent";

const SearchLoading = () => {
  return (
    <Container
      sx={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}
      color="black"
    >
      <LoadingComponent />
    </Container>
  );
};

export default SearchLoading;
