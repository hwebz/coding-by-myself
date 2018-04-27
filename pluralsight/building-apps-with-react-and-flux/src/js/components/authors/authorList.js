"use strict";

var React = require('react');
var Link = require('react-router').Link;

var AuthorList = React.createClass({

    propTypes: {
        authors: React.PropTypes.array.isRequired
    },

    render() {
        var createAuthorRow = (author) => {
            return(
                <tr key={author.id}>
                    <td><Link to={"/author/" + author.id}>{author.id}</Link></td>
                    <td>{author.firstName}</td>
                    <td>{author.lastName}</td>
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