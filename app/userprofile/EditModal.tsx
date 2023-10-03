import { Box, Paper } from "@mui/material";
import React from "react";

const EditModal = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        position: "absolute",
        width: { md: "50vw", xs: "90vw" },
        height: { md: "50vh", xs: "70vh" },
        transform: "translate(-50% , -50%)",
      }}
    >
      EditModal
    </Paper>
  );
};

export default EditModal;
