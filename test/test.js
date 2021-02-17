var express = require('express');
var router = express.Router();

// intialize firebase
var firebase = require('firebase');

firebase.initializeApp({
  "databaseURL": "https://seats-89a8c-default-rtdb.firebaseio.com/"
})

var dbRef = firebase.database().ref("user");

dbRef.set({
    username:"test"
})

// repeat with the interval of 2 seconds
// let timerId = setInterval(() => console.log('tick'), 43200000 );

// after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);