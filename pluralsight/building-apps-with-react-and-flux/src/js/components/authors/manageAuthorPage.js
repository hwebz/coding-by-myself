"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');

var ManageAuthorPage = React.createClass({
    render() {
        return(
            <div>
                <AuthorForm />
            </div>
        );
    }
});

module.exports = ManageAuthorPage;