import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


interface SimpleSnackbarI {
    open:boolean;
    handleClose:any;
}

export default function SimpleSnackbar({open  , handleClose  } : SimpleSnackbarI) {


  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open}
        anchorOrigin={{horizontal:'left' , vertical:'top'}}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Reached Last Page"
        action={action}
      />
    </div>
  );
}
