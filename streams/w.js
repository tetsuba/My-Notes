var fs = require('fs');
var w = fs.createWriteStream('cool.txt');
w.once('finish', function () {
  console.log('FINISHED');
})
w.write('hi\n')
w.write('wow\n')
w.end()
