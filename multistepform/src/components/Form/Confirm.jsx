import React from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

 const Confirm =({ nextStep , prevStep ,values }) => {

      const { firstName, lastName, email, phone , city, address } = values;

      console.log(values);
  const  Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Back  = (e) => {
    e.preventDefault();
    prevStep();
  };

   
    return (
         <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Phone" secondary={phone} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Address" secondary={address} />
              </ListItem>
            </List>
            <br />

            <Button color="secondary" variant="contained" onClick={Back}>
              Back
            </Button>

            <Button color="primary" variant="contained" onClick={Continue}>
              Confirm & Continue
            </Button>
          </Dialog>
        </>
     );
 }

export default Confirm;
