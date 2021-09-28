import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router";

const LOGIN_DATA = "loginData";

export default function GoogleAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseGoogle = (response) => {
    localStorage.setItem(LOGIN_DATA, JSON.stringify(response.profileObj));
    if (response) {
      setIsLoggedIn(true);
    }
  };
  if (isLoggedIn) {
    return <Redirect to="/userDetails" />;
  }

  return (
    <div>
      <GoogleLogin
        clientId="144751298604-r23utkf1a497n1666ntq0mc27i9sfagc.apps.googleusercontent.com"
        buttonText="Sign in with Google Account"
        onSuccess={responseGoogle}
        // onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <br />
      
    </div>
  );
}
