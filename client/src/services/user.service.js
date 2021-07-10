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
  },  
  bookmark: (blogId, userId) => {
    return client
      .post('/users/' + userId + '/bookmark', {
        blogId, 
      })
      .then(response => true);
  },
  removeBookmark: (blogId, userId) => {
    return client
      .delete('/users/' + userId + '/bookmark', {
        blogId, 
      })
      .then(response => response.data);
  },
  hasBookmarked: (userId, blogId) => {
    return client
      .get('/users/' + userId + '/bookmark/' + blogId)
      .then(response => response.data);
  },
  like: (userId, blogId) => {
    return client
      .post('/users/' + userId + '/like/', {
        blogId
      })
      .then(response => response.data);
  },
  removeLike: (userId, blogId) => {
    return client
      .delete('/users/' + userId + '/like/', {
        blogId
      })
      .then(response => response.data);
  },
  hasLiked: (userId, blogId) => {
    return client
      .get('/users/' + userId + '/like/' + blogId)
      .then(response => response.data);
  },
}

export default userService;