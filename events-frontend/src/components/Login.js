import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { userLogin } from "../redux/action/Login";
import { LOGIN_SUCCESS, LOGIN_FAIL } from "../redux/types/Types";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [status, setStatus] = React.useState(undefined);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("* Email is required"),
      password: Yup.string()
        .required("* Password is required")
        .min(6, "Password is too short - minimum should be 6 characters"),
    }),
    onSubmit: async (values, { setSubmitting, setStatus}) => {
      const action = await dispatch(userLogin(values));
      console.log(action);  
      setSubmitting(false);
      if (action.type === LOGIN_FAIL) {
        setStatus({ error: "Unable to login"})
      } else if(action.type === LOGIN_SUCCESS) {
        navigate("/")
      }
      // try {
      //   const { email, password } = values;
      //   dispatch(userLogin({ email, password }))
      //     .then(() => {
      //       formik.resetForm();
      //     })
      //     setTimeout(() => {
      //       navigate("/");
      //     }, 3000);
      // } catch(error) {
      //   formik.resetForm();
      //   setTimeout(() => {
      //     navigate("/auth")
      //   })
      // }
    },
  });

  return (
    <div className="login-container">
      <h2>Sign In</h2>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        {/* {status.type === "success" && (
          <div>Thanks</div>
        )}
        {status.type === "error" && (
          <div>Error</div>
        )} */}
        <div className="login--form__name">
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              autoComplete="off"
            />
          </label>
          <span className={`${formik.touched.email && formik.errors.name ? "show" : ""}`}>{formik.errors.email}</span>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              autoComplete="off"
            />
          </label>
          <span className={`${formik.touched.password && formik.errors.password ? "show" : ""}`}>{formik.errors.password}</span>
        </div>
        <button type="submit" disabled={!formik.isValid} className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
