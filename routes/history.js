var express = require('express');
var router = express.Router();
var randomData = require('./randomData')

/* GET home page. */
router.get('/', function(req, res, next) {

  res.send(randomData.randomArr(10,20,3))
});


module.exports = router;
