import React, { useEffect } from "react";
import Alert from "@mui/material/Alert";
import "./Alert.css";
const MessageBox = ({toggle, type, msg }) => {

    useEffect(() => {
        setTimeout(() => {
            toggle(false);
        }, 3000);
    });


  
  return (
    <div className="alert-box">
      {/* Display different types of alerts */}
      <Alert severity={type}>{msg}</Alert>
    </div>
  );
};

export default MessageBox;
