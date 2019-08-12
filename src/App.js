import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Logo from './Components/Logo'
import Filter from './Components/Filter'
import Builing from './Components/Building';
import Home from './Components/Home';

import snake from './assets/logo.png'

export default function App() {
  return (
    <div className="content">
      <div className="left-content">
        <Logo logo={snake}/>
        <Filter />
      </div>
      <div className="right-content">
        <NavBar/>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/messages" component={Builing}/>
          <Route path="/wishlist" component={Builing}/>
          <Route path="/settings" component={Builing}/>
          <Route path="/my-account" component={Builing}/>
          <Redirect from="/" to="/home"/>
        </Switch>
        
      </div>
    </div>
  );
}