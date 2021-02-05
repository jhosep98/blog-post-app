import React from 'react';
import { useDispatch } from 'react-redux';
import useFetch from '../hooks/useFetch';
import showPosts from '../redux/actions/postsActions';
import Post from './Post';

const PostCard = () => {
  const dispatch = useDispatch();
  const baseURL = 'https://jsonplaceholder.typicode.com/posts';
  const { data, loading } = useFetch(baseURL);

  const POSTS = dispatch(showPosts(data));
  const { payload } = !!POSTS && POSTS;
  console.log(payload);
  return (
    <div className="row mt-3">
      <h2 className="text-center">posts</h2>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading....</div>
      ) : (
        payload.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))
      )}
    </div>
  );
};

export default PostCard;
