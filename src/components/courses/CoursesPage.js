import React from "react";
import { connect } from 'react-redux';
import * as COURSE_ACTION from '../../redux/actions/courseActions';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
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
    this.props.dispatchedActions.createCourse(this.state.course);
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
  dispatchedActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchedActions: bindActionCreators(COURSE_ACTION, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

