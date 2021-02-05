import { createStore } from 'redux';
import postsReducer from '../reducers/postsReducer';

const store = createStore(
  postsReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
