import { Container, Typography } from "@mui/material";
import React from "react";

const UserDetails = () => {
  const fullname = "fullname";
  return (
    <>
      <Container sx={{ marginTop: { md: "5%", xs: "20%" } }}>
        <Typography fontWeight="bold" fontSize={28}>
          {fullname}
        </Typography>
        <Typography>{"dbestabi28@gmail.com"}</Typography>
      </Container>
      <Container sx={{ marginTop: "1rem" }}>
        <Typography fontWeight={"bold"}>Recents</Typography>
      </Container>
    </>
  );
};

export default UserDetails;
