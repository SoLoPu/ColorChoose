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
          <Route path="/gameplay">
            <GamePlay />
          </Route>
          <Route path="/room">
            <Room/>
          </Route>
          <Route path="/">
            <Start/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  
    
  );
}

export default App;
