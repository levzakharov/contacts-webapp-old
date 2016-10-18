import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { getRoutes } from './routes';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory} routes={getRoutes()}/>,
    app
);
