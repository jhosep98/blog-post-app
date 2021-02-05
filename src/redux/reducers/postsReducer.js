const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_POSTS':
      return state;
    case 'CREATE_POST':
      return [...state, action.payload];
    case 'UPDATE_POST':
      return [...state, action.payload];
    case 'DELETE_POST':
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};
export default postsReducer;
