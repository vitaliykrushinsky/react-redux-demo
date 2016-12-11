import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

function loadCoursesSuccess(courses) {
	// Path 2;
	return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
	return function (dispatch) { // redux-thunk
		return courseApi.getAllCourses().then(     // simulate API call
			courses => dispatch(loadCoursesSuccess(courses))
		).catch(error => {
			throw(error)
		});
	}
}
