import * as types from '../actions/actionTypes';
export default function (state = [], action) {
	switch (action.type) {
		case types.LOAD_COURSES_SUCCESS:
			// Path 3;
			return action.courses;
		default:
			return state;
	}
}
