import client from '../../../config.service';

const postService = {
  newPost: (post) => {
    return client
      .post('/posts', { post })
      .then(response => response.data);
  },
  get: function(page) {
    return client
      .get('/posts', {
        params: {
          page
        }
      })
      .then(response => response.data);
  },
  getTrendingPosts: () => {
    return client
      .get('/posts/trending')
      .then(response => response.data);
  },
  getNewestPosts: () => {
    return client
      .get('/posts/newest')
      .then(response => response.data);
  },
  getById: (postId, userId) => {
    return client
      .get('/posts/' + postId, {
        userId
      })
      .then(response => response.data);
  },
  update: (post) => {
    return client
      .put('/posts/' + post.id, {
        post
      })
      .then(response => response.data);
  },
  getByWriterId: (page, writerId) => {
    return client
      .get('/posts/writers/' + writerId, {
        params: {
          page
        }
      })
      .then(response => response.data);
  }

}

export default postService;