import React, {Component} from 'react';
import EditableTimerList from './EditableTimerList.js';
import ToggleableTimerForm from './ToggleableTimerForm.js';

class TimersDashboard extends Component {
    render() {
        return(
            <div class="container">
                <EditableTimerList />
                <div className="row">
                    <ToggleableTimerForm  isOpen={true} />
                </div>
            </div>
        );
    }
}

export default TimersDashboard;