import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="logo"></img>
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <Link to="/login">
            <Button
              variant="contained"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
              className="login"
            >
              {btnName}
            </Button>
          </Link>
        </ul>
      </div>
    </div>
  );
};
