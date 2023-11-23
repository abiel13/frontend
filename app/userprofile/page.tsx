"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Container, Grid, Typography } from "@mui/material";
import UserDetails from "./UserDetails";
import EditModal from "./EditModal";
import { authstore } from "@/store/store";

interface profileData {
  user: any;
  fullname: string;
  initials: string;
}

const UserProfilePage = () => {
  const [visible, setVisible] = useState(false);
  const execwindow = authstore((state) => state.initializeWindowEvent);
  const [profileData, setprofileData] = useState<profileData>({
    user: null,
    fullname: "",
    initials: "",
  });

  useEffect(() => {
    execwindow();
    const user = authstore.getState().user;
    const fullname = user?.firstname + " " + user?.lastname;
    const initials =
      fullname?.split(" ")[0][0] + "." + fullname?.split(" ")[1][0];

    setprofileData((prev) => {
      return { ...prev, fullname: fullname, initials: initials, user: user };
    });
  }, []);

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
          bgcolor: "#323232",
          marginTop: "1rem",
          padding: "2rem 0",
          position: "relative",
          minHeight:'20vh'
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
                bgcolor: "#0b0b0c",

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
                {profileData.initials}
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
      <UserDetails fullname={profileData?.fullname} user={profileData.user} />
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
