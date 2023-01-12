import { TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from 'yup';

const Coupon = () => {

  const initialValues = {
    firstName: "",
    lastName: "",
    mobile: "",
    Email: ""
  };

  const submitForm = (values) => {
    console.log(values);
  };

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('Please Enter first name.'),
    lastName: Yup.string().required('Please Enter last name.'),
    mobile: Yup.string().required('Please Enter mobile number.'),
    Email: Yup.string().required('Please Enter your email.'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          setFieldValue,
          isValid,
          dirty
        } = formik;
        console.log(errors)
        return (
          <>
            <div className="container" style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
              <h1>Sign Up</h1>
              <p>Please fill in this form to create an account.</p>
              <hr />
              <div style={{ marginButton: 12 }}>
                <TextField id="outlined-basic"
                  label="FirstName"
                  value={values.firstName}
                  fullWidth placeholder="Please enter first name"
                  onChange={handleChange}
                  name="firstName"
                  variant="outlined"
                  error={Boolean(errors.firstName && touched.firstName && errors.firstName)}
                />
                {errors.firstName && touched.firstName && (
                  <span className="error">{errors.firstName}</span>
                )}

              </div>
              <div style={{ marginButton: 12 }}>
                <TextField id="outlined-basic"
                  label="LastName"
                  value={values.lastName}
                  fullWidth placeholder="Please enter last name"
                  onChange={handleChange}
                  name="lasttName"
                  variant="outlined"
                  error={Boolean(errors.lastName && touched.lastName && errors.lastName)}
                />
                {errors.lastName && touched.lastName && (
                  <span className="error">{errors.lastName}</span>
                )}
              </div>
              <div style={{ marginButton: 12 }}>
                <TextField id="outlined-basic"
                  label="Mobile Number"
                  value={values.mobile}
                  fullWidth placeholder="Enter mobile number"
                  onChange={handleChange}
                  name="mobile"
                  variant="outlined"
                  error={Boolean(errors.mobile && touched.mobile && errors.mobile)}
                />
                {errors.mobile && touched.mobile && (
                  <span className="error">{errors.mobile}</span>
                )}
              </div>
              <div style={{ marginButton: 12 }}>
                {/* <input type="text"  placeholder="Enter email ID" onChange={handleChange} name="Email" required /> */}
                <TextField id="outlined-basic"
                  label="Mail Id"
                  value={values.Email}
                  fullWidth placeholder="Enter mobile number"
                  onChange={handleChange}
                  name="mobile"
                  variant="outlined"
                  helperText={errors.Email && touched.Email && errors.Email}
                  error={Boolean(errors.Email && touched.Email && errors.Email)}
                />
              </div>
              <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>

              <div className="clearfix">
                <a href="/deals">
                  <button type="button" className="cancelbtn">Cancel</button>
                </a>
                <button type="submit" onClick={handleSubmit} className="signupbtn">Sign Up</button>
              </div>
            </div>
          </>
        );
      }}
    </Formik>
  );
};
export default Coupon