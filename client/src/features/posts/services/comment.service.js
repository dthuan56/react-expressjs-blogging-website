import client from '../../../config.service';

const commentService = {
  getByPostId: (postId) => {
    return client
      .get('/posts/' + postId + '/comments')
      .then(response => response.data);
  },
  addComment: (postId, comment) => {
    return client 
      .post('/posts/' + postId + '/comments', {
        comment
      })
      .then(response => response.data);
  }
}
export default commentService;