"use strict";

var React = require('react');

var Header = React.createClass({
    render() {
        return(
            <nav className="navbar navbar-light bg-light mb-4">
                <a className="navbar-brand" href="/#">
                    <img src="images/pluralsight-logo.png" height="30" className="d-inline-block align-top" alt="Pluralsight Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#authors">Authors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#about">About</a>
                        </li> 
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;