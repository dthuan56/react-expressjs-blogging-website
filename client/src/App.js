import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { ProrectedRoute } from './features/security/ProrectedRoute';

import { Header } from './features/layout/Header';
import { Login } from './features/loginPage/Login';
import { Home } from './features/blogs/screens/Home';
import { BlogPage } from './features/blogs/screens/BlogPage';

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
