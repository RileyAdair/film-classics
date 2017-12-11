import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Film from './components/Film/Film'

export default (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/film/:id' component={Film}/>
  </Switch>
)
