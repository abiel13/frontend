import LoadingComponent from "@/app/components/LoadingComponent";
import { Container } from "@mui/material";
import React from "react";
import { ColorRing } from "react-loader-spinner";

const loading = () => {
  return (
    <Container
      sx={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}
    >
      <LoadingComponent />
    </Container>
  );
};

export default loading;
