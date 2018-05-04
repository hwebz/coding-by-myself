"use strict";

var React = require('react');
//var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');
var Link = require('react-router').Link;
var AuthorStore = require('../../stores/authorStore');
var AuthorActions = require('../../actions/authorActions');

var Authors = React.createClass({

    getInitialState() {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },
    // componentWillMount() {
    // //componentDidMount() {
    //     //if (this.isMounted()) {
    //         this.setState({
    //             // authors: AuthorApi.getAllAuthors()
    //             authors: AuthorStore.getAllAuthors()
    //         });
    //     //}
        
    // },
    _onChange() {
        debugger;
        this.setState({
            authors: AuthorStore.getAllAuthors()
        });
    },
    componentWillMount() {
        AuthorStore.addChangeListener(this._onChange);
    },
    componentWillUnmount() {
        AuthorStore.removeChangeListener(this._onChange);
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