import React, {Component} from 'react'
import helpers from './helpers'
import TimerActionButton from './TimerActionButton'
class Timer extends Component {

    constructor(props) {
        super(props)

        this.handleTrashClick = this.handleTrashClick.bind(this)
        this.handleStartClick = this.handleStartClick.bind(this)
        this.handleStopClick = this.handleStopClick.bind(this)
    }

    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval)
    }

    handleTrashClick() {
        this.props.onTrashClick(this.props.id)
    }

    handleStartClick() {
        this.props.onStartClick(this.props.id)
    }
    
    handleStopClick() {
        this.props.onStopClick(this.props.id)
    }

    render() {
        const elapsedString = helpers.renderElapsedString(this.props.elapsed, this.props.runningSince);
        return(
            <div className="col-12 mb-2">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.project}</p>
                        <p>{elapsedString}</p>
                        <div className="btn-group d-flex mb-2">
                            <a href="#none" className="btn btn-warning w-100" onClick={this.props.onEditClick}>Edit</a>
                            <a href="#none" className="btn btn-danger w-100" onClick={this.handleTrashClick}>Remove</a>
                        </div>
                        <TimerActionButton 
                            timerIsRunning={!!this.props.runningSince} 
                            onStartClick={this.handleStartClick} 
                            onStopClick={this.handleStopClick} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Timer;