const fs = require('fs')


const readColours = () => {
  var rStream = fs.createReadStream('colours.json');
  rStream.on('data', (data) => { console.log('<-', data.toString()) })
}


