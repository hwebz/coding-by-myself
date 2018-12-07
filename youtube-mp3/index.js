var youtubedl = require('youtube-dl');
var fs = require('fs');
var output = 'myvideo.mp4';
 
var downloaded = 0;
if (fs.existsSync(output)) {
  downloaded = fs.statSync(output).size;
}
 
var video = youtubedl('https://www.youtube.com/watch?v=5WN19l18Eo8',
 
  // Optional arguments passed to youtube-dl.
  ['--format=18'],
 
  // start will be sent as a range header
  { start: downloaded, cwd: __dirname });
 
// Will be called when the download starts.
video.on('info', function(info) {
  console.log('Download started');
  console.log('filename: ' + info._filename);
 
  // info.size will be the amount to download, add
  var total = info.size + downloaded;
  console.log('size: ' + total);
 
  if (downloaded > 0) {
    // size will be the amount already downloaded
    console.log('resuming from: ' + downloaded);
 
    // display the remaining bytes to download
    console.log('remaining bytes: ' + info.size);
  }
});
 
video.pipe(fs.createWriteStream('myvideo.mp4', { flags: 'a' }));
video.on('data', function(info) {
    'use strict';
    console.log('filename: ' + info);
  });
// Will be called if download was already completed and there is nothing more to download.
  'use strict';
  console.log('filename: ' + info._filename + ' already downloaded.');
});
 
video.on('end', function() {
  console.log('finished downloading!');
});
