import React, { useState } from "react";
import classes from "./Login.module.css";
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import validator from "validator";
import { useNavigate } from "react-router-dom";
const Login = ({ adminHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (validator.isEmail(email) && password.trim().length >= 8) {
      adminHandler();
      navigate("/admin");
    }
    if (validator.isEmail(email)) {
      setEmailError("");
    }
    if (!validator.isEmail(email)) {
      setEmailError("*Enter valid email");
    }
    if (password.trim().length >= 8) {
      setPasswordError("");
    }
    if (password.trim().length < 8) {
      setPasswordError("*password length should be greater than 7");
    }
  };
  return (
    <div className={classes.login}>
      <div className={classes.title}>Admin</div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.input}>
          <EmailIcon className={classes.icon} />
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={classes.input}>
          <VpnKeyIcon className={classes.icon} />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={classes.button}>
          <button type="submit">Login</button>
        </div>
      </form>
      <div className={classes.alert}>{emailError}</div>
      <div className={classes.alert}>{passwordError}</div>
    </div>
  );
};

export default Login;
