import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { ProrectedRoute } from '../features/security/ProrectedRoute';

import { Header } from '../features/layout/Header';
import { Footer } from '../features/layout/Footer';
import { Login } from '../features/loginPage/Login';
import { Home } from '../features/posts/screens/Home';
import { PostPage } from '../features/posts/screens/SinglePostPage';
import { ProfilePage } from '../features/users/screens/ProfilePage';
import { NewPost } from '../features/posts/screens/NewPost';
import { UserDashboard } from '../features/users/screens/UserDashboard';

function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login" component={ Login } />
        <ProrectedRoute exact path="/" component={ Home } />
        <ProrectedRoute path="/posts/:title" component={ PostPage } />
        <ProrectedRoute path="/new" component={ NewPost } />
        <ProrectedRoute path="/dashboard/:part" component={ UserDashboard } />
        <ProrectedRoute path="/:name" component={ ProfilePage } />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
