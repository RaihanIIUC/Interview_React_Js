import React from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const FormUserDetails = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
   
  return (
    <>
      <Grid
        container
        spacing={1}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
        item
        xs={8}
      >
        <item>
          <Card>
            <CardHeader title="Enter User Details" />
            <CardContent>
              {/* <AppBar title="Enter User Details" /> */}
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
            </CardContent>
          </Card>
        </item>
      </Grid>
    </>
  );
};

export default FormUserDetails;
