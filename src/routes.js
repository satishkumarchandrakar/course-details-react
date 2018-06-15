import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/AppPage';
import HomePage from './components/home/HomePage';
import AboutPage from  './components/about/AboutPage';  

export default(
    <Route path="/" component={App}>
    <Route Path="home" component={HomePage} />
    <Route path="about" component={AboutPage} />
    </Route>
);