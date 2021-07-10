import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { ProrectedRoute } from './components/ProrectedRoute';

import { Header } from './components/Header';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { BlogPage } from './components/BlogPage';

function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login" component={ Login } />
        <ProrectedRoute exact path="/" component={ Home } />
        <ProrectedRoute exact path="/blogs/:title" component={ BlogPage } />
      </Switch>
    </Router>
  );
}

export default App;
