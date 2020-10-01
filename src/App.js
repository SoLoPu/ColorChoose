import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './pages/RoomPage/Room.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Start from "./pages/Start";
import Room from "./pages/RoomPage/Room";
import GamePlay from "./pages/GamePlay";
import Ranking from './pages/Ranking';

// var firebaseConfig = {
//   apiKey: "AIzaSyA89-IMEI0PP8YB3H5zWqMkg3ZvTRWoGiQ",
//   authDomain: "beaming-theorem-269908.firebaseapp.com",
//   databaseURL: "https://beaming-theorem-269908.firebaseio.com",
//   projectId: "beaming-theorem-269908",
//   storageBucket: "beaming-theorem-269908.appspot.com",
//   messagingSenderId: "1035141791361",
// };
// firebase.initializeApp(firebaseConfig);
// // const database = firebase.firestore();
// const firebaseDb = firebase.database().ref().child('object')
// firebaseDb.on('value', snap => {
//   console.log(snap.val())
// }) 

let users = [
  { id: "1", point: 1000, name: "Leanne Graham" },
  { id: "2", point: 900, name: "Ervin Howell" },
  { id: "3", point: 800, name: "Clementine Bauch" },
  { id: "4", point: 720, name: "Patricia Lebsack" },
  { id: "5", point: 700, name: "Patricia Lebsack" },
  { id: "6", point: 520, name: "Patricia Lebsack" },
  { id: "7", point: 450, name: "Patricia Lebsack" },
  { id: "8", point: 200, name: "Patricia Lebsack" },
  { id: "9", point: 110, name: "Patricia Lebsack" },
  { id: "10", point: 90, name: "Patricia Lebsack" },
  { id: "11", point: 50, name: "Patricia Lebsack" }
];

if(users.length > 10){
  users = users.slice(0, 10)
}

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/ranking">
              <Ranking users={users}/>
            </Route>
            <Route path="/gameplay">
              <GamePlay />
            </Route>
            <Route path="/room">
              <Room />
            </Route>
            <Route path="/ranking">
              <Ranking />
            </Route>
            <Route path="/">
              <Start />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
