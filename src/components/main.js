import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingPage";
import HtmlPage from "./htmlPage";
import CssPage from "./cssPage";
import PythonPage from "./pythonPage";
import Login from "./login";
import SignIn from "./signIn";

const Main = () => (
  <Switch>
    <Route exact path="/landingPage" component={LandingPage} />
    <Route path="/htmlPage" component={HtmlPage} />
    <Route path="/cssPage" component={CssPage} />
    <Route path="/pythonPage" component={PythonPage} />
    <Route path="/login" component={Login} />
    <Route path="/signin" component={SignIn} />
  </Switch>
);

export default Main;
