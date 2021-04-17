import "./styles.css";
import React from 'react';
import "./styles.css";
import "firebase/firestore";
import "firebase/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { Login, auth } from "./auth.js";
import Navbar from "./navbar.js";
import Goal from "./goals.js"


export default function App() {
  const [ user ] = useAuthState(auth);
  return (
    <div className="App">
      <Navbar />
      <Router>
          <Switch>
            <Route exact path="/" component={user ? Goal : Login} />
          </Switch>
      </Router>
    </div>
  );
}
