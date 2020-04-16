import { combineReducers } from 'redux'
import courses from './coursesRecuder'

const rootReducer = combineReducers({
    courses: courses
});

export default rootReducer;