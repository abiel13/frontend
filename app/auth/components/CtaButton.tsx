import { Stack, Typography } from "@mui/material";
import React from "react";

const CtaButton = ({ title, click }: { title: string; click?: () => void }) => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      className="bg-red-700"
      sx={{ padding: "1rem", borderRadius: "5px" , width:'100%' }}
      
      onClick={click}
    >
      <Typography
        sx={{ color: "white", fontWeigth: "bold", fontSize: "1.2rem" }}
      >
        {title}
      </Typography>
    </Stack>
  );
};

export default CtaButton;
