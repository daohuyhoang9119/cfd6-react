import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Hook/useAuth";

function PrivateRouter(props) {
  let { login } = useAuth();
  if (!login) {
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
}

export default PrivateRouter;
