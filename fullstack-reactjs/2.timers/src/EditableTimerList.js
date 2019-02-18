import React, {Component} from 'react';
import EditableTimer from './EditableTimer.js';

class EditableTimerList extends Component {
    render() {
        const timers = this.props.timers.map(timer => (
            <EditableTimer 
                key={timer.id}
                id={timer.id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                runningSince={timer.runningSince} 
                onFormSubmit={this.props.onFormSubmit}
                onTrashClick={this.props.onTrashClick}
                onStartClick={this.props.onStartClick}
                onStopClick={this.props.onStopClick} />       
        ));

        return(
            <div className="row">
                {timers}     
            </div>
        );
    }
}

export default EditableTimerList;