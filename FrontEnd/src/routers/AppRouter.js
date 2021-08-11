import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { HomeScreen } from "../pages/HomeScreen";

export const AppRouter = () => {
  return (
    <Router>
        <Switch>
          <Route
            path="/home"
            component={HomeScreen}
          />
          <Redirect to="/home" />
        </Switch>
    </Router>
  );
};
