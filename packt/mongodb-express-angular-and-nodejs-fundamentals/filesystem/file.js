const fs = require('fs');

var text = ' Hey Jogn, Welcome to Packt class.';

fs.readFile('readFileName.txt', function(err, data) {
    if (err) throw err;

    console.log('Read!');
});

fs.appendFile('newTextFile.txt', text, function(err) {
    if (err) throw err;
    console.log('Saved');
});

fs.open('newlyTextFile.txt', 'w', function(err, file) {
    if (err) throw err;
    // let's assume the file doesn't exist
    console.log('An empty file created');
});

fs.writeFile('newTextFile.txt', text, function(err) {
    if (err) throw err;
    console.log('Writed successfully!');
})

fs.unlink('newlyTextFile.txt', function(err) {
    if (err) throw err;
    console.log('File deleted!');
})

fs.rename('newTextFile.txt', 'renamedTextFile.txt', function(err) {
    if (err) throw err;
    console.log('File Renamed!');
})

// access(), close(), exists(), fstat(), link(), mkdir(), readdir(), rmdir(), stat(), truncate(), watch()