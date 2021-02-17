var express = require('express');
var router = express.Router();
var firebase = require('firebase');

firebase.initializeApp({
  "databaseURL": "https://seats-89a8c-default-rtdb.firebaseio.com/"
})
/* GET home page. */
router.get('/', function(req, res, next) {

  var 

  res.render('index', { title: 'Seats' });
});


var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
starCountRef.on('value', (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});

module.exports = router;
