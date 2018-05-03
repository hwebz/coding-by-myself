"use strict";

var React = require('react');

var Input = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string,
        error: React.PropTypes.object
    },

    render() {
        var wrapperClass = '';
        var notificationClass = '';
        if (this.props.error[this.props.name].inValidField.length > 0) {
            wrapperClass = 'form-control is-invalid';
            notificationClass  = 'invalid-feedback';
        } else {
            wrapperClass = 'form-control is-valid';
            notificationClass = 'valid-feedback';
        }

        return(
            <div className={this.props.wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input type="text" 
                        className={wrapperClass} 
                        id={this.props.name}
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        required 
                        value={this.props.value}
                        ref={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onChange} />
                <div className={notificationClass}>
                    {this.props.error[this.props.name][this.props.error[this.props.name].inValidField]}
                </div>
            </div>
        );
    }
});

module.exports = Input;