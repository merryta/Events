import React from 'react'

const Registration = () => {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form">
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <div className="register-account">
          <input type="radio" value="normal_user" name="account_type" />
          Normal user
          <input type="radio" value="admin" name="account_type" />
          Service Provider
        </div>
        <button className="register-btn">Register</button>
      </form>
    </div>
  );
}

export default Registration

