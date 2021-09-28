import React from "react";
import GoogleAuth from "../components/GoogleAuth";
import Login from "../components/Login";
import "../css/loginCss.css";

export default function HomeSignIn() {
  return (
    <>
      <Login />
      <div className="google-auth-btn">
        <h4 className="login-content">Please sign in with Google</h4>
        <GoogleAuth />
        <br />
        <br />
      </div>
    </>
  );
}
