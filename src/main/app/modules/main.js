import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import {hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
const app = document.getElementById('app');

ReactDOM.render(
    <Root store={store} history={history}/>,
    app
);
