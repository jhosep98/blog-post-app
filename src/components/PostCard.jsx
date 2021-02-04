import React from 'react';
import useFetch from '../hooks/useFetch';
import Post from './Post';

const PostCard = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const { data } = useFetch(url);
  return (
    <div className="row mt-3">
      <h2 className="text-center">posts</h2>
      <hr />
      {data ? (
        data.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))
      ) : (
        <div className="alert alert-info text-center">Loading....</div>
      )}
    </div>
  );
};
export default PostCard;
