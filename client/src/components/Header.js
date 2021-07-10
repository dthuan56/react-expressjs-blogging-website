
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../logo.svg';
import userService from '../services/user.service';
import './Header.css';
 
export const Header = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();
  const location = useLocation();
  // const dispatch = useDispatch();
  const [renderHeader, setRenderHeader] = useState(true);

  useEffect(() => {
    if(location.pathname !== '/login') {
      setRenderHeader(true);
    } else {
      setRenderHeader(false);
    }

  }, [location])
  
  const logout = () => {
    userService.logout();
    // dispatch(logout());
    history.push('/login');
  }

  if(!renderHeader) {
    return null;
  } 

  return (
    <header className="c-header">
      <nav className="d-flex justify-content-between c-nav">
        
        <Link to="/"><img src={logo} alt="logo" width="50" height="50"/></Link>
        <ul className="d-flex">
          <li>
            <img className="header__profile"src={user ? user.profile_img : "123"} alt="Profile"/>
          </li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  )

}