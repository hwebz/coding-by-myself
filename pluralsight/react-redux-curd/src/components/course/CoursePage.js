import React, { Component , PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';

class CoursePage extends Component {
  constructor(props,context) {
    super(props,context);
  }
  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }
  render() {
    const {courses} = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
          <h2>Courses</h2>
          <input type="submit"
            value="Add Course"
            className="btn btn-primary"
            onClick={this.redirectToAddCoursePage}
          />
          <CourseList courses={courses}/>
          </div>
        </div>
      </div>
    );
  }
}


CoursePage.propTypes = {
  courses:PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (CoursePage);
