"use strict";

var React = require('react');
var Router = require('react-router');
var toastr = require('toastr');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');

var ManageAuthorPage = React.createClass({
    mixins: [
        Router.Navigation
    ],
    statics: {
        willTransitionFrom(transition, component) {
            if (component.state.dirty && !confirm('Leave without saving?')) {
                transition.abort();
            }   
        }
    },
    getInitialState() {
        return {
            author: {
                id: '',
                firstName: '',
                lastName: ''
            },
            errors: {
                firstName: {
                    empty: '',
                    minlength: '',
                    maxlength: '',
                    inValidField: 'empty'
                },
                lastName: {
                    empty: '',
                    minlength: '',
                    maxlength: '',
                    inValidField: 'empty'
                }
            },
            dirty: false
        }
    },
    componentWillMount() {
        var authorId = this.props.params.authorId;
        var self = this;
        if (authorId) {
            var author = AuthorApi.getAuthorById(authorId);
            self.setState({
                author: author
            });
        }
    },
    componentDidMount() {
        var authorId = this.props.params.authorId;
        var self = this;
        if (authorId) {
            Object.entries(self.state.author).forEach(([key, field]) => {
                if (field.length > 0) {
                    if (self.state.errors[key]) self.state.errors[key].inValidField = '';
                }
            });

            self.setState({
                errors: self.state.errors
            });
        }
    },
    setAuthorState(event) {
        var field = event.target.name;
        var value = event.target.value;

        if (value === '') {
            this.state.errors[field].empty = 'Please provide ' + field + '.';
            this.state.errors[field].inValidField = 'empty';
            this.setState({
                dirty: false
            });
        } else {
            this.state.errors[field].empty = '';
            this.state.errors[field].inValidField = '';
            this.setState({
                dirty: true
            });
        }

        this.state.errors[field].empty = value === '' ? 'Please provide ' + field + '.' : '';

        this.state.author[field] = value;
        return this.setState({
            author: this.state.author,
            errors: this.state.errors
        });
    },

    authorFormIsValid() {
        var isValidForm = true;

        Object.entries(this.state.errors).forEach(([key, field]) => {
            if (field.inValidField) {
                isValidForm = false;
            }
        });
        return isValidForm;
    },

    saveAuthor(e) {
        e.preventDefault();
        
        if (this.authorFormIsValid()) {
            this.setState({
                dirty: false
            });
            AuthorApi.saveAuthor(this.state.author);
            toastr.success('Author saved.');
            this.transitionTo('authors');
        }
    },

    render() {
        return(
            <div>
                <AuthorForm author={this.state.author} onChange={this.setAuthorState} errors={this.state.errors} onSave={this.saveAuthor} />
            </div>
        );
    }
});

module.exports = ManageAuthorPage;