import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Start from "./pages/Start";
import Room from "./pages/Room";
import GamePlay from "./pages/GamePlay";

function App() {
  return (
      <div className="App">
      <Router>
      <div>
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Start />
          </Route>
          <Route path="/users">
            <Room />
          </Route>
          <Route path="/">
            <GamePlay />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  
    
  );
}

export default App;
