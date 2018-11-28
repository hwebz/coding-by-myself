import React, {Component} from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

class EditableTimer extends Component {
    render() {
        let {id, title, project, elapsed, runningSince, editFormOpen} = this.props;

        if (editFormOpen) {
            return(
                <TimerForm 
                    id={id}
                    title={title}
                    project={project}
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
                />
            )
        }
    }
}

export default EditableTimer;