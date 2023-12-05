"use client";
import React , {useState} from "react";

import Link from "next/link";
import { useAppContext } from "../context/context";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Container, Grid, Typography } from "@mui/material";
import UserDetails from "./UserDetails";
import EditModal from "./EditModal";

const UserProfilePage = () => {
  const [visible, setVisible] = useState(false)
  const { userData } = useAppContext();
  const initials = userData?.firstname[0] + "." + userData?.lastname[0];
  return (
    <div className="min-h-screen relative">
      <div className="px-3 py-4 shadow-md ">
        <Link href={"/comics"} className="text-black cursor-pointer  px-4">
          {" "}
          {"< Go Back"}{" "}
        </Link>
      </div>

      <Container
        sx={{
          bgcolor: "#aaa",
          marginTop: "1rem",
          padding: "2rem 0",
          position: "relative",
        }}
      >
        <Grid
          container
          sx={{
            position: "absolute",
            bottom: "-50px",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 2rem",
          }}
        >
          <Grid item>
            <Box
              sx={{
                bgcolor: "red",

                width: "100px",
                height: "100px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography fontWeight={"bold"} fontSize={24} color="white">
                {initials == "undefined.undefined" ? "" : initials}
              </Typography>
            </Box>
          </Grid>
          <Grid sx={{ alignSelf: "flex-end" }} item>
            <EditIcon onClick={() => setVisible(true)} cursor='pointer' />
          </Grid>
        </Grid>
      </Container>
    <UserDetails />
    <div  className={`${visible ? 'block' :'hidden'} absolute top-[50%] right-[50%] `}>
    <EditModal toggle = {() => setVisible(false)} />
    </div>
    </div>
  );
};

export default UserProfilePage;
