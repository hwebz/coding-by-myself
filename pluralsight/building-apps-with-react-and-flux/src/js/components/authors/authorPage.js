"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({

    getInitialState() {
        return {
            authors: []
        };
    },
    componentWillMount() {
        this.setState({
            authors: AuthorApi.getAllAuthors()
        });
    },
    render() {
        var createAuthorRow = (author) => {
            return(
                <tr key={author.id}>
                    <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                    <td>{author.firstName}</td>
                    <td>{author.lastName}</td>
                </tr>
            );
        };

        return(
            <div>
                <h3>Authors Page</h3>
                
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Authors;