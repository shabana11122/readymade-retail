import { Formik } from "formik";
import * as Yup from 'yup';
import "./product.css"

const SignInForm = () => {

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
    firstName: Yup.string().required('Please enter first name.'),
    lastName: Yup.string().required('Please enter last name.'),
    mobile: Yup.string().required('Please enter mobile number.'),
    Email: Yup.string().required('Please enter email.'),
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
        return (
          <>
            <div className="container" style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
              <h1>Sign Up</h1>
              <p>Please fill in this form to create an account.</p>
              <hr />
              <div>
                <input type="text" value={values.firstName} placeholder="Please enter first name" onChange={handleChange} name="firstName" required />
                {errors.firstName && touched.firstName && (
                  <span className="error">{errors.firstName}</span>
                )}
              </div>
              <div>
                <input type="text" value={values.lastName} placeholder="Please enter last name" onChange={handleChange} name="lastName" required />
                {errors.lastName && touched.lastName && (
                  <span className="error">{errors.lastName}</span>
                )}
              </div>
              <div>
                <input type="text" value={values.mobile} placeholder="Enter mobile number" onChange={handleChange} name="mobile" required />
                {errors.mobile && touched.mobile && (
                  <span className="error">{errors.mobile}</span>
                )}
              </div>
              <div>
                <input type="text" value={values.Email} placeholder="Enter email ID" onChange={handleChange} name="Email" required />
                {errors.Email && touched.Email && (
                  <span className="error">{errors.Email}</span>
                )}
              </div>
              <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>

              <div className="clearfix">
                <button type="button" className="cancelbtn">Cancel</button>
                <button type="submit" onClick={handleSubmit} className="signupbtn">Sign Up</button>
              </div>
            </div>
          </>
        );
      }}
    </Formik>
  );
};
export default SignInForm