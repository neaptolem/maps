import React, { Component } from 'react';

import {render} from 'react-dom';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/App';
import Index from './components/Index';
import MapDetails from './components/MapDetails';
import Maps from './components/Maps';

const data = [
    {
        "id": "1",
        "name": "map1",
        "svg":''
    }, {
        "id": "3",
        "name": "map3"
    }
]

render(
    <Router history={hashHistory}>
    <Route path="" component={App}>
        <Route path="/" component={Index}/>
        <Route path="/maps" component={Maps} data={data}/>
        <Route path="/maps/:id" component={MapDetails} data={data}/>
    </Route>
</Router>, document.getElementById('root'));
