import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deletePost, likePost } from './PostsSlice';
import { AiFillLike } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
// import CommentPost from './AddComment';



const PostsView = () => {


  const posts = useSelector(state => state.postsReducer.posts);
  // console.log(posts);

  const count = useSelector(state => state.postsReducer.count);
  // console.log(count);

  // const comment = useSelector(state => console.log(state));
  // console.log(count);


  const dispatch = useDispatch();
  const handleDeletePost = (id) => {
    // console.log('delete', id);
    dispatch(deletePost(id));
    Swal.fire(
      'You clicked the button!',
      'Successfully Deleted!'
    )
  }

  const handleLikePost = (e) => {
    e.currentTarget.disabled = true;
    dispatch(likePost(e));
  }



  return (
    <div>
      <h2>Lists of Posts</h2>
      <hr />
      {posts && posts.map((post) => {
        const { id, title } = post;
        return (
          <div className='single-post' key={id}>
            <li>{title}
              <p className='like'>{count} <AiFillLike /></p>
              <div className='edit-dlt-btn'>
                <button onClick={handleLikePost} className='like-btn'><AiFillLike /> Like</button>
                {/* <Link className='comment-link' to="/comment-post"><button className='comment-btn'>Comment</button></Link> */}
                <Link className='edit-btn' to="/edit-post" state={{ id, title }}><button>Edit</button></Link>
                <button onClick={() => { handleDeletePost(id) }}>Delete</button>
              </div>
              {/* <div className='comment-content'>
                <input type="text" id='comment' name='comment' className='comment-field' placeholder='Write a Comment.....' value={comment} onChange={(e) => setComment(e.target.value)} />
                <button onClick={handleSubmit} className='cmnt-btn'>Send</button>
              </div> */}
            </li>
          </div>
        )
      })}
    </div>
  )
}

export default PostsView;

