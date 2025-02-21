import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setPost from '../redux/actions/postsActions';
import loadPosts from '../redux/helpers/loadPost';
import Post from './Post';

const ListPost = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const posts = await loadPosts();
        dispatch(setPost(posts));
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const { posts } = useSelector((state) => state);

  return (
    <div className="row mt-3">
      <h2 className="text-center">posts</h2>
      <hr />
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          postId={post.id}
        />
      ))}
    </div>
  );
};

export default ListPost;
