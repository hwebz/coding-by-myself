import React, {Component} from 'react'

class TimerActionButton extends Component {

    render() {
        if (this.props.timerIsRunning) {
            return(
                <button className="btn btn-danger btn-block" onClick={this.props.onStopClick}>Stop</button>
            )
        } else {
            return(
                <button className="btn btn-success btn-block" onClick={this.props.onStartClick}>Start</button>
            )
        }
    }
}

export default TimerActionButton