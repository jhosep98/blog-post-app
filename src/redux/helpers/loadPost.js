import PostFinder from '../../api/PostFinder';

const loadPosts = async () => {
  const posts = (await PostFinder.get('/')) || [];
  const { data } = posts;
  return data;
};

export default loadPosts;
