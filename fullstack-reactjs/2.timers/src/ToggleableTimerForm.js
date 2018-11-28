import React, {Component} from 'react';
import TimerForm from './TimerForm';
class ToggleableTimerForm extends Component {
    render() {
        if(this.props.isOpen) {
            return(
                <TimerForm />
            )
        } else {
            return(
                <div class="col-12">
                    <button className="btn btn-success btn-block">Add a timer</button>
                </div>
            )
        }
    }
}

export default ToggleableTimerForm;