const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        posts: [...action.payload],
      };
    case 'CREATE_POST':
      return {
        posts: [...state.posts, action.payload],
      };
    case 'DELETE_POST':
      return {
        posts: state.posts.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
export default postsReducer;
