"use client";
import { Paper } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Container } from "@mui/material";
import EditForm from "./EditForm";
import CloseAlarmError from "./CloseAlarmError";

interface EditModalI {
  toggle: Function;
}

const EditModal: React.FC<EditModalI> = ({ toggle }) => {
  const [Dialog, setDialog] = useState<boolean>(false);
  const toggleDialog = (value: boolean) => setDialog(value);
  const [editing, setEditing] = useState<boolean>(false);
  const toggleEdit = (value: boolean) => setEditing(value);
  const closeModal = () => {
    if (editing) {
      toggleDialog(true);
    } else {
      toggle();
    }
  };

  return (
    <Paper
      elevation={4}
      sx={{
        position: "absolute",
        width: { md: "50vw", xs: "100vw" },
        height: { md: "60vh", xs: "100vh" },
        transform: "translate(-50% , -50%)",
        overflowY: "auto",
        bgcolor:'#121212'
      }}
    >
      <CloseIcon
        sx={{ margin: ".3rem .4rem" , color:'white' }}
        cursor="pointer"
        onClick={() => closeModal()}
      />
      <Container>
        <EditForm editing={toggleEdit} />
      </Container>
      <CloseAlarmError
        open={Dialog}
        toggle={toggleDialog}
        closeEdit={() => toggle()}
        editing={toggleEdit}
      />
    </Paper>
  );
};

export default EditModal;
