import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";
import Login from "../pages/login";

// context
// import { useUserState } from "../context/UserContext";

import { useAuthState } from '../context/auth';

export default function App() {
  // global
  const authState = useAuthState();

  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} /> */}
        {/* <Route exact path="/app" render={() => <Redirect to="/app/dashboard" />} /> */}
        <Route path="/app" component={Layout} />
        <Route path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </Router>
  );

  // #######################################################################

  function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          authState.accessToken ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
          )
        }
      />
    );
  }
}
