const testFolder = '../../Done/Udemy2/';
const fs = require('fs');
const VideoLib = require('node-video-lib');
var stream = fs.createWriteStream('durations3.txt');
var duration = 0;

function durationConverter(duration) {
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    hours = Math.floor(duration / 3600);
    minutes = Math.floor((duration - hours * 3600) / 60);
    seconds = Math.floor(duration - ((hours * 3600) + (minutes * 60)));

    return '' + (hours > 0 ? ((hours > 9 ? hours : '0' + hours) + ':') : '') + (minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds > 9 ? seconds : '0' + seconds)
}
var i = 0;
stream.once('open', function() {
    fs.readdir(testFolder, (err, files) => {
        files.sort();
        setTimeout(function() {
            files.forEach(file => {
                fs.open(testFolder + file, 'r', function(err, fd) {
                    try {
                        let movie = VideoLib.MovieParser.parse(fd);
                        // Work with movie
                        // stream.write(durationConverter(duration) + " " + file.replace('.mp4', '') + '\n');
                        // stream.write('"' + durationConverter(duration) + '", ');
                        stream.write('"' + file.replace('.mp4', '') + '", ');
                        //duration += (movie.relativeDuration())
                        duration = (movie.relativeDuration())
                        i++;
                    } catch (ex) {
                        console.error('Error:', ex);
                    } finally {
                        fs.closeSync(fd);
                    }
                });
            });
        }, 1000);
    });
});