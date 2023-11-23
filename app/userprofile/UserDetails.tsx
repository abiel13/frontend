import { Container, Typography } from "@mui/material";
import React, { FC } from "react";


interface UserDetailsI {
  fullname:string
  user:any
}

const UserDetails:FC<UserDetailsI> = ({fullname , user}) => {
  console.log(fullname)
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
