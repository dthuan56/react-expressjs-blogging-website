import Comment from '../models/comment.js';

const commentService = {
  getById: async function (id) {
    return await Comment.getById(id);
  },
  getLast: async function () {
    return await Comment.getLast();
  },
  getByPostId: async function (postId) {
    let comments = await Comment.getByPostId(postId);
    
    comments = Promise.all(comments.map( async (comment) => {
      let queue = [];
      queue.push(comment);
      //get all replies
      while(queue.length > 0) {
        let currentComment = queue.shift();
        let replies = await this.getReplies(currentComment.id);
        currentComment.replies = replies;
        queue.push(...replies);
      }

      return comment;
    }))

    return comments;
  },
  getReplies: async function (parentId) {
    return await Comment.getReplies(parentId);
  },
  addComment: async function (comment) {
    return await Comment.add(comment);
  }
}

export default commentService;