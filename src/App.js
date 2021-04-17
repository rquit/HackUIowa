import "./styles.css";
import React from 'react';
import "./styles.css";
import "firebase/firestore";
import "firebase/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { Login, auth } from "./auth.js";
import Navbar from "./navbar.js";
import Goal from "./goals.js";
import About from "./about.js";
import Tips from "./tips.js";

export default function App() {
  const [ user ] = useAuthState(auth);
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={user ? Goal : Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/tips" component={Tips} />
        </Switch>
      </Router>
    </div>
  );
}
