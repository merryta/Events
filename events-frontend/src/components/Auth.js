import React from "react";
import Login from "./Login";
import Registration from "./Registration";
import "../styles/Auth.css";

const Auth = () => {
  const [auth, setAuth] = React.useState(true);
  const displayRegisterPage = () => {
    setAuth(!auth);
  };
  const displayLoginPage = () => {
    setAuth(true);
  };
  return (
    <div className="Auth-container">
      <div className="Auth__body">
        <div className="Auth__header">
          <h2 onClick={displayLoginPage}>Login</h2>
          <h2 onClick={displayRegisterPage}>Register</h2>
        </div>
        <div className="Auth__content">{auth ? <Login /> : <Registration />}</div>
      </div>
    </div>
  );
};

export default Auth;
