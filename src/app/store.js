import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from "../Features/Books/BooksSlice";

const store = configureStore({
    reducer: {
        booksReducer: BooksReducer,
    }
})
export default store;