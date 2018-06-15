import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
// import { Route } from 'react-router';
import { HashRoute,BrowserRouter,Route,Switch } from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import {Provider} from 'react-redux';
import './index.css';
import App from './components/AppPage';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';
import HomePage from './components/home/HomePage';
import AboutPage from  './components/about/AboutPage';
import initialState from './reducers/initialState';


const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/home" component={HomePage} />
                <Route path="/about" component={AboutPage} />
            </Switch>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('app')
);
registerServiceWorker();
