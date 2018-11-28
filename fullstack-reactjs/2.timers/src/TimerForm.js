import React, {Component} from 'react';

class TimerForm extends Component {
    render() {
        const submitText = this.props.title ? 'Update' : 'Create';
        return(
            <div className="col-12 mb-2">
                <div className="card">
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" defaultValue={this.props.title} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="project">Project</label>
                            <input type="text" className="form-control" id="project" defaultValue={this.props.project} />
                        </div>
                        <div className="btn-group d-flex">
                            <button className="btn btn-primary w-100">{submitText}</button>
                            <button className="btn btn-danger w-100">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TimerForm;