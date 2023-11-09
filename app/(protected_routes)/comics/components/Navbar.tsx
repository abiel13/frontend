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
  function logout() {
    try {
      axios
        .get("https://api.alteflix.com/api/v1/accounts/logout", {
          headers: { Authorization: `Bearer ${""}` },
        })
        .then((res) => {
          localStorage.removeItem("AlteFlixUser");
          router.push("/auth/login");
          toast("logout sucessfull");
        })
        .catch((error) => {
          localStorage.removeItem("AlteFlixUser");
          router.push("/auth/login");
          toast("logout sucessful");
        });
    } catch (error: any) {
      toast(error?.message);
    }
  }

  const [visible, setVisible] = useState<boolean>(false);
  const fullname = "Abiel Asimiea";
  return (
    <>
      <CssBaseline />
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
                <Typography fontSize={"smaller"}>A.A</Typography>
              </Avatar>
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <SidePopup
        visible={visible}
        setVisible={() => setVisible((prev) => !prev)}
      />
    </>
  );
}
