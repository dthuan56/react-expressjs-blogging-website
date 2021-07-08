import { useDispatch } from 'react-redux';
import client from './config.service';

import { setAuthToken } from './config.service';

const userService = {
  
  login: function(name, password) {
    return client
      .post('/login', {name, password})
      .then(response => {
        let user = response.data;
        localStorage.setItem("user", JSON.stringify(user));
        setAuthToken(user.token);
        return user;
      })
  },
  logout: function() {
    localStorage.removeItem('user');
  }
}

export default userService;