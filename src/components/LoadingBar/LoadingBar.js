import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from 'react';

export default function SimpleBackdrop({toggle}) {
  const [open, setOpen] = React.useState(false);
  
  useEffect(() => {
    if(toggle){
      setOpen(true);
    }
    else{
      setOpen(false);
    }
  }, [toggle]);

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
