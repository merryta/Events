import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../redux/action/Register";
import { registerUserApi } from "../api/user";
import { useNavigate } from 'react-router-dom';


const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.registration);
  // console.log(state);
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
    account_type: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(userRegister(user));
    setUser({
      name: "",
      email: "",
      password: "",
      account_type: "",
    });
    navigate.push('/login');
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev, [name]: value
    }))
  };

  return (
    <div className="register-container">
      <h2>Sign Up</h2>
      <form className="register-form" onSubmit={formSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={user.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={user.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={user.password} onChange={handleChange} />
        </label>
        <div className="register__account">
          <select name="account_type" id="account_type" onChange={handleChange}>
            <option>Select Role</option>
            <option value="normal_user">Normal User</option>
            <option value="company">Service Provider</option>
          </select>
        </div>
        <button className="register__btn">Register</button>
      </form>
    </div>
  );
};

export default Registration;
