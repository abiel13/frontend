"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Container, Grid, Typography } from "@mui/material";
import UserDetails from "./UserDetails";
import EditModal from "./EditModal";
import { authstore } from "@/store/store";

const UserProfilePage = () => {
  const [visible, setVisible] = useState(false);
  const execwindow = authstore((state) => state.initializeWindowEvent);
  let user;
  let fullname = '';
  let initials = '';

  useEffect(() => {
    execwindow();
    user = authstore.getState().user;
    fullname = user?.firstname + " " + user?.lastname;
    console.log(fullname)
    initials = fullname?.split(" ")[0][0] + "." + fullname?.split(" ")[1][0];
  }, []);
  console.log(fullname)


  return (
    <div className="min-h-screen bg-[#121212] relative">
      <div className="px-3 py-4 bg-[#121212] ">
        <Link href={"/comics"} className="text-white cursor-pointer  px-4">
          {" "}
          {"< Go Back"}{" "}
        </Link>
      </div>

      <Container
        sx={{
          bgcolor: "#0b0b0c",
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
                bgcolor: "black",

                width: "100px",
                height: "100px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                fontWeight={"bold"}
                fontSize={24}
                sx={{ color: "white" }}
              >
                {initials}
              </Typography>
            </Box>
          </Grid>
          <Grid sx={{ alignSelf: "flex-end" }} item>
            <EditIcon
              sx={{ color: "white" }}
              onClick={() => setVisible(true)}
              cursor="pointer"
            />
          </Grid>
        </Grid>
      </Container>
      <UserDetails fullname={fullname} user={user} />
      <div
        className={`${
          visible ? "block" : "hidden"
        } absolute top-[50%] right-[50%] `}
      >
        <EditModal toggle={() => setVisible(false)} />
      </div>
    </div>
  );
};

export default UserProfilePage;
