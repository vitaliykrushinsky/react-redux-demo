import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

function loadCoursesSuccess(courses) {
	// Path 2;
	return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
	return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
	return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function loadCourses() {
	return function (dispatch) { // redux-thunk
		return courseApi.getAllCourses().then(     // simulate API call
			courses => dispatch(loadCoursesSuccess(courses))
		).catch(error => {
			throw(error);
		});
	};
}

export function saveCourse(course) {
	return function (dispatch, getState) { // getState function to get piece of data what you need from store
		return courseApi.saveCourse(course).then(course => {
			course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));
		}).catch(error => {
			throw(error);
		});
	};
}
