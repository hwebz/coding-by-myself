import React, {Component} from 'react';

class TimerForm extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            title: this.props.title || '',
            project: this.props.project || ''
        }

        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleProjectChange = this.handleProjectChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleProjectChange(e) {
        this.setState({
            project: e.target.value
        })
    }

    handleSubmit() {
        this.props.onFormSubmit({
            id: this.props.id,
            title: this.state.title,
            project: this.state.project
        })
    }

    render() {
        const submitText = this.props.title ? 'Update' : 'Create';
        return(
            <div className="col-12 mb-2">
                <div className="card">
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" defaultValue={this.state.title} onChange={this.handleTitleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="project">Project</label>
                            <input type="text" className="form-control" id="project" defaultValue={this.state.project} onChange={this.handleProjectChange} />
                        </div>
                        <div className="btn-group d-flex">
                            <button className="btn btn-primary w-100" onClick={this.handleSubmit}>{submitText}</button>
                            <button className="btn btn-danger w-100" onClick={this.props.onFormClose}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TimerForm;