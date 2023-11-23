"use client";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Stack, Typography } from "@mui/material";
import Search from "./Search";
import SidePopup from "./SidePopup";
import { authstore } from "@/store/store";
import { logoutUser } from "@/request_api/AuthApiRequest";

function HideOnScroll({
  children,
}: {
  children: React.ReactNode | React.ReactElement | undefined | any;
}) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar() {
  const router = useRouter();
  const [visible, setVisible] = useState<boolean>(false);

  const user = authstore((state) => state.user);
  const setlogged = authstore((state) => state.setLoggedIn);
  const setuser = authstore((state) => state.setUser);
  const fullname = user?.firstname + " " + user?.lastname;
  const initials =
    fullname?.split(" ")[0][0] + "." + fullname?.split(" ")[1][0];

  const logout = async (token: string) => {
    const response = await logoutUser(token);
    toast.success("logout successful");
    localStorage.removeItem("AlteFlixUser");
    setuser(null);
    setlogged(false);
    router.push("/auth/login");
  };

  return (
    <>
      <HideOnScroll>
        <AppBar sx={{ bgcolor: "#121212", boxShadow: "none" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link href={"/comics"}>
              {" "}
              <h2 style={{ fontSize: "1.4rem" }}>
                Alte <span className="text-red-500">Flix</span>
              </h2>
            </Link>
            <Stack
              direction={"row"}
              sx={{ bgcolor: "reds", width: { md: "50%", xs: "75%" } }}
            >
              <Search />
              <Avatar
                sx={{ bgcolor: "#510800", padding: ".4rem" }}
                onClick={() => setVisible(true)}
              >
                <Typography fontSize={"smaller"}>
                  {initials !== "u.u" ? initials : " "}
                </Typography>
              </Avatar>
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <SidePopup
        visible={visible}
        setVisible={() => setVisible((prev) => !prev)}
        user={user}
        fullname={fullname}
        initials={initials}
        logout={() => logout(user?.token)}
      />
    </>
  );
}
