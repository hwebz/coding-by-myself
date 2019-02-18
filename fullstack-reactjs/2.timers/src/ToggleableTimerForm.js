import React, {Component} from 'react';
import TimerForm from './TimerForm';
class ToggleableTimerForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }

        this.handleFormOpen = this.handleFormOpen.bind(this)
        this.handleFormClose = this.handleFormClose.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleFormOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleFormClose() {
        this.setState({
            isOpen: false
        })
    }

    handleFormSubmit(timer) {
        this.props.onFormSubmit(timer);
        this.setState({
            isOpen: false
        })
    }

    render() {
        if(this.state.isOpen) {
            return(
                <TimerForm onFormSubmit={this.handleFormSubmit} onFormClose={this.handleFormClose} />
            )
        } else {
            return(
                <div className="col-12">
                    <button className="btn btn-success btn-block" onClick={this.handleFormOpen}>Add a timer</button>
                </div>
            )
        }
    }
}

export default ToggleableTimerForm;