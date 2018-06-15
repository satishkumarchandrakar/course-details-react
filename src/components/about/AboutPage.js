import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import {Form} from 'react-redux-form';
import Form, {Input, Fieldset} from 'react-bootstrap-form';
import CourseForm from './CourseForm';

console.log(this.state);
class AboutPage extends Component {
  
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

export default AboutPage;