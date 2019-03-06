/*
    4 Types of Stream:
    +, Readable
    +, Writable
    +, Duplex
    +, Transform
*/

const fs = require('fs');

const readableStream = fs.createReadStream('readTextFile.txt');

const writableStream = fs.createWriteStream('writeTextFile.txt');

readableStream.on('data', function(data) {
    console.log('Hey!, I am about to write what has been read from the file readTextFile.txt');
    console.log('Reading data: ' + data);
    if (writableStream.write(data) === true) {
        console.log('Writing data: ' + data);
    } else {
        console.log('Writing data: ' + data + ' not successful');
    }
})

readableStream.on('end', function() {
    console.log('Hey!, Am Done reading Data');
})

// end(), setEncoding(), pipe(), pause(), resume(), unpipe()