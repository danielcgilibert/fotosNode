import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { startChecking } from "../actions/auth";
import { HomeScreen } from "../pages/HomeScreen";
import { LoginScreen } from "../pages/LoginScreen";
import { RegisterScreen } from "../pages/RegisterScreen";

export const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch])
  
  return (
    <Router>
      <Switch>
        <Route path="/Login" component={LoginScreen} />
        <Route path="/Register" component={RegisterScreen} />
        <Route path="/" component={HomeScreen} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
