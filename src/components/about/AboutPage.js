import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import {Form} from 'react-redux-form';
import {connect} from 'react-redux';
import Form, {Input, Fieldset} from 'react-bootstrap-form';
import CourseForm from './CourseForm';
import {loadCoursesSucess} from '../../actions/coursesActions' 
import {loadAurthorsucess} from '../../actions/coursesActions' 


connect((store) => {
  return {
    courses: store.courses.courses,
    cousesFetched: store.courses.fetched,
    aurthors: store.aurthors.aurthors,
  };
})

console.log(this.state);
class AboutPage extends Component {


  componentWillMount() {
    this.props.dispatch(loadCoursesSucess());
      
  console.log(this.props);
  console.log(this.state);
  }

  fetchaurthors() {
    this.props.dispatch(loadAurthorsucess())
  }


  
  render() {
    return (
      <div className="jumbotron" >
        <h1>About</h1>
        <CourseForm
        allAuthors={this.props.authors}
        course={this.state.courses}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        onDelete={this.deleteCourse}
        errors={this.state.errors}
        saving={this.props.saving}
         />
        <p>This application uses React, Redux and React Router and other helpful technologies to make a fast responsive site.</p>
        <Link to="" className="btn btn-primary btn-lg" >Learn More</Link>
      </div>
    );
  }
}



function mapDispatchtoProps (state, ownProps) {
  return{
    courses: state.courses  
  };
}

export default connect( mapDispatchtoProps )(AboutPage);
