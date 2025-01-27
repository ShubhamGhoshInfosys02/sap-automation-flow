import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { hideNotification } from "../../redux/slices/notificatioSlice";
import { useDispatch, useSelector } from "react-redux";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ToastNotification = () => {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector(
    (state) => state.notificationSlice
  );
  return (
    <Snackbar
      open={open}
      autoHideDuration={10000}
      onClose={() => dispatch(hideNotification())}
      style={{ left: 400 }}
    >
      <Alert
        onClose={() => dispatch(hideNotification())}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ToastNotification;
