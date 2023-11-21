import React from "react";
import { Container } from "@mui/material";
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
