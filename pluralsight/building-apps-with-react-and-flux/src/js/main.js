$ = jQuery = require('jquery');
require('bootstrap');
var React = require('react');
var Header = require('./components/common/header');
var Home = require('./components/homePage');
var Authors = require('./components/authors/authorPage');
var About = require('./components/about/aboutPage');

(function(win) {
    "use strict";

    var App = React.createClass({
        render() {
            let Child;
    
            switch(this.props.route) {
                case 'about':
                    Child = About;
                    break;
                case 'authors':
                    Child = Authors;
                    break;
                default:
                    Child = Home;
                    break;
            }
    
            return(
                <div className="container">
                    <Header />
                    <Child />
                </div>
            );
        }
    });
    
    function render() {
        var route = win.location.hash.substr(1);
        React.render(<App route={route} />, document.getElementById('app'));
    }
    
    win.addEventListener('hashchange', render);
    render();
    
    //React.render(<App route='about' />, document.getElementById('app'));
})(window);