const setPost = (posts) => ({
  type: 'SET_POSTS',
  payload: posts,
});

export const createPost = (newPost) => ({
  type: 'CREATE_POST',
  payload: newPost,
});

export const deletePost = (idPost) => ({
  type: 'DELETE_POST',
  payload: idPost,
});

export default setPost;
