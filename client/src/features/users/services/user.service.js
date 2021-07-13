import client from '../../../config.service';

const userService = {
  login: function(name, password) {
    return client
      .post('/login', {name, password})
      .then(response => {
        let user = response.data;
        localStorage.setItem("user", JSON.stringify(user));
        return user;
      })
  },
  logout: function() {
    localStorage.removeItem('user');
  },  
  bookmark: (postId, userId) => {
    return client
      .post('/users/' + userId + '/bookmark', {
        postId, 
      })
      .then(response => true);
  },
  removeBookmark: (postId, userId) => {
    console.log('de', postId)
    return client
      .delete('/users/' + userId + '/bookmark/' + postId)
      .then(response => response.data);
  },
  hasBookmarked: (userId, postId) => {
    return client
      .get('/users/' + userId + '/bookmark/' + postId)
      .then(response => response.data);
  },
  like: (userId, postId) => {
    return client
      .post('/users/' + userId + '/like/', {
        postId
      })
      .then(response => response.data);
  },
  removeLike: (userId, postId) => {
    return client
      .delete('/users/' + userId + '/like/' + postId)
      .then(response => response.data);
  },
  hasLiked: (userId, postId) => {
    return client
      .get('/users/' + userId + '/like/' + postId)
      .then(response => response.data);
  },
  getById: (userId) => {
    return client
      .get('/users/' + userId)
      .then(response => response.data);
  },
  follow: (followerId, followedId) => {
    return client
      .post('/users/' + followerId + '/follow', {
        followedId
      })   
      .then(response => response.data);
  },
  hasFollowed: (followerId, followedId) => {
    return client
      .get('/users/' + followerId + '/follow/' + followedId)   
      .then(response => response.data);
  },
  removeFollow: (followerId, followedId) => {
    return client
      .delete('/users/' + followerId + '/follow/' + followedId)
      .then(response => response.data);
  },
  getWriterPosts: (page, userId) => {
    return client
      .get('/users/' + userId + '/posts', {
        params : { page }
      })
      .then(response => response.data);
  },
  getBookmarkPosts: (page, userId) => {
    return client
      .get('/users/' + userId + '/bookmark', {
        params: { page }
      })
      .then(response => response.data);
  },
  getFollowing: (page, userId) => {
    return client
      .get('/users/' + userId + '/following', {
        params: { page }
      })
      .then(response => response.data);
  }
}

export default userService;