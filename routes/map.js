var fs = require('fs')
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

// 创建点位信息，并保存为json文件，用于调用，每次运行默认不运行
// var randomSettedPoints = (function () {
//   let result = []
//   var colors = ['yellow','red','green', 'blue']
//   var maxWidth = 10417795346 - 10401795346
//   var maxHeight = 3070994585 - 3061994585
//   for (var i = 0; i < 80; i++) {
//     result.push({

//       location: 'xx-路-号',
//       pm10: Math.floor(Math.random() * 200) + 1,
//       color: colors[Math.floor(Math.random() * 4)],
//       positionX: (10401795346 + Math.floor(Math.random() * maxWidth) +1) / 100000000 ,
//       positionY: (3061994585 + Math.floor(Math.random() * maxHeight) + 1) / 100000000
//     })
//   }
//   fs.writeFile('./points.json',JSON.stringify(result))
//   return result
// })()



router.get('/', function (req, res) {
  var data = fs.readFile('./points.json', function(err, data) {
    if(err) {
      return console.log(err)
    }
    res.json(
      JSON.parse(data)
    )
  })
})


module.exports = router