import React, {Component} from 'react';
import helpers from './helpers';

class Timer extends Component {
    render() {
        const elapsedString = helpers.renderElapsedString(this.props.elapsed);
        return(
            <div className="col-12 mb-2">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.project}</p>
                        <p>{elapsedString}</p>
                        <div className="btn-group d-flex mb-2">
                            <a href="#none" className="btn btn-warning w-100">Edit</a>
                            <a href="#none" className="btn btn-danger w-100">Remove</a>
                        </div>
                        <button className="btn btn-success btn-block">Start</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timer;