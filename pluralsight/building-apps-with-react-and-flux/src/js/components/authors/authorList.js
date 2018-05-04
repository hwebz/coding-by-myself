"use strict";

var React = require('react');
var Link = require('react-router').Link;
var AuthorActions = require('../../actions/authorActions');
var toastr = require('toastr');

var AuthorList = React.createClass({

    propTypes: {
        authors: React.PropTypes.array.isRequired
    },

    deleteAuthor(id, event) {
        debugger;
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.success('Author Deleted');
    },

    render() {
        let createAuthorRow = (author) => {
            return(
                <tr key={author.id}>
                    <td><Link to="authorsDetail" params={{authorId: author.id}}>{author.id}</Link></td>
                    <td>{author.firstName}</td>
                    <td>{author.lastName}</td>
                    <td><button className="btn btn-danger" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</button></td>
                </tr>
            );
        };

        return(
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.authors.map(createAuthorRow, this)}
                </tbody>
            </table>
        );
    }
});

module.exports = AuthorList;