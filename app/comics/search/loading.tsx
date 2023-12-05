"use client";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";
import { Bars } from "react-loader-spinner";

const SearchLoading = () => {
  return (
    <Container
      sx={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}
      color="black"
    >
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        visible={true}
      />
    </Container>
  );
};

export default SearchLoading;
