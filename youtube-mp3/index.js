var youtubedl = require('youtube-dl');
var fs = require('fs');
var http = require('http');
var readline = require('readline');
var stream = require('stream');
var output = '';
var size = 0;
var pos = 0;

var instream = fs.createReadStream('./links.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

var links = [];

var downloaded = 0;
if (fs.existsSync(output)) {
  downloaded = fs.statSync(output).size;
}


Array.prototype.pluck = function(prop) {
    return this.map(function(x) {
        return x[prop];
    })
}

var index = 12;
function download() {
  if (index >= links.length) return;

  var video = youtubedl(links[index],
  
    // Optional arguments passed to youtube-dl.
    // ['--format=18'],
    ['--format=best'],
  
    // start will be sent as a range header
    { start: downloaded, cwd: __dirname });
  
    Array.prototype.max = function() {
      return this.reduce(function(a, b) {
          return a > b ? a : b;
      })
  }

  // Will be called when the download starts.
  video.on('info', function(info) {
    console.log('Download started');
    console.log('filename: ' + info._filename);
    output = info._filename;
    size = info.size;
    // info.size will be the amount to download, add
    var total = info.size + downloaded;
    console.log('size: ' + total);
    console.log('thumbnail: ' + info.thumbnail);
    http.get(info.thumbnail.replace('https', 'http'), function(res) {
      res.pipe(fs.createWriteStream(info.fulltitle + info.thumbnail.match(/.[a-zA-Z]{3,4}$/)[0]));
    });
    var mp4Only = info.formats.filter(format => format.ext == 'mp4' && format.acodec != 'none');
    var maxFormat = mp4Only.pluck('width').max();
    var maxFormatObj = mp4Only.filter(format => format.width == maxFormat);
    console.log('video: ' + maxFormatObj.format + ', audio: ' + maxFormatObj.acodec);
  
    if (downloaded > 0) {
      // size will be the amount already downloaded
      console.log('resuming from: ' + downloaded);
  
      // display the remaining bytes to download
      console.log('remaining bytes: ' + info.size);
    }

    video.pipe(fs.createWriteStream(output));
  });
  

  video.on('data', function(chunk) {
    'use strict';
    pos += chunk.length;

    // `size` should not be 0 here.
    if (size) {
      var percent = (pos / size * 100).toFixed(2);
      process.stdout.write('Downloading ' + percent + '% complete... \r');
    }
  });
  
  video.on('end', function() {
    console.log('finished downloading!');

    pos = 0;
    index++;
    download();
  });
}

rl.on('line', function(line) {
  // process line here
  links.push(line);
});

rl.on('close', function() {
  // do something on finish here
  download();
});