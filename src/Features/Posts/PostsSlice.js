import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


const initialPosts = {
    posts: [
        { id: uuidv4(), title: "Humaira Akila Nishat...Lorem Ipsum is simply dummy text of the printing" },
        // { id: uuidv4(), title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    ],
    count: '',
};


export const postSlice = createSlice({
    name: "posts",
    initialState: initialPosts,
    reducers: {
        showPosts: (state) => state,
        addPosts: (state, action) => {
            state.posts.unshift(action.payload)
        },
        updatePost: (state, action) => {
            const { id, title } = action.payload;
            const isPostExist = state.posts.filter((post) => post.id === id)
            if (isPostExist) {
                isPostExist[0].title = title;
            }
        },
        deletePost: (state, action) => {
            const id = action.payload;
            state.posts = state.posts.filter((post) => post.id !== id);
        },
        // increment: (state, action) => {
        //     const { id } = action.payload;
        //     const isIdExist = state.posts.filter((post) => post.id === id)
        //     // console.log(isIdExist);
        //     if (isIdExist) {
        //         state.count = state.count + 1;
        //         // console.log(state.count);
        //     }
        // },

        likePost: state => {
            state.count = state.count + 1;

            // state.count = {
            //     disabled: false
            // }
            // console.log(typeof state.count);
        },
        // commentPost: (state, action) => {
        //     state.posts.push(action.payload)
        // },
    },
});

export const { showPosts, addPosts, deletePost, updatePost, likePost } = postSlice.actions;
export default postSlice.reducer;

