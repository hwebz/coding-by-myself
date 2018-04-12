import React, {Component} from 'react';

class EditableTimer extends Component {
    render() {
        let {title, project, elapsed, runningSince, editFormOpen} = this.props;

        return(
            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{project}</p>
                        
                        <a href="#" className="btn btn-primary btn-block">Go somewhere</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditableTimer;