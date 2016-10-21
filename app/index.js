import React, { Component } from 'react';

import {render} from 'react-dom';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import './stylesheets/common.css';

import App from './containers/App';
import Index from './containers/Index';
import MapDetails from './containers/MapDetails';
import Maps from './containers/Maps';


render(
    <Router history={hashHistory}>
    <Route path="" component={App}>
        <Route path="/" component={Index}/>
        <Route path="/maps" component={Maps}/>
        <Route path="/maps/:id" component={MapDetails}/>
    </Route>
</Router>, document.getElementById('root'));
