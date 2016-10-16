import React, {Component} from 'react';

import { render } from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Index from './components/Index';
import MapsDetail from './components/MapsDetail';
import Maps from './components/Maps';


const data=[
  {id:1,
  name:'map1',
  detail:'smth'
},
{
  id:3,
  name:'map3',
  detail:'smth',
  paths:[{id:'path23185',name:'1'},{id:'path23187',name:'2'}]
  }
]

render(
  <Router history={browserHistory}>
  <Route path="" component={App}>
    <Route path="/" component={Index}/>
    <Route path="/maps" component={Maps} data={data} />
    <Route path="/maps/:id" component={MapsDetail} data={data}/>
  </Route>
  </Router>,
  document.getElementById('root')
);
