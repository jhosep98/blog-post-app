import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PostFinder from '../api/PostFinder';

const UpdatePost = () => {
  const { id } = useParams();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await PostFinder.get(`/${id}`);

      setTitle(response.data.body);
      setBody(response.data.title);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await PostFinder.put(`/${id}`, {
      title,
      body,
    });

    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Update Post:</h3>
      <div className="form-group">
        <label htmlFor="concept">Title:</label>
        <input
          type="text"
          className="form-control"
          id="concept"
          name="concept"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Body</label>
        <textarea
          className="form-control"
          id="amount"
          name="amount"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-outline-primary mt-3">
        <i className="fa fa-plus mr-3" />
        update
      </button>
    </form>
  );
};

export default UpdatePost;
