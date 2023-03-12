import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './BooksSlice';

const EditBook = () => {
    const location = useLocation(); //ai hooks er maddome value gula kuje nite pari
    console.log(location);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBook({ id, title, author }));
        navigate("/show-books", { replace: true })

        //data ashar por {id,title,author} datagula state er modde takbe
        //then updateBook nam e action creator create kore action k dispatch krbo cz updated data gula slice e niye jawa lagbe state k update krte hole
        //updateBook action dispatch krbo and data pass krbo
        //update korar por navigate kore show books e chole jabo
    }
    return (
        <div>
            <h2>EditBook</h2>
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
                    <button type='submit'>Update Book</button>
                </div>
            </form>
        </div>
    )
}

export default EditBook;

/*
jkn Edit e click krbo EditBook e page e niye jabe and book er data gulo giye akti form er moto jate ekane open hoy
EditBook e prothome e data gula niye ashte hobe, btn r click er sate sate datagula ekane(EditBook) niye ashte hobe sheyjnno uselocation use krte pari
link er maddome ai kaj krte pari, state er maddome 3ta jinish pass krbo

state er j jinish gula pass kora hoise segula jodi ekan teke access krte chai taile useLocation lagbe

object er modde state royese and shey state e  value gulo chole eshese
ederk state er modde reke dibo (location er state teke j id pabo seta ekane boshabo)

id,title, author niye niyesi, ebar form er modde egular value boshate parbo ejnno state er modde rekesi jate kore form er ai stategula diye tader control krte pari

jkn update book btn e click kora hobe tkn form submit hobe and shei datagula k abr new kore store e update krte hobe
*/