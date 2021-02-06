import axios from 'axios';

const PostFinder = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

const counters = JSON.parse(localStorage.getItem('requestCounters')) || {};

const incrementRequestCounters = (method) => {
  counters[method] = (counters[method] || 0) + 1;
  localStorage.setItem('requestCounters', JSON.stringify(counters));
};

PostFinder.interceptors.request.use((config) => {
  incrementRequestCounters(config.method);
  console.log(counters);
  return config;
});

export default PostFinder;
