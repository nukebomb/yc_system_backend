var express = require('express');
var router = express.Router();

router.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
})

var randomSettedPoints = (function() {
  let reuslt = {
    location: null,
    pm10: null,
    color: null,
    
  }
})()

router.get('/', function(req, res) {
  res.json({
    data: [
     
      {
        id: '1440-0028-sclw-2814', // 最右端
        color: 'yellow',
        location: 'xxx区新兴路yy号',
        rank: '1级',
        positionX: 104.17795346,
        positionY: 30.67994585
      },
      {
        id: 'XHHB-Y0017040100175', // 最下最左
        color: 'yellow',
        location: 'xxx区新兴路yy号',
        rank: '1级',
        positionX: 104.01795346,
        positionY: 30.61994585
      },
  
      {
        id: 'Y0028152017154', // 最上
        color: 'blue',
        location: 'xxx区新兴路yy号',
        rank: '0级',
        positionX: 104.11795346,
        positionY: 30.70994585
      },
      
    ]
  })
}) 


module.exports = router