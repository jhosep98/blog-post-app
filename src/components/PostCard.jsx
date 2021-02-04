import React from 'react';
import Post from './Post';

const PostCard = () => (
  <div className="row mt-3">
    <h2 className="text-center">posts</h2>
    <hr />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
);
export default PostCard;
