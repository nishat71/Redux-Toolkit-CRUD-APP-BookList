import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from 'uuid';


const initialPosts = {
    posts: [
        { id: uuidv4(), title: "Humaira Akila Nishat...Lorem Ipsum is simply dummy text of the printing"},
        { id: uuidv4(), title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    ],
};

export const postSlice = createSlice({
    name: "posts",
    initialState: initialPosts,
    reducers: {
        showPosts: (state) => state,
        addPosts: (state, action) => {
            state.posts.push(action.payload)
        },
        updatePost: (state, action) => {
            const { id, title, author } = action.payload;
            const isPostExist = state.posts.filter((post) => post.id === id)
            if (isPostExist) {
                isPostExist[0].title = title;
                isPostExist[0].author = author;
            }
        },
        deletePost: (state, action) => {
            const id = action.payload;
            state.posts = state.posts.filter((post) => post.id !== id);
        },
    },
});

export const { showPosts, addPosts, deletePost, updatePost } = postSlice.actions;
export default postSlice.reducer;

