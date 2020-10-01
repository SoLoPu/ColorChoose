import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase/app";


function App() {
  var firebaseConfig = {
    apiKey: "AIzaSyA89-IMEI0PP8YB3H5zWqMkg3ZvTRWoGiQ",
    authDomain: "beaming-theorem-269908.firebaseapp.com",
    databaseURL: "https://beaming-theorem-269908.firebaseio.com",
    projectId: "beaming-theorem-269908",
    storageBucket: "beaming-theorem-269908.appspot.com",
    messagingSenderId: "1035141791361",
  };
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
