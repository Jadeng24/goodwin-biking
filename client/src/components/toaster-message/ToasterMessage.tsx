import { Alert, AlertColor, Snackbar, Typography } from "@mui/material";

interface ToasterMessageProps {
  message: string;
  onClose: (newValue: boolean) => void;
  showMessage: boolean;
  type: AlertColor;
}

export enum MessageType {
  success = "success",
  info = "info",
  warning = "warning",
  error = "error",
}

const ToasterMessage = (props: ToasterMessageProps) => {
  const { message, onClose, showMessage = false, type } = props;

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    onClose(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        open={showMessage}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={type as AlertColor}
          variant="filled"
          sx={{ width: "100%" }}
        >
          <Typography variant="h4">{message}</Typography>
        </Alert>
      </Snackbar>
    </>
  );
};

export default ToasterMessage;
