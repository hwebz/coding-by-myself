import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
class CoursePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {
        title: null
      }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;

    this.setState({
      course: course
    });
  }

  onClickSave() {
    this.props.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h1>Course page</h1>
            {this.props.courses.map(this.courseRow)}
            <h2>Add Course</h2>
            <div className="form-group">
              <label>Title</label>
              <input type="text" className="form-control" onChange={this.onTitleChange} />
            </div>
            <div className="form-group">
              <input type="submit" value="Save" className="btn btn-primary" onClick={this.onClickSave} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCourse: course => {
      dispatch(courseActions.createCourse(course));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
