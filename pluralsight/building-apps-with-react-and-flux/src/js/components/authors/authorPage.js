"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');
var Link = require('react-router').Link;

var Authors = React.createClass({

    getInitialState() {
        return {
            authors: []
        };
    },
    componentWillMount() {
    //componentDidMount() {
        //if (this.isMounted()) {
            this.setState({
                authors: AuthorApi.getAllAuthors()
            });
        //}
        
    },
    render() {

        return(
            <div>
                <h3>Authors Page</h3>
                <Link to="addAuthor" className="btn btn-primary mb-2">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = Authors;