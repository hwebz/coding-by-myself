import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';

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
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;

    this.setState({
      course: course
    });
  }

  onClickSave() {
    // this.props.createCourse(this.state.course);
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const {courses} = this.props;
    return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h1>Course page</h1>
            <button type="button" className="btn btn-primary mb-3" onClick={this.redirectToAddCoursePage}>Add Course</button>
            {/* {this.props.courses.map(this.courseRow)} */}
            <CourseList courses={courses} />
          </div>
        </div>
      </div>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  // createCourse: PropTypes.func.isRequired
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => {
    //   dispatch(courseActions.createCourse(course));
    // }
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
