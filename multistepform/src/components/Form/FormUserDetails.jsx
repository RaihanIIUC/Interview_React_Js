import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./formuser.css";
const FormUserDetails = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
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
                    Enter User Details
                  </h5>
                  <form>
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        value={values.firstName}
                        onChange={handleChange("firstName")}
                        placeholder="Enter Your First Name"
                      />
                      <label for="floatingInput">First Name</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        value={values.lastName}
                        onChange={handleChange("lastName")}
                        placeholder="Enter Your Last Name"
                      />
                      <label for="floatingInput">Last Name</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control"
                        value={values.email}
                        onChange={handleChange("email")}
                        placeholder="Enter Your Email"
                      />
                      <label for="floatingPassword">Email</label>
                    </div>

                    <div class="d-grid">
                      <button
                        class="btn btn-primary btn-login text-uppercase fw-bold"
                        type="submit"
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

export default FormUserDetails;
