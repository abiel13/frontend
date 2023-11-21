import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface CloseAlarmErrorI {
  open: boolean;
  toggle: Function;
  closeEdit: Function;
  editing:Function;
}

const CloseAlarmError: React.FC<CloseAlarmErrorI> = ({
  open,
  toggle,
  closeEdit,
  editing
}) => {
  const handleClickOpen = () => {
    // setOpen(true);
  };

  const handleClose = () => {
    toggle(false);
    closeEdit();
    editing(false)
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Discard Changes"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Do You Want to Discard Changes
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => toggle(false)}>No thanks </Button>
          <Button onClick={handleClose}>Discard</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CloseAlarmError;
