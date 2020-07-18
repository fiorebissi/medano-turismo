import React from 'react';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route path='/home'>
          <Header />
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
