import React from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

const Success = () => {
  return (
    <>
      <Dialog open fullWidth maxWidth="sm">
        <AppBar title="Success" />
        <h1>Data Submitted </h1>
      </Dialog>
    </>
  );
};

export default Success;
