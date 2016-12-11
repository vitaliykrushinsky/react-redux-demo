import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
// import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
	constructor(props, state) {
		super(props, state);
		// this.state = {
		// 	course: { title: "" }
		// };
		// this.onTitleChange = this.onTitleChange.bind(this);
		// this.onClickSave = this.onClickSave.bind(this);
	}
	// onTitleChange(event) {
	// 	console.log(event);
	// 	const course = this.state.course;
	// 	course.title = event.target.value;
	// 	this.setState({course: course});
	// }
	// onClickSave() {
	// 	this.props.actions.createCourse(this.state.course); // Path 1; Fire off action!!!!
	// }
  render() {
		const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
				{/* // Path 5; Rerender component to reflect update state */}
				<CourseList courses={courses}/>
				{/*<h2>Add Course</h2>*/}
				{/*<input type="text" onChange={this.onTitleChange} value={this.state.course.title} />*/}
				{/*<input type="submit" onClick={this.onClickSave} value="Save" />*/}
      </div>
    );
  }
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state, owmProps) {
	return {
		//Path 4; Update state on this.props.courses
		courses: state.courses // state.courses map to ./courseReducer/index
	};
}

function mapDispatchToProps(dispatch) {
	return {
		// Path 1b
		actions: bindActionCreators(courseActions, dispatch) // wrap all actions in to call dispatch
		// createCourse: bindActionCreators(courseActions.createCourse(), dispatch)
		// 1 Way
		// createCourse: course => {
		// 	dispatch(courseActions.createCourse(course));
		// }
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
