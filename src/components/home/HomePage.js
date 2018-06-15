import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import App from '../AppPage'
class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>PLuralSight Administration</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg" >About More</Link>
        {/* <App> <p>THis is Props children</p></App> */}
      </div>
    );
  }
}

export default HomePage;
