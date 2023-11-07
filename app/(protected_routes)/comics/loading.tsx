'use client'
import React from "react";
import { Container } from "@mui/material";
import { ColorRing } from "react-loader-spinner";

const Loading = () => {
  return (
    <Container sx={{ marginTop: "2rem", display:'flex' , justifyContent: "center" }}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#00f", "#00f", "#00f", "#00f", "#00f"]}
      />
    </Container>
  );
};

export default Loading;
