"use strict";

var React = require('react');
var Header = require('./common/header');
// var Home = require('./components/homePage');
// var Authors = require('./components/authors/authorPage');
// var About = require('./components/about/aboutPage');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
    // render() {
    //     let Child;

    //     switch(this.props.route) {
    //         case 'about':
    //             Child = About;
    //             break;
    //         case 'authors':
    //             Child = Authors;
    //             break;
    //         default:
    //             Child = Home;
    //             break;
    //     }

    //     return(
    //         <div className="container">
    //             <Header />
    //             <Child />
    //         </div>
    //     );
    // }
    render() {
        return(
            <div>
                <Header />
                <div className="container">
                    <RouteHandler />
                </div>
            </div>
        )
    }
});

module.exports = App;