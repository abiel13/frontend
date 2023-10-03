import { Box, Paper } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Container } from "@mui/material";
import EditForm from "./EditForm";

interface EditModalI {
  toggle: Function;
}

const EditModal: React.FC<EditModalI> = ({ toggle }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        position: "absolute",
        width: { md: "50vw", xs: "100vw" },
        height: { md: "50vh", xs: "100vh" },
        transform: "translate(-50% , -50%)",
      }}
    >
      <CloseIcon onClick={() => toggle()} />
      <Container>
        <EditForm />
      </Container>
    </Paper>
  );
};

export default EditModal;
