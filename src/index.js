import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



const firebase = require('firebase');
require('firebase/firestore');
var firebaseConfig = {
  apiKey: "AIzaSyCqkztTvXi32WaxDTkB-tXP1qQqpfXFwE0",
  authDomain: "noteapp-c1641.firebaseapp.com",
  databaseURL: "https://noteapp-c1641.firebaseio.com",
  projectId: "noteapp-c1641",
  storageBucket: "noteapp-c1641.appspot.com",
  messagingSenderId: "336672605697",
  appId: "1:336672605697:web:d74a5bfbf8785aff716200"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
