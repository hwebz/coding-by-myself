var times = ["00:00", "00:55", "09:50", "07:15", "12:36", "05:18", "03:41", "02:35", "08:59", "09:46", "01:58", "04:33", "07:11", "08:30", "01:31", "08:36", "13:57", "06:15", "15:46", "06:30", "10:20", "07:38", "30:45", "05:35", "06:32", "05:01", "17:50", "11:30", "08:39", "03:34", "38:46", "17:26", "00:39"];
var timesConverted = [];
var titles = ["Course Introduction", "Your First Web Page", "Finding a Proper Code Editor", "Lists", "Parent-Child Relationships", "Heading Tags", "Blockquotes", "Anchors", "Your First Stylesheet", "Clean Project Structures", "Images", "The Necessity of Divs", "IDs and Classes", "An Assignment", "Assignment Solutions", "Floats, and a Simple Layout", "Navigation Lists", "An Introduction to Forms", "Image Replacement", "The Basics of Typography", "The Difference Between Relative and Absolute Positioning", "Reproduce a Website Fragment", "The Importance of Validation", "Zen Coding", "Resets and Normalizing", "CSS Frameworks", "Creating the Markup", "How to Slice a PSD", "How to Create Snippets", "The CSS For Our Website", "Completing the Website", "Conclusion"];
const moment = require('moment');

const fs = require('fs');
const stream = fs.createWriteStream('durations.txt');

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
