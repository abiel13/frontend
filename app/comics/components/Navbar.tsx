"use client";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { Stack, Paper, Divider, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Close from "@mui/icons-material/Close";
import { useAppContext } from "@/app/context/context";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { error } from "console";

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
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }
const router = useRouter()
    function logout (){
      try {
        axios.get('https://api.alteflix.com/api/v1/accounts/logout', {headers: {Authorization:`Bearer ${userData?.token}`}}).then(res =>{
          localStorage.removeItem('AlteFlixUser');
          router.push('/auth/login')
          toast('logout sucessfull')
        }
        ).catch(error =>{
          localStorage.removeItem('AlteFlixUser');
          router.push('/auth/login')
          toast('logout sucessful')
        })
      } catch (error:any) {
        toast(error?.message)
      }
    }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        color: "white",
      },
      children: `${name.split(" ")[0][0]}.${name.split(" ")[1][0]}`,
    };
  }

  const { userData } = useAppContext();
  const [visible, setVisible] = useState<boolean>(false);
  const fullname = userData?.firstname + " " + userData?.lastname;
  return (
    <>
      <CssBaseline />
      <HideOnScroll>
        <AppBar sx={{ bgcolor: "white" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link href={"/comics"}>
              {" "}
              <Typography variant="h6" color="black" component="div">
                Alte <span className="text-red-500">Flix</span>
              </Typography>
            </Link>

            <Avatar
              onClick={() => setVisible(true)}
              {...stringAvatar(fullname || "")}
            />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Stack
        sx={{
          position: "fixed",
          top: "0",
          bottom: 0,
          right: 0,
          width: { md: "20%", sm: "90%" },
          bgcolor: "whitesmoke",
          zIndex: 10000,
          transition: "transform ease-in .3s",
        }}
        style={{
          transform: visible ? "scaleX(1) " : "scaleX(0)",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.4)",
        }}
        spacing={0}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          <Typography className="text-xl">
            Alte <span className="text-red-500 ">Flix</span>
          </Typography>
          <Close sx={{ color: "red" }} onClick={() => setVisible(false)} />
        </Box>
        <Link href={"/userprofile"}>
          <Paper
            sx={{
              padding: "1rem 2rem",
              bgcolor: "transparent",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "white",
                bgcolor: "red",
                padding: "1rem",
                borderRadius: ".7rem",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              A.A
            </Typography>
            <Stack>
              <Typography>{fullname}</Typography>
              <Typography>{userData?.email}</Typography>
            </Stack>
          </Paper>
        </Link>

        <Divider light />
        <Paper
          onClick={() => {
            setVisible(false);
            toast("feature coming soon");
          }}
          sx={{
            padding: "1rem 2rem",
            bgcolor: "transparent",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <CurrencyExchangeIcon />
          <Typography>Manage Subscriptions</Typography>
        </Paper>
        <Divider light />
        <Paper
          onClick={() => {
            setVisible(false);
            toast("feature coming soon");
          }}
          sx={{
            padding: "1rem 2rem",
            bgcolor: "transparent",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <AccountBalanceWalletIcon />
          <Typography>Wallet</Typography>
        </Paper>
        <Divider light />
        <Paper
          onClick={() => {
            setVisible(false);
            toast("feature coming soon");
          }}
          sx={{
            padding: "1rem 2rem",
            bgcolor: "transparent",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <SettingsIcon />
          <Typography>Settings</Typography>
        </Paper>
        <Stack className="hidden md:block">
          <Divider light />
          <Link href={"/comics/library"}>
            <Paper
              onClick={() => {
                setVisible(false);
              }}
              sx={{
                padding: "1rem 2rem",
                bgcolor: "transparent",
                display: "flex",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <LocalLibraryIcon />
              <Typography>Library</Typography>
            </Paper>
          </Link>

          <Divider light />
          <Link href={"/comics/favorites"}>
            <Paper
              onClick={() => {
                setVisible(false);
              }}
              sx={{
                padding: "1rem 2rem",
                bgcolor: "transparent",
                display: "flex",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <FavoriteIcon />
              <Typography>Favorites</Typography>
            </Paper>
          </Link>
          <Divider light />
          <Link href={"/comics/bookmarks"}>
            <Paper
              onClick={() => {
                setVisible(false);
                toast("feature coming soon");
              }}
              sx={{
                padding: "1rem 2rem",
                bgcolor: "transparent",
                display: "flex",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <CollectionsBookmarkIcon />
              <Typography>Bookmarks</Typography>
            </Paper>
          </Link>
        </Stack>
        <Divider light />
        <Paper
          onClick={() => {
            setVisible(false);
            logout()
          }}
          sx={{
            padding: "1rem 2rem",
            bgcolor: "transparent",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <ExitToAppIcon />
          <Typography>Logout</Typography>
        </Paper>
        <Divider light />
      </Stack>
    </>
  );
}
