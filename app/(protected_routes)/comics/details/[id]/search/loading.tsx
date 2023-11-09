"use client";
import { Container } from "@mui/material";
import React from "react";
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
