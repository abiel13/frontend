import React from "react";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { Stack, Paper, Divider, Grid, Box, Typography } from "@mui/material";
import Link from "next/link";
import { toast } from "react-toastify";
import Close from "@mui/icons-material/Close";

const SidePopup = ({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: Function;
}) => {
  return (
    <Stack
      sx={{
        position: "fixed",
        top: "0",
        bottom: 0,
        right: 0,
        width: { md: "20%", sm: "90%" },
        bgcolor: "#0b0b0c",
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
        <h3 className="text-xl">
          Alte <span className="text-red-500 ">Flix</span>
        </h3>
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
            gap: "1rem",
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
            {`A.A` || " "}
          </Typography>
          <Stack>
            <Typography color={"white"}>{"abiel asimiea"}</Typography>
            <Typography color={"white"}>{"dbestabi28@gmail.com"}</Typography>
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
        <CurrencyExchangeIcon sx={{ color: "white" }} />
        <Typography color={"white"}>Manage Subscriptions</Typography>
      </Paper>
      <Divider />
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
        <AccountBalanceWalletIcon sx={{ color: "white" }} />
        <Typography color={"white"}>Wallet</Typography>
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
        <SettingsIcon sx={{ color: "white" }} />
        <Typography sx={{ color: "white" }}>Settings</Typography>
      </Paper>
      <div className="hidden md:block">
        <Stack>
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
              <LocalLibraryIcon sx={{ color: "white" }} />
              <Typography sx={{ color: "white" }}>Library</Typography>
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
              <FavoriteIcon sx={{ color: "white" }} />
              <Typography sx={{ color: "white" }}>Favorites</Typography>
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
              <CollectionsBookmarkIcon sx={{ color: "white" }} />
              <Typography sx={{ color: "white" }}>Bookmarks</Typography>
            </Paper>
          </Link>
        </Stack>
      </div>

      <Divider light />
      <Paper
        onClick={() => {
          setVisible(false);
          //   logout();
        }}
        sx={{
          padding: "1rem 2rem",
          bgcolor: "transparent",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <ExitToAppIcon sx={{ color: "white" }} />
        <Typography sx={{ color: "white" }}>Logout</Typography>
      </Paper>
      <Divider light />
    </Stack>
  );
};

export default SidePopup;
