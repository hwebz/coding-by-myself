import React, {Component} from 'react';
import uuid from 'uuid';
import EditableTimerList from './EditableTimerList.js';
import ToggleableTimerForm from './ToggleableTimerForm.js';

class TimersDashboard extends Component {
    state = {
        timers: [
            {
                title: 'Practice squat',
                project: 'Gym Chores',
                id: uuid.v4(),
                elapsed: 5456099,
                runningSince: Date.now()
            },
            {
                title: 'Bake squash',
                project: 'Kitchen Chores',
                id: uuid.v4(),
                elapsed: 1273998,
                runningSince: null
            }
        ]
    };
    
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-md-4">
                        <h3 className="text-center">Timers</h3>
                        <EditableTimerList timers={this.state.timers} />
                        <div className="row">
                            <ToggleableTimerForm  isOpen={true} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimersDashboard;