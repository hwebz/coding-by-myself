import React, {Component} from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

class EditableTimer extends Component {

    constructor(props){
        super(props)

        this.state = {
            editFormOpen: false
        }

        this.handleFormClose = this.handleFormClose.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleEditClick = this.handleEditClick.bind(this)
    }

    handleFormClose() {
        this.closeForm()
    }

    handleFormSubmit(timer) {
        this.props.onFormSubmit(timer)
        this.closeForm()
    }

    openForm() {
        this.setState({
            editFormOpen: true
        })
    }

    closeForm() {
        this.setState({
            editFormOpen: false
        })
    }

    handleEditClick() {
        this.openForm()
    }

    render() {
        let {id, title, project, elapsed, runningSince} = this.props;

        if (this.state.editFormOpen) {
            return(
                <TimerForm 
                    id={id}
                    title={title}
                    project={project}
                    onFormClose={this.handleFormClose}
                    onFormSubmit={this.handleFormSubmit}
                />
            )
        } else {
            return(
                <Timer 
                    id={id}
                    title={title}
                    project={project}
                    elapsed={elapsed}
                    runningSince={runningSince}
                    onEditClick={this.handleEditClick}
                    onTrashClick={this.props.onTrashClick}
                    onStartClick={this.props.onStartClick}
                    onStopClick={this.props.onStopClick}
                />
            )
        }
    }
}

export default EditableTimer;