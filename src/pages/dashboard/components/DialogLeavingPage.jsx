import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";

export const DialogLeavingPage = ({
  showDialog,
  setShowDialog,
  cancelNavigation,
  confirmNavigation
}) => {
  const handleDialogClose = () => {
    setShowDialog(false);
  };
  return (
    <Dialog fullWidth open={showDialog} onClose={handleDialogClose}>
      <DialogTitle>Leaving Page</DialogTitle>
      <DialogContent>
        <Typography>There are some changes</Typography>
        <Typography>If you proceed your changes will be lost</Typography>
        <Typography>Are you sure you want to proceed?</Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={cancelNavigation}>
          No
        </Button>
        <Button variant="contained" onClick={confirmNavigation}>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};
