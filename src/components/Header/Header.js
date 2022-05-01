import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Header = ({ isAdmin, isStudent, adminHandler, studentHandler }) => {
  const navigate = useNavigate();
  const AdminHandler = () => {
    adminHandler();
    navigate(isAdmin ? "/" : "admin");
  };
  const StudentHandler = () => {
    studentHandler();
    navigate("student");
  };
  return (
    <div className={classes.header}>
      <div className={classes.heading}>E-Library</div>
      {!isAdmin && !isStudent && (
        <div className={classes.button}>
          <button onClick={AdminHandler}>Admin</button>
          <button onClick={StudentHandler}>Student</button>
        </div>
      )}
      {isAdmin && (
        <div className={classes.button}>
          <span className={classes.heading__user}>
            <AccountCircleIcon />
            Admin
          </span>
          <button onClick={AdminHandler}>Logout</button>
        </div>
      )}
      {isStudent && (
        <div className={classes.button}>
          <span className={classes.heading__user}>
            <AccountCircleIcon />
            Siva
          </span>
          <button onClick={StudentHandler}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Header;
