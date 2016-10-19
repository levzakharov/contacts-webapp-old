import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { getRoutes } from './routes';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory} routes={getRoutes()}/>,
    app
);
