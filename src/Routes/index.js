import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Error from '../Pages/Error'
import Navbar from '../Layouts/Navbar'
// import BooksView from '../Features/Books/BooksView'
// import AddBook from '../Features/Books/AddBook'
// import EditBook from '../Features/Books/EditBook'
import Footer from '../Layouts/Footer'
import PostsView from '../Features/Posts/PostsView'
import AddPost from '../Features/Posts/AddPost'
import EditPost from '../Features/Posts/EditPost'

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/show-posts" element={<PostsView/>} />
                    <Route path="/add-posts" element={<AddPost/>} />
                    <Route path="/edit-post" element={<EditPost/>} />
                    {/* <Route path="/show-books" element={<BooksView />} />
                    <Route path="/add-books" element={<AddBook />} />
                    <Route path="/edit-book" element={<EditBook/>} /> */}
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
          <Footer></Footer>
        </BrowserRouter>
    )
}

export default Index;
