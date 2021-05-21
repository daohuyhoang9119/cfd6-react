import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Hook/useAuth";
import { useSelector } from "react-redux";

function PrivateRouter(props) {
  let { login } = useSelector((store) => store.authReducer);
  if (!login) {
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
}

export default PrivateRouter;
