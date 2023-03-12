import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteBook } from './BooksSlice';

const BooksView = () => {
  const books = useSelector(state => state.booksReducer.books);
  console.log(books);

  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
    console.log('delete', id);
    dispatch(deleteBook(id));
  }
  return (
    <div>
      <h2>Lists of Books</h2>
      <table>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books && books.map((book) => {
            const { id, title, author } = book;
            // console.log(book);
            return (
              <tr key={id}>
                {/* <td>{id}</td> */}
                <td>{title}</td>
                <td>{author}</td>
                <td>
                  <Link to="/edit-book" state={{ id, title, author }}><button>Edit</button></Link>
                  <button onClick={() => { handleDeleteBook(id) }}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default BooksView


// redux toolkit teke data fetch kore show done
//handleDeleteBook id receive krbe and id er maddome akta action dispatch krbe, dispatch handle er jnno slice e jete hobe and shei delete action ready krte hobe
//dispatch er maddome action creator k cll dibo

//Edit --> Edit button k link e reke dibo and jkn edit button e click kora hobe tkn notun route e niye jabe and new component open krbe EditBook nam e
/*
jkn Edit e click krbo EditBook e page e niye jabe and book er data gulo giye akti form er moto jate ekane open hoy
EditBook e prothome e data gula niye ashte hobe, btn r click er sate sate datagula ekane(EditBook) niye ashte hobe sheyjnno uselocation use krte pari
link er maddome ai kaj krte pari, state er maddome 3ta jinish pass krbo

state er j jinish gula pass kora hoise segula jodi ekan teke access krte chai taile useLocation lagbe
*/