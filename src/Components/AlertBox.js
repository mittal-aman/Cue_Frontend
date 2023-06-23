import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useRef, useState } from "react";
import { useIdleTimer } from "react-idle-timer";
import { useNavigate } from "react-router-dom";

const AlertBox = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const idleTimerRef = useRef(null);
  const sessionTimeoutRef = useRef(null);

  const onIdle = () => {
    console.log("User is idle");
    setOpen(true);
    sessionTimeoutRef.current = setTimeout(goMain, 30000);
  };

  const goMain = () => {
    navigate("/");
    setOpen(false);
  };

  const idleTimer = useIdleTimer({
    crossTab: true,
    ref: idleTimerRef,
    onIdle,
    timeout: 120 * 1000,
  });

  const handleClose = () => {
    setOpen(false);
    clearTimeout(sessionTimeoutRef.current);
  };

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
            To stay on this screen, press OK.
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
};

export default AlertBox;
