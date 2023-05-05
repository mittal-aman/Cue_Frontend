import * as React from 'react';
import {useRef} from 'react'
import {useIdleTimer} from 'react-idle-timer'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import  { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'


const AlertBox =(props)=> {

  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate()

  const idleTimerRef=useRef(null)
  const sessionTimeoutRef=useRef(null)

  const onIdle=()=>{
    console.log('User is Idle');
    setOpen(true);
    sessionTimeoutRef.current = setTimeout(gomain,5000);    
  }

  const gomain = () =>{
    navigate('/') 
    setOpen(false);
  }

  const idleTimer = useIdleTimer({
    crossTab: true,
    ref: idleTimerRef,
    onIdle: onIdle,
    timeout: 7*1000
  })

  const handleClose = () => { 
    setOpen(false);
    clearTimeout(sessionTimeoutRef.current)
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     handleOpen();
  //   }, 4000)
  // }, [])

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  

  // const events = [
  //   'mousemove',
  //   'click',
  //   'keypress'
  // ];

  

  return (
    <div>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >        
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          To Stay on This Screen, Press OK.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <div idletimer={idleTimer}></div>
      
    </div>
  );
}

export default AlertBox