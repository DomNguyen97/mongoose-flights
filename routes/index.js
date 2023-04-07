var express = require('express');
var router = express.Router();

// This app has no "home" page, but your projects should 😀
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

module.exports = router;


// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
// 	res.redirect('/flights');
// });

// module.exports = router; 


