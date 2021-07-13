
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../logo.svg';
import userService from '../users/services/user.service';
 
export const Header = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();
  const location = useLocation();
  // const dispatch = useDispatch();
  const [renderHeader, setRenderHeader] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);

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

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  }

  if(!renderHeader) {
    return null;
  } 

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/"><img src={logo} alt="logo" width="50" height="50"/></Link>
        <div onClick={toggleUserMenu} className="header__user-menu">
        <img className="header__profile"src={user ? user.profile_img : "123"} alt="Profile"/>
        {
          showUserMenu 
            ? <ul className="header__user-dropdown">
                <li>
                  <Link to="/new">Write new</Link>
                </li>
                <li>
                  <Link to="/dashboard/posts">Dashboard</Link>
                </li>
                <li onClick={logout}>Logout</li>
              </ul>
            : null
        } 
        </div>
      </nav>
    </header>
  )

}