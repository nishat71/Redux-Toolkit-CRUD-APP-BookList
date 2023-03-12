import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from "../Features/Posts/PostsSlice";

const store = configureStore({
    reducer: {
        postsReducer : PostsReducer,
    }
})
export default store;