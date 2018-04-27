$ = jQuery = require('jquery');
require('bootstrap');
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.getElementById('app'));
});

// Remove hash tag on URL using browser history
// All the request must be to index page (not sub-page at the first time)
// IE 10+ supported
// Router.run(routes, Router.HistoryLocation, function(Handler) {
//     React.render(<Handler />, document.getElementById('app'));
// });

// (function(win) {
//     "use strict";

    
    
//     function render() {
//         var route = win.location.hash.substr(1);
//         React.render(<App route={route} />, document.getElementById('app'));
//     }
    
//     win.addEventListener('hashchange', render);
//     render();
    
//     //React.render(<App route='about' />, document.getElementById('app'));
// })(window);