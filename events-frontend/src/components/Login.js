import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate('pathname');
  const [user, setUser] = React.useState({
    email: "",
    password: ""
  })

  const handleChange = e => {
    const {name, value} = e.target;
    setUser({...user, [name]:value})
  };

  const login = () => {
    axios.post("http://localhost:5000/login", user);
    console.log(user).then((res) => {
      alert(res.data.message);
      navigate.push("/");
    });
  };

  useEffect(() => {
                                                                                                                                                                                                                                                                                                                                          
  }, [])

  
  return (
    <div className="login-container">
      <h2>Sign In</h2>
      <form className="login-form">
        <label>
          Email:
          <input type="email" name="email" value={user.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={user.password} onChange={handleChange} />
        </label>
        <button className="login-btn" onClick={login}>Login</button>
      </form>
    </div>
  );
};

export default Login;
