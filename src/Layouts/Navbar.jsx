import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar-content'>
             <Link to="/" className='logo'>Facebook</Link>
             <div className='menu'>
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/show-posts" className='nav-link'>Show Posts</Link>
            <Link to="/add-posts" className='nav-link'>Add Post</Link>
            </div>
        </nav>
    )
}

export default Navbar