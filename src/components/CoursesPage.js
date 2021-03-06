import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as coursesActions from '../../actions/courseActions' ;

class CoursesPage extends Component {
  constructor(props, context){
    super(props,context);
    this.state = {
      course: {title: null}
    }
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);

  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState = ({course: course});
  }

  onClickSave(){
    this.props.dispatch(coursesActions.createCourse(this.state.course));
  }
  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }

  render(){
      return(
          <div>
              <h1>Courses</h1>
              <h2> Add Course</h2>
              <input type="text" 
              onChange={this.onTitleChange} 
              value={this.state.course.title}/>
              <input type="submit" value="Save" onClick={this.onClickSave} />
          </div>
      );
  }    
}

function mapStateToProps (state, ownProps) {
  return{
    courses: state.courses  
  };
}

function mapDispatchtoProps (state, ownProps) {
  return{
    courses: state.courses  
  };
}

export default connect( mapConnectToProp , mapDispatchtoProps ) ( CoursesPage );