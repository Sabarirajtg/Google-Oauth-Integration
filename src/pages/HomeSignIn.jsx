import { Button } from "@mui/material";
import React from "react";
import GoogleAuth from "../components/GoogleAuth";
import Login from "../components/Login";
import { Link } from "react-router-dom";
import "../css/loginCss.css";

export default function HomeSignIn() {
  return (
    <>
      <Login />
      <div className="google-auth-btn">
        <h4 className="login-content">Please sign in with Google</h4>
        <GoogleAuth />
      </div>
      <div>
        <Link
          to="/userDetails"
          className="redirect-content"
          style={{ textDecoration: "none" }}
        >
          <Button>
            Click here <br />
            if the page does not redirect automatically
          </Button>
        </Link>
      </div>
    </>
  );
}
