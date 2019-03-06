const eEmitter = require('events'); // events module from node

class emitter extends eEmitter {} // EventEmitter class extended

var myEmitter = new emitter(); // EventEmitter instance

myEmitter.on('event', function(arg1) {
    // do something when event emitted
    console.log('Hey, an event just occurred!');

    console.log("Mr.");
    console.log("Pick");
    // console.log("Piper");
    setImmediate(function() {console.log("Piper");});
    myEmitter.emit('error', new Error('whoops!'))
})

// or myEmitter.EventEmitter.addListener(event, function(arg1) {})

// Trigger a event
//EventEmitter.emit(event, arg1, arg2, ...)

myEmitter.emit('event');

// EventEmitter.removeAllListeners(event, arg1, arg2, ...);
// EventEmitter.removeListener(event, listener)