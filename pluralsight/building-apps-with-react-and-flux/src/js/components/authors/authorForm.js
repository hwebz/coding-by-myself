"use strict";

var React = require('react');

var AuthorForm = React.createClass({
    render() {
        return(
            <div>
                <h3>Manage Author</h3>

                <form>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label for="#fName">First name</label>
                            <input type="text" className="form-control is-valid" id="fName" placeholder="Enter first name" required />
                            <div className="valid-feedback">
                                Please provide first name.
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label for="#lName">Last name</label>
                            <input type="text" className="form-control is-invalid" id="lName" placeholder="Enter last name" required />
                            <div className="invalid-feedback">
                                Please provide last name.
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
});

module.exports = AuthorForm;