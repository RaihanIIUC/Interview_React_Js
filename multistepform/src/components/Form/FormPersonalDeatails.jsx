import React from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const FormPersonalDetails = ({ nextStep, prevStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Back = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <>
      <body>
        <div class="container">
          <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div class="card border-0 shadow rounded-3 my-5">
                <div class="card-body p-4 p-sm-5">
                  <h5 class="card-title text-center mb-5 fw-light fs-5">
                    Enter Personal Details
                  </h5>
                  <form>
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        value={values.phone}
                        onChange={handleChange("phone")}
                        placeholder="Enter Your Phone"
                      />
                      <label for="floatingInput">Phone</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        value={values.city}
                        onChange={handleChange("city")}
                        placeholder="Enter Your City"
                      />
                      <label for="floatingInput">City</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control"
                        value={values.address}
                        onChange={handleChange("address")}
                        placeholder="Enter Your Address"
                      />
                      <label for="floatingPassword">Address</label>
                    </div>

                    <div class="d-grid">
                      <button
                        class="btn btn-seconary btn-login text-uppercase fw-bold"
                        onClick={Back}
                      >
                        Back
                      </button>
                    </div>
                    <div class="d-grid">
                      <button
                        class="btn btn-primary btn-login text-uppercase fw-bold"
                        onClick={Continue}
                      >
                        Continue
                      </button>
                    </div>
                    <hr class="my-4"></hr>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default FormPersonalDetails;
