import React from "react";
import "./App.css";
import Landing from "./pages/landing.js";
import Login from "./pages/login.js";
import CreateAccount from "./pages/createAccount.js";
import GetStartedPage from "./pages/getStarted";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BeginnerExercises from "./pages/beginnerExercises";
import IntermediateExercises from "./pages/intermediateExercises.js";
import AdvancedExercises from "./pages/advancedExercises.js";
import YourWorkout from "./pages/yourWorkout.js";

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

        <Route exact path="/get-started">
          <GetStartedPage />
        </Route>

        <Route exact path="/gentle-exercises">
          <BeginnerExercises />
        </Route>

        <Route exact path="/moderate-exercises">
          <IntermediateExercises />
        </Route>

        <Route exact path="/advanced-exercises">
          <AdvancedExercises />
        </Route>

        <Route exact path="/your-workout">
          <YourWorkout />
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
