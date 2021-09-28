import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import Form from "./Form";

const LOGIN_DATA = "loginData";

export default function GoogleAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseGoogle = (response) => {
    localStorage.setItem(LOGIN_DATA, JSON.stringify(response.profileObj));
    if (response) {
      setIsLoggedIn(true);
    }
  };


  return (
    <div>
      <GoogleLogin
        clientId="144751298604-r23utkf1a497n1666ntq0mc27i9sfagc.apps.googleusercontent.com"
        buttonText="Sign in with Google Account"
        onSuccess={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <br />
      <div style={{ marginLeft: "-75%" }}>{isLoggedIn && <Form />}</div>
    </div>
  );
}
