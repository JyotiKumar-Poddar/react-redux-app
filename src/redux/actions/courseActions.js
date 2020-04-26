import * as types from './actionTypes'
import * as courseApi from "../../../api/courseApi"


export function createCourse(course) {
    return { type: types.CREATE_COURSE, course: course };
}

export function loadCoursesSucces(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses }
}

export function loadCourses() {
    return function (dispatch) {
        return courseApi.getCourses().then(courses => {
            dispatch(loadCoursesSucces(courses))
        }
        ).catch(error => {
            throw error;
        }
        );
    }
}