import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPosts } from './PostsSlice';
import { v4 as uuidv4 } from 'uuid';


const AddPost = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { id: uuidv4(), title };
    dispatch(addPosts(post));
    navigate("/show-posts", { replace: true });
  };

  return (
    <div className='post-container'>
      <h2>Create post</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <input type="text" id='title' name='title' placeholder='Want to post something?....' value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className='add-btn'>
          <button className='submit-btn' type='submit'>Add Post</button>
        </div>
      </form>
    </div>
  )
}

export default AddPost;
