
var randomData = {
  randomArr: function (start, end, length) {
    var result = []
    for (let i = 0; i < length; i++) {
      result.push(Math.floor(Math.random() * (end - start)) + start)
    }
    return result
  },
  createDateArr: function (start, end, length) {
    var result = []
    for (let i=0; i< length; i ++) {
      
    }
  }
}


module.exports = randomData;