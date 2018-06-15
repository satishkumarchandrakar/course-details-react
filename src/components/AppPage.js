import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

console.log(this);
class App extends Component{
    
    render(){
        return(
            <div className="container-fluid">
                <p>Header here...</p>
                <Link to = {'/home'}>Home </Link>
            </div>
        );
    }
}
// App.propTypes = {children: PropTypes.object.isRequired };

export default App;