import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import "./Form.css";

function App() {
  const newvalidation = Yup.object({
    userid: Yup.string().min(5).max(12).required("Required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must be at least 8 characters long, contain one uppercase, one lowercase, one number, and one special character."
      )
      .required("Password is Required"),
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Alphabets only")
      .required("Required"),
    country: Yup.string().min(1).required("Country is required"),
    zipcode: Yup.number().required("Required"),
    email: Yup.string().matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Invalid Email Format"
    ).required('Required'),
    gender: Yup.string().required("Required"),
    // language:Yup.string().required('Required'),
    about: Yup.string().required("Required"),
  });

  return (
    <div id="main1">
      <div id="main">
        <h2>Registration Form</h2>
        <Formik
          initialValues={{
            userid: "",
            password: "",
            name: "",
            address: "",
            country: "",
            zipcode: "",
            email: "",
            gender: "",
            language: [],
            about: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={newvalidation}
        >
          <Form>
            <div className="element1">
              <label>User id : </label>
              <Field
                className="element"
                type="text"
                name="userid"
                placeholder="user id"
              />
              <div style={{ color: "red" }}>
                {" "}
                <ErrorMessage name="userid" />
              </div>
            </div>
            <div className="element1">
              <label>Password : </label>
              <Field
                className="element"
                type="password"
                name="password"
                placeholder="password"
              />
              <div style={{ color: "red" }}>
                <ErrorMessage name="password" />
              </div>
            </div>
            <div className="element1">
              <label>Name : </label>
              <Field
                className="element"
                type="text"
                name="name"
                placeholder="name"
              />
              <div style={{ color: "red" }}>
                {" "}
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="element1">
              <label>Address : </label>
              <Field
                className="element"
                type="text"
                name="address"
                placeholder="address"
              />{" "}
            </div>
            <br></br>
            <div className="element1">
              <label>Country</label>
              <Field className="element" as="select" name="country">
                <option value="" name="country">
                  Select
                </option>
                <option name="country" value="pakistan">
                  Pakistan
                </option>
                <option name="country" value="india">
                  India
                </option>
                <option name="country" value="australia">
                  Australia
                </option>
                <option name="country" value="japan">
                  Japan
                </option>
              </Field>
              <div style={{ color: "red" }}>
                <ErrorMessage name="country" />
              </div>
            </div>
            <br></br>
            <div className="element1">
              <label>Zip Code :</label>
              <Field
                className="element"
                type="number"
                name="zipcode"
                placeholder="zip code"
              />{" "}
              <div style={{ color: "red" }}>
                <ErrorMessage name="zipcode" />
              </div>
            </div>
            <br></br>
            <div className="element1">
              <label>Email :</label>
              <Field
                className="element"
                type="text"
                name="email"
                placeholder="email"
              />
              <div style={{ color: "red" }}>
                <ErrorMessage name="email" />
              </div>
            </div><div className="element1">
              
            <div style={{ display: "flex", gap: 8 }} >
              <label>Gender :</label>
              <label>Male</label> <br></br>
              <Field
                className="element"
                type="radio"
                name="gender"
                value="male"
              />
              <label>Female</label>
              <Field
                className="element"
                type="radio"
                name="gender"
                value="female"
              />
              <div style={{ color: "red" }}>
                <ErrorMessage name="gender" />
              </div>
            </div>
            </div>
            <div>
              <div  style={{ display: "flex", gap: 8 }}>
                <label>Languages :</label>
                <label>English</label>
                <Field
                 
                  type="checkbox"
                  name="language"
                  value="english"
                />
                <label>non english</label>
                <Field
                  
                  type="checkbox"
                  name="language"
                  value="Non English"
                />
                <div style={{ color: "red" }}>
                  <ErrorMessage name="language" />
                </div>{" "}
              </div>
            </div>
            <br></br>
            <label>About :</label> <br></br>
            <Field
              className="element"
              type="text"
              name="about"
              as="textarea"
              cols="22"
              rows="5"
              placeholder="About"
            />{" "}
            <br></br>
           <div className="element1">
           <button className="btn" type="submit">
              Submit
            </button>
           </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default App;
