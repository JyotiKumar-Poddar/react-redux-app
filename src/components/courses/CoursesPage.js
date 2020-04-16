import React from "react";
import { connect } from 'react-redux';
import * as COURSE_ACTION from '../../redux/actions/courseActions';
import PropTypes from 'prop-types'

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ''
    }
  }
  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
    //or  this.setState({ course });
  }
  hadleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(COURSE_ACTION.createCourse(this.state.course));
  }

  render() {
    return (
      <form onSubmit={this.hadleSubmit}>
        <h2>Course</h2>
        <h3>Add courses</h3>
        <input type='text' onChange={this.handleChange}
          value={this.state.course.title} />
        <input className='btn btn-primary' type='submit' value="Save" />
        <p> Saved Courses </p>
        {this.props.courses.map(course => {
          return (
            <div key={course.title} >{course.title}</div>
          );
        })
        }
      </form >
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}
export default connect(mapStateToProps)(CoursesPage);
