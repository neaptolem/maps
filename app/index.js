import React, { Component } from 'react';

import {render} from 'react-dom';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import './stylesheets/common.css';

import App from './components/App';
import Index from './components/Index';
import MapDetails from './components/MapDetails';
import Maps from './components/Maps';


render(
    <Router history={hashHistory}>
    <Route path="" component={App}>
        <Route path="/" component={Index}/>
        <Route path="/maps" component={Maps}/>
        <Route path="/maps/:id" component={MapDetails}/>
    </Route>
</Router>, document.getElementById('root'));
