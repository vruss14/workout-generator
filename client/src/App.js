import React from "react";
import "./App.css";
import Landing from "./pages/landing.js";
import Login from "./pages/login.js";
import CreateAccount from "./pages/createAccount.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/create-account">
          <CreateAccount />
        </Route>

        {/* <Route>
          <PageNotFound />
          <Footer />
        </Route> */}

      </Switch>
  </Router>
  );
}


export default App;
