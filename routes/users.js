var express = require('express');
var router = express.Router();
var firebase = require('firebase');

firebase.initializeApp({
  "databaseURL": "https://seats-89a8c-default-rtdb.firebaseio.com/"
})

class users{
  constructor(occupiedSeats,totalSeats){
    this.occupiedSeats = occupiedSeats;
    this.totalSeats = totalSeats;
    this.violators = violators;
  }
}

var dbRef = firebase.database().ref("user");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.get('/add',function(req,res,next) {
  console.log(req.query.name)
  var user = req.query.name;
  firebase.database().ref('users/' + user).set({
    username: user,
    seat: true
  });
  
res.render('index',{title: 'Seats'})
});

module.exports = router;
