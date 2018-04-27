"use strict";

var React = require('react');

var Author = React.createClass({
    render() {
        return(
            <div>
                <h3>Author detail {this.props.params.authorId}</h3>
            </div>
        );
    }
});

module.exports = Author;