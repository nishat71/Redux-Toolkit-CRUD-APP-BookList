import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Error from '../Pages/Error'
import Navbar from '../Layouts/Navbar'
import BooksView from '../Features/Books/BooksView'
import AddBook from '../Features/Books/AddBook'
import Footer from '../Layouts/Footer'
import EditBook from '../Features/Books/EditBook'

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/show-books" element={<BooksView />} />
                    <Route path="/add-books" element={<AddBook />} />
                    <Route path="/edit-book" element={<EditBook/>} />
                    <Route path="*" element={<Error />} />
                    {/* specific route chara onno kuno route ashle */}
                </Routes>
            </main>
          <Footer></Footer>
        </BrowserRouter>
    )
}

export default Index;
