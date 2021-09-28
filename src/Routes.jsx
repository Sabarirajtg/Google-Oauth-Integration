import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeSignIn from "./pages/HomeSignIn";
import userDetails from "./pages/userDetails";

export default function Routes() {
  return (
    <>
      <Router>
        <Route exact path="/" component={HomeSignIn} />
        <Route path="/userDetails" component={userDetails} />
      </Router>
    </>
  );
}
