import React from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

 const FormUserDetails = ({ nextStep, handleChange , values }) =>   {
 const  Continue = (e) => {
    e.preventDefault();
     nextStep();
  };

      return (
         <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
               fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
               fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
               fullWidth
            />
            <br />
            <Button color="primary" variant="contained" onClick={Continue}>
              Continue
            </Button>
          </Dialog>
        </>
     );
  }
 
export default FormUserDetails;
