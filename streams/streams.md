# Streams

node.js has a handy interface for shuffling data around called streams.


## Example
We can read a file and stream the file contents to stdout:
```js
var fs = require('fs')
fs.createReadStream('greetz.txt')
    .pipe(process.stdout)
``

## stream types
There are many kinds of streams. Seen two types already, transform (through2) and writable (concat-stream).

* readable - produces data: you can pipe FROM it
* writable - consumes data: you can pipe TO it
* transform - consumes data, producing transformed data
* duplex - consumes data separtely from producing data


## stream types in code
* readable: `readable.pipe(A)`
* writable: `A.pipe(writable)`
* transform: `A.pipe(transform).pipe(B)`
* duplex: `A.pipe(duplex).pipe(A)


## writable stream methods
we've seen .pipe() which is a method of all readable streams (readable, transform, and duplex).
Any stream you can write to (writable, transform, and duplex streans) has these methods:

* `.write(buf)`
* `.end()`
* `.end(buf)`
* `.on('finish,function () {})`
* `(...).pipe(stream)


## readable stream methods
* `stream.pipe(...)`
* `stream.once('end', function (){}`

you probably wont need to call these very often:
* `stream.read()`
* `stream.on('readable, function (){}`

you can let a module of `.pipe()` take care of calling those


## transform streams
readable and writable stream where:
```
input -> tranform -> output
```

All the readable and writable methods are available.


## duplex stream
If you see:
```
a.pipe(stream).pipe(a)
```
then you are dealing with a duplex stream.



## object streams
Normally you can only read and write buffers and strings with streams. However, if you
initialize a stream in 'objectMode', you can use any kind of object (except for 'null');

```
var through = require('through2');
var tr = through.obj(function (row, enc, next) {
  next(null, (row.n * 1000) + '\n')
});
tr.pipe(process.stdout)
tr.write({n: 5})
tr.write({n: 10})
tr.write({n: 3})
tr.end();
```



