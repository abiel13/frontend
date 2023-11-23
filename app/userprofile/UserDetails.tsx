import { Container, Typography } from "@mui/material";
import React, { FC } from "react";

interface UserDetailsI {
  fullname: string;
  user: any;
}

const UserDetails: FC<UserDetailsI> = ({ fullname, user }) => {
  console.log(fullname);
  return (
    <>
      <Container sx={{ marginTop: { md: "5%", xs: "20%" } }}>
        <Typography color="white" fontWeight="bold" fontSize={28}>
          {fullname}
        </Typography>
        <Typography sx={{ color: "white" }}>{user?.email}</Typography>
      </Container>
      <Container sx={{ marginTop: "1rem" }}>
        <Typography color="white" fontWeight={"bold"}>
          Recents
        </Typography>
      </Container>
    </>
  );
};

export default UserDetails;
