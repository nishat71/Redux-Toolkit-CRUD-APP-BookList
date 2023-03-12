import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from 'uuid';
// const { v4: uuidv4 } = require('uuid');

const initialBooks = {
    books: [
        { id: uuidv4(), title: "Love Bangladesh", author: "Humaira Azad" },
        { id: uuidv4(), title: "Bangladesh", author: "Nishat" },
    ],
};

export const bookSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBooks: (state, action) => {
            state.books.push(action.payload)//already j books ase tar sate add/push krbo array te new book (action.payload teke new data pabo)
        },
        updateBook: (state, action) => {
            const { id, title, author } = action.payload;
            const isBookExist = state.books.filter((book) => book.id === id)
            if (isBookExist) {
                isBookExist[0].title = title;
                isBookExist[0].author = author;
            }
        },
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !== id);
        },
    },
});

export const { showBooks, addBooks, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;


//reducers er modde object akare ake ake action creator function use krbo
// showBooks function create krbo tar kaj holo tar modde ja kisu ase state return kra
//reducer and action creator export krbo
// egula k use er jnnno store ready krte hobe store.js e


//addBooks nam e action creator create krbo, addBooks er kaj holo already j state ase tar sate new book add krbo
//action lagbe cz addbook korar smy ai action ta lagbe,
// action er maddome user er kas teke new j book peyesi shei book ta patabo and then shey book ta k action.payload er maddome kuje nite parbe

//deleteBook e action e payload er maddome id pass krbo, id er maddome state.books update krbo sheyjjnno state.books teke filtering krbo, filtering kore abr state.books e reke dicchi

//update action er modde new data pabo sheygula age niye nicchi, { id, title, author }  pabo action.payload teke
// datagula pawar por check krte hobe ai id er sate state.books er array er sate match hocche ki na, exist kore ki na

//isBookExist pawa jay then update krbo, isBookExist array hisebe ashbe jar 1st index 0 hobe akta array er modde  takbe tar teke title change krbo (title hobe user teke j tilte pabo seta)















//Slice er maddome reducer er logic gula niye kaj kori redux toolkit e 