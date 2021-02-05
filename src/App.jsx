import React from 'react';
import { Provider } from 'react-redux';
import AddPost from './components/AddPost';
import PostCard from './components/ListPost';
import store from './redux/store/store';

const App = () => (
  <Provider store={store}>
    <div className="container">
      <h1 className="text-center">Challenge posts</h1>
      <AddPost />
      <PostCard />
    </div>
  </Provider>
);
export default App;
