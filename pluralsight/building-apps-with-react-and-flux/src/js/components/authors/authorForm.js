"use strict";

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
    propTypes: {
        author: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },
    render() {
        var { author } = this.props;
        return(
            <div>
                <h3>Manage Author</h3>

                <form method="POST">
                    <div className="form-row">
                        <Input wrapperClass='col-md-6 mb-3' name='firstName' label='First name' placeholder='Enter first name' value={author.firstName} onChange={this.props.onChange} error={this.props.errors}/>
                    </div>
                    <div className="form-row">
                        <Input wrapperClass='col-md-6 mb-3' name='lastName' label='Last name' placeholder='Enter last name' value={author.lastName} onChange={this.props.onChange} error={this.props.errors}/>
                    </div>
                    <input type="submit" className="btn btn-primary" onClick={this.props.onSave} value="Save" />
                </form>
            </div>
        );
    }
});

module.exports = AuthorForm;