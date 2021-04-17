import "./styles.css";
import React from 'react';
import "firebase/firestore";
import "firebase/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "./auth.js";
import Navbar from "./non-essential-content/navbar.js";
import Goal from "./non-essential-content/goals.js";
import About from "./non-essential-content/about.js";
import Tips from "./non-essential-content/tips.js";
import AboutLoggedOut from "./non-essential-content/aboutLoggedOut.js";

export default function App() {
  const [ user ] = useAuthState(auth);
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={user ? Goal : AboutLoggedOut} />
          <Route exact path="/about" component={user ? About : AboutLoggedOut} />
          <Route exact path="/tips" component={Tips} />
        </Switch>
      </Router>
    </div>
  );
}
