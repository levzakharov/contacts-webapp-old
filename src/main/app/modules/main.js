import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import About from './components/About';

const app = document.getElementById('app');

ReactDOM.render(
    <div>
        <Router history={hashHistory}>
            <Route path='/' component={App}/>
            <Route path='/about' component={About}/>
        </Router>
    </div>,
    app
);
