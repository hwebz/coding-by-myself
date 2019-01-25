var times = ["00:00", "17:48", "16:23", "05:15", "19:37", "18:48", "18:16", "17:05", "15:40", "13:52", "19:17", "20:00", "11:25", "10:48", "16:11", "19:55", "15:04", "19:48", "15:51", "12:22", "19:16", "19:07", "19:56", "01:34"];
var timesConverted = [];
var titles = ["036 Developing a Neural Network that Plays Pong Part 1", "037 Developing a Neural Network that Plays Pong Part 2", "038 Developing a Neural Network that Plays Pong Part 3", "040 Gathering Training Data from the Player Part 1", "041 Gathering Training Data from the Player Part 2", "042 Training with Player Data Part 1", "044 Training with Player Data Part 2", "045 Training with Player Data Part 3", "046 Reinforcement Learning and Q-Networks", "047 Training a Neural Network with Q-Learning Part 1", "048 Training a Neural Network with Q-Learning Part 2", "049 Training a Neural Network with Q-Learning Part 3", "050 Challenge", "055 An Overview of ML-Agents", "057 Creating an ML-Agent From Scratch Part 1", "058 Creating an ML-Agent From Scratch Part 2", "060 An Avoiding ML-Agent Part 1", "061 An Avoiding ML-Agent Part 2", "063 Top 10 Tips for Neural Network Best Practice", "064 Environment Sensing ML-Agent", "065 Goal Seeking Wall Jumping Part 1", "066 Goal Seeking Wall Jumping Part 2", "068 Thank you"];
const moment = require('moment');

const fs = require('fs');
const stream = fs.createWriteStream('durations-final.txt');

for(var i = 0; i < times.length; i++) {
    var tm = times[i].split(':');

    if (tm.length > 2) {
        timesConverted.push(parseInt(tm[0]) * 3600 + parseInt(tm[1]) * 60 + parseInt(tm[2]));
    } else {
        timesConverted.push(parseInt(tm[0]) * 60 + parseInt(tm[1]));
    }
}

function durationConverter(duration) {
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    hours = Math.floor(duration / 3600);
    minutes = Math.floor((duration - hours * 3600) / 60);
    seconds = Math.floor(duration - ((hours * 3600) + (minutes * 60)));

    return '' + (hours > 0 ? ((hours > 9 ? hours : '0' + hours) + ':') : '') + (minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds > 9 ? seconds : '0' + seconds)
}

var duration = 0;
stream.once('open', function() {
    for(var i = 0; i < titles.length; i++) {
        duration += timesConverted[i];
        stream.write(durationConverter(duration) + ' ' + titles[i] + '\n');
    }
    stream.end();
});
