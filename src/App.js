import "./styles.css";
import React from 'react';
import "./styles.css";
import "firebase/firestore";
import "firebase/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import "./auth.js";
import { Login, Logout, auth } from "./auth.js";


export default function App() {
  const [ user ] = useAuthState(auth);
  return (
    <div className="App">
    <Router>
      <div className="App">
        <Logout />
        <Switch>
          <Route exact path="/" component={user ? MainPage : Login} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

function MainPage() {
  return (
      <div>
          <p>Hello!</p>
      </div>
  )
}