import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updatePost } from './PostsSlice';

const EditPost = () => {
    const location = useLocation(); 
    console.log(location);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePost({ id, title}));
        navigate("/show-posts", { replace: true })
    }
    return (
        <div className='post-container'>
            <h2>EditPost</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className='form-field'>
                    {/* <label htmlFor="title">Title:</label> */}
                    <input type="text" id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className='add-btn'>
                    <button type='submit'>Update Post</button>
                </div>
            </form>
        </div>
    )
}

export default EditPost;
