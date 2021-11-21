import React from 'react'

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button className="login-btn">Login</button>
      </form>
    </div>
  )
}

export default Login



