import React from "react";
import { connect } from 'react-redux';
import * as COURSE_ACTION from '../../redux/actions/courseActions';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
class CoursesPage extends React.Component {

  componentDidMount() {
    console.log(this.props);
    this.props.actions.loadCourses().catch(error => {
      console.log("error in loading ", error);
    });
  }

  render() {
    return (
      <>
        <h2>Courses </h2>
        {this.props.courses.map(course =>
          <div key={course.title} >{course.title}</div>
        )}
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(COURSE_ACTION, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

