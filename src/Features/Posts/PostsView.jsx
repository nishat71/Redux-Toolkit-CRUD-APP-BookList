import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deletePost } from './PostsSlice';
import { AiFillLike } from 'react-icons/ai';
import Swal from 'sweetalert2';

const PostsView = () => {
  const posts = useSelector(state => state.postsReducer.posts);
  console.log(posts);

  const dispatch = useDispatch();
  const handleDeletePost = (id) => {
    // console.log('delete', id);
    dispatch(deletePost(id));
    Swal.fire(
      'You clicked the button!',
      'Successfully Deleted!'
    )
  }

  const handleLikePost = () => {
    console.log('like');
    // dispatch(deletePost(id));
  }



  return (
    <div className='post-container'>
      {/* <h2>Lists of Posts</h2> */}
      <table>
        <thead>
          <tr>
            <th className='post-heading'>Available Post</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {posts && posts.map((post) => {
            const { id, title } = post;

            return (
              <tr key={id}>
                <td>{title}
                  <div className='edit-dlt-btn'>
                    <Link className='edit-btn' to="/edit-post" state={{ id, title }}><button>Edit</button></Link>
                    <button onClick={() => { handleDeletePost(id) }}>Delete</button>
                    <button onClick={handleLikePost} className='like-btn'><AiFillLike /> Like</button>
                  </div>
                </td>
                {/* <td>
                  <Link to="/edit-post" state={{ id, title }}><button>Edit</button></Link>
                  <button onClick={() => { handleDeletePost(id) }}>Delete</button>
                </td> */}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>

    // <div className='post-container'>
    //   <h2>Lists of Posts</h2>
    //   <hr />
    //   {posts && posts.map((post) => {
    //     const { id, title } = post;
    //     return (
    //       <li key={id}>
    //         <li>{title}</li>
    //         {/* <td>
    //               <Link to="/edit-post" state={{ id, title }}><button>Edit</button></Link>
    //               <button onClick={() => { handleDeletePost(id) }}>Delete</button>
    //             </td> */}
    //       </li>
    //     )
    //   })}
    // </div>

  )
}

export default PostsView;

