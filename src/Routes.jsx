import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import userDetails from "./pages/userDetails";
import HomeSignIn from "./pages/HomeSignIn";

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
