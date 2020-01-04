import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Location, Menu } from './pages/index';
import Navigation from './components/Navigation';
import SocialMedia from './components/SocialMedia';

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
        <SocialMedia />
        <span className='latte-phrase' role='img' aria-label='latte'>
          "Here to serve you your coffee with "latte luv" ☕
        </span>
      </div>
    </div>
  );
};

export default App;
