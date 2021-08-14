import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { HomeScreen } from "../pages/HomeScreen";
import { LoginScreen } from "../pages/LoginScreen";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Login" component={LoginScreen} />
        <Route path="/" component={HomeScreen} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
