"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render() {
        return(
            <nav className="navbar navbar-light bg-light mb-4">
                <Link className="navbar-brand" to="app">
                    <img src="images/pluralsight-logo.png" height="30" className="d-inline-block align-top" alt="Pluralsight Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="app">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="authors">Authors</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about">About</Link>
                        </li> 
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;