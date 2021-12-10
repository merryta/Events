import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../redux/action/Register";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from "yup";

const Registration = () => {
  // const [success, setSuccess] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      account_type: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("* Name field is required"),
      email: Yup.string().email("Invalid email address").required("* Email field is required"),
      password: Yup.string()
        .required("* Password is required")
        .min(6, "Password is too short - minimum should be 6 characters"),
      account_type: Yup.string().required("* Account type is required"),
    }),
    onSubmit: (values) => {
      try {
        const { name, email, password, account_type } = values;
        dispatch(userRegister({ name, email, password, account_type }));
        navigate("/home");
      } catch (error) {
        formik.resetForm();
      }
    },
  });

  return (
    <div className="register-container">
      <h2>Sign Up</h2>
      <form className="register-form" onSubmit={formik.handleSubmit}>
        <div className="register--form__name">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              autoComplete="off"
            />
          </label>
          <span>
            {formik.errors.name}
          </span>
        </div>
        <div>
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
          <span>
            {formik.errors.email}
          </span>
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
          <span>
            {formik.errors.password}
          </span>
        </div>
        <div className="register__account">
          <select name="account_type" id="account_type" onChange={formik.handleChange} placeholder="Select role">
            <option value="normal_user">Normal User</option>
            <option value="company">Service Provider</option>
          </select>
          <span>
            {formik.errors.account_type}
          </span>
        </div>
        <button type="submit" disabled={!formik.isValid} className="register__btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
