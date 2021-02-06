import React from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../redux/actions/postsActions';

import useForm from '../hooks/useForm';
import PostFinder from '../api/PostFinder';

const AddPost = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    title: '',
    body: '',
  });
  const { title, body } = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await PostFinder.post('/', formValues);
    const { data } = response;
    dispatch(createPost(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new post</h2>
      <div className="mb-3 form-group">
        <label className="form-label" htmlFor="title">
          Title:
        </label>
        <input
          id="title"
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>
      <div className="mb-3 form-group">
        <label htmlFor="body" className="form-label">
          Body:
        </label>
        <input
          type="text"
          name="body"
          id="body"
          className="form-control"
          value={body}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>
      <button type="submit" className="btn btn-outline-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-folder-plus"
          viewBox="0 0 16 16"
        >
          <path d="M.5 3l.04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z" />
          <path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z" />
        </svg>
        <span className="ml-3"> add post</span>
      </button>
    </form>
  );
};
export default AddPost;
