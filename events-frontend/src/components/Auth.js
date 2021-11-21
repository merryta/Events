import React from "react";
import Login from "./Login";
import Registration from "./Registration";

const Auth = () => {
    const [auth, setAuth] = React.useState(true);

    const displayLoginPage = (e) => {
        e.preventDefault();
        setAuth(true);
    }

    const displayRegisterPage = (e) => {
        e.preventDefault();
        setAuth(false);
    }
    return (
        <div className="Auth-container">
            <div className="auth-form">
                <div className="auth-form__header">
                    <h2 className="form__header" onClick={displayLoginPage}>Login</h2>
                    <h2 className="form__header" onClick={displayRegisterPage}>Register</h2>
                </div>
                <div className="auth-form__body">
                    {auth ? <Login /> : <Registration />}
                </div>
            </div>
        </div>
    )

};

export default Auth;