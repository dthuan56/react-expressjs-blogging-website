import client from './config.service';

const commentService = {
  getByBlogId: (blogId) => {
    return client
      .get('/blogs/' + blogId + '/comments')
      .then(response => response.data);
  },
  addComment: (blogId, comment) => {
    return client 
      .post('/blogs/' + blogId + '/comments', {
        comment
      })
      .then(response => response.data);
  }
}
export default commentService;