var fs = require('fs');
var Transform = require('stream').Transform;

fs.createReadStream(process.argv[2])
  .pipe(toUpper())
  .pipe(process.stdout)

function toUpper() {
  return new Transform({
    transform: function write (buf, enc, next) {
      next(null, buf.toString().toUpperCase())
    }
  })
}

