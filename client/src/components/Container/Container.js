import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import { Home, About, Contacts, GetYourOffer } from '../';

class Container extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contacts' component={Contacts}/>
          <Route path='/get-your-offer' component={GetYourOffer}/>
        </Switch>
      </div>
    );
  }
}

export default Container;