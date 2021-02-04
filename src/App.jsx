import React from 'react';
import PostCard from './components/PostCard';
import PostForm from './components/PostForm';

const App = () => (
  <div className="container">
    <h1 className="text-center">Challenge posts</h1>
    <PostForm />
    <PostCard />
  </div>
);
export default App;
