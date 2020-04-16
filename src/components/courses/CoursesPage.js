import React from "react";
import { connect } from 'react-redux';
import * as COURSE_ACTION from '../../redux/actions/coursesActions';
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
      <form name='course' onSubmit={this.hadleSubmit}>
        <h2>Course</h2>
        <h3>Add courses</h3>
        <input type='text' onChange={this.handleChange}
          value={this.state.course.title} />
        <input className='btn btn-primary' type='submit' value="Save" />
      </form>
    );
  }
}

CoursesPage.PropTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    course: state.course
  };
}
export default connect(mapStateToProps)(CoursesPage);
