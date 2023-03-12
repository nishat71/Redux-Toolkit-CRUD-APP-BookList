import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBooks } from './BooksSlice';

import { v4 as uuidv4 } from 'uuid';

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const numberOfBooks = useSelector((state) => state.booksReducer.books.length); //redux toolkit teke dekte hobe kotogula books royese sejnno useSelector er maddome state e jabo, shey state teke booksReducer e jabo, booksReducer er books Slice teke books er length nibo
  // console.log(numberOfBooks);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const book = { id: numberOfBooks + 1, title, author };//user er kas teke j input pacchi ta book namok variable e store kore dibo
    const book = { id: uuidv4(), title, author };//user er kas teke j input pacchi ta book namok variable e store kore dibo
    dispatch(addBooks(book));
    navigate("/show-books", { replace: true });
  };

  return (
    <div>
      <h2>AddBook</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor="title">Title:</label>
          <input type="text" id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className='form-field'>
          <label htmlFor="author">Author:</label>
          <input type="text" id='author' name='author' value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div className='add-btn'>
          <button type='submit'>Add Book</button>
        </div>
      </form>
    </div>
  )
}

export default AddBook;
/* value hisebe state nibo
user er kas teke j input pacchi ta book namok variable e store kore dibo
book er ketre id o use korechilm, id kibabe generate krbo
jotogula book ase erpor add krle 1 kore barbe (ekane book er length kuje ber kore tar sate 1 add kore dibo id hisebe)
redux toolkit teke dekte hobe kotogula books royese sejnno useSelector er maddome state e jabo, shey state teke booksReducer e jabo, booksReducer er books Slice teke books er length nibo
new book k existing book er sate add krbo
*/

//ekan teke  action dispatch krte parbo , useDispatch er maddome
//dispatch use kore ekan teke akta action dispatch krbo

// add book e click korar sata sate jate show books er list e chole jay shey ketre navigate use krte hobe
//react router dom er maddome kibabe navigate use krte hoy

//CRUD --> Create, Read, Delete,