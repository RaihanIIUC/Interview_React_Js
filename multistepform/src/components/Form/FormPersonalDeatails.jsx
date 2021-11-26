import React from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

 const FormPersonalDetails=({ nextStep, prevStep, handleChange , values })=> {
 
    const  Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Back = (e) => {
    e.preventDefault();
    prevStep();
  };

 
     return (
          <>
           <Dialog open fullWidth maxWidth="sm">
             <AppBar title="Enter Personal Details" />
             <TextField
               placeholder="Enter Your Phone"
               label="Phone"
               onChange={handleChange("phone")}
               defaultValue={values.phone}
                fullWidth
             />
             <br />
             <TextField
               placeholder="Enter Your City"
               label="City"
               onChange={handleChange("city")}
               defaultValue={values.city}
                fullWidth
             />
             <br />
             <TextField
               placeholder="Enter Your Address"
               label="Address"
               onChange={handleChange("Address")}
               defaultValue={values.address}
                fullWidth
             />
             <br />

             <Button color="info" variant="contained" onClick={Back}>
               Back
             </Button>

             <Button color="primary" variant="contained" onClick={Continue}>
               Continue
             </Button>
           </Dialog>
         </>
      );
  }

export default FormPersonalDetails;
