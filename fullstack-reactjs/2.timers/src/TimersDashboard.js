import React, {Component} from 'react';
// import uuid from 'uuid';
import helpers from './helpers'
import EditableTimerList from './EditableTimerList.js';
import ToggleableTimerForm from './ToggleableTimerForm.js';
import client from './client'

class TimersDashboard extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            timers: [
                // {
                //     title: 'Practice squat',
                //     project: 'Gym Chores',
                //     id: uuid.v4(),
                //     elapsed: 5456099,
                //     runningSince: Date.now()
                // },
                // {
                //     title: 'Bake squash',
                //     project: 'Kitchen Chores',
                //     id: uuid.v4(),
                //     elapsed: 1273998,
                //     runningSince: null
                // }
            ]
        }

        this.handleCreateFormSubmit = this.handleCreateFormSubmit.bind(this)
        this.handleUpdateFormSubmit = this.handleUpdateFormSubmit.bind(this)
        this.handleTrashClick = this.handleTrashClick.bind(this)
        this.handleStartClick = this.handleStartClick.bind(this)
        this.handleStopClick = this.handleStopClick.bind(this)
    }

    componentDidMount() {
        this.loadTimersFromServer();
        setInterval(this.loadTimersFromServer, 5000)
    }

    loadTimersFromServer = () => {
        client.getTimers(serverTimers => this.setState({timers: serverTimers}))
    }
    
    handleCreateFormSubmit(timer) {
        this.createTimer(timer)
    }

    handleUpdateFormSubmit(timer) {
        this.updateTimer(timer)
    }

    createTimer = timer => {
        const t = helpers.newTimer(timer)
        this.setState({
            timers: this.state.timers.concat(t)
        })

        client.createTimer(t)
    }

    updateTimer = attrs => {
        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === attrs.id) {
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project: attrs.project
                    })
                }
                return timer
            })
        })

        client.updateTimer(attrs)
    }

    handleTrashClick(timerId) {
        this.deleteTimer(timerId)
    }

    deleteTimer(timerId) {
        this.setState({
            timers: this.state.timers.filter(t => t.id !== timerId)
        })

        client.deleteTimer({
            id: timerId
        })
    }
    
    handleStartClick(timerId) {
        this.startTimer(timerId)
    }

    handleStopClick(timerId) {
        this.stopTimer(timerId)
    }

    startTimer(timerId) {
        const now = Date.now()

        // this.setState({
        //     timers: this.state.timers.map(timer => {
        //         if (timer.id === timerId) {
        //             return Object.assign({}, timer, {
        //                 runningSince: now,
        //             })
        //         } else {
        //             return timer
        //         }
        //     })
        // })

        client.startTimer({
            id: timerId,
            start: now
        }).then(this.loadTimersFromServer)
    }

    stopTimer(timerId) {
        const now = Date.now()

        // this.setState({
        //     timers: this.state.timers.map(timer => {
        //         if (timer.id === timerId) {
        //             const lastElapsed = now - timer.runningSince
        //             return Object.assign({}, timer, {
        //                 elapsed: timer.elapsed + lastElapsed,
        //                 runningSince: null
        //             })
        //         } else {
        //             return timer
        //         }
        //     })
        // })

        client.stopTimer({
            id: timerId,
            stop: now
        }).then(this.loadTimersFromServer)
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                        <h3 className="text-center">Timers</h3>
                        <EditableTimerList 
                            timers={this.state.timers} 
                            onFormSubmit={this.handleUpdateFormSubmit} 
                            onTrashClick={this.handleTrashClick}
                            onStartClick={this.handleStartClick}
                            onStopClick={this.handleStopClick} />
                        <div className="row">
                            <ToggleableTimerForm isOpen={false} onFormSubmit={this.handleCreateFormSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimersDashboard;