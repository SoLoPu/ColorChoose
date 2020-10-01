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
import Ranking from './pages/Ranking'

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
  { id: 1, rank: 1, name: "Leanne Graham" },
  { id: 2, rank: 2, name: "Ervin Howell" },
  { id: 3, rank: 3, name: "Clementine Bauch" },
  { id: 4, rank: 4, name: "Patricia Lebsack" },
  { id: 5, rank: 5, name: "Patricia Lebsack" },
  { id: 6, rank: 6, name: "Patricia Lebsack" },
  { id: 7, rank: 7, name: "Patricia Lebsack" },
  { id: 8, rank: 8, name: "Patricia Lebsack" },
  { id: 9, rank: 9, name: "Patricia Lebsack" },
  { id: 10, rank: 10, name: "Patricia Lebsack" },
  { id: 11, rank: 11, name: "Patricia Lebsack" },

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
