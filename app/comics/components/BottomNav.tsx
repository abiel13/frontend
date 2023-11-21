"use client";
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import AddHomeIcon from "@mui/icons-material/AddHome";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { useRouter } from "next/navigation";

export default function BottomNav() {
  const [value, setValue] = React.useState("recents");
  const router = useRouter();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="block md:hidden">
      <Paper
        sx={{ position: "fixed", zIndex: 4000, bottom: 0, left: 0, right: 0 }}
        elevation={0}
      >
        <BottomNavigation
          sx={{ width: "auto", bgcolor: "#121212" }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            color="white"
            label="Home"
            value="Home"
            sx={{
              "& .css-imwso6-MuiBottomNavigationAction-label.Mui-selected": {
                color: "white",
              },
            }}
            icon={<AddHomeIcon sx={{ color: "white" }} />}
            onClick={() => router.push("/comics")}
          />

          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon sx={{ color: "white" }} />}
            onClick={() => router.push("/comics/favorites")}
            sx={{
              "& .css-imwso6-MuiBottomNavigationAction-label.Mui-selected": {
                color: "white",
              },
            }}
          />
          <BottomNavigationAction
            label="Library"
            value="Library"
            sx={{
              "& .css-imwso6-MuiBottomNavigationAction-label.Mui-selected": {
                color: "white",
              },
            }}
            icon={<LocalLibraryIcon sx={{ color: "white" }} />}
            onClick={() => router.push("/comics/library")}
          />
          <BottomNavigationAction
            label="BookMark"
            value="Bookmark"
            sx={{
              "& .css-imwso6-MuiBottomNavigationAction-label.Mui-selected": {
                color: "white",
              },
            }}
            icon={<CollectionsBookmarkIcon sx={{ color: "white" }} />}
            onClick={() => router.push("/comics/bookmarks")}
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}
