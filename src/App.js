import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../src/components/Navigation';
import { Home, Location, Menu } from './pages/index';

const App = () => {
  return (
    <div id='wrapper'>
      <div className='App'>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/location' component={Location} />
          <Route path='/menu' component={Menu} />
        </Switch>
        <span className='latte-phrase' role='img' aria-label='latte'>
          "Here to serve you your coffee with "latte luv" ☕
        </span>
      </div>
    </div>
  );
};

export default App;
