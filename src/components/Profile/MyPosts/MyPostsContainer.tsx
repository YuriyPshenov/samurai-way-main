import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/reducers/profileReducer";
import {StoreType} from "../../../Redux/redux-store";


type MyPostsContainerPropsType = {
    store: StoreType
}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = ({store}) => {
    const state = store.getState().profilePage

    const addPostDispatch = () => {
        store.dispatch(addPostActionCreator())
    }

    const postOnChangeDispatch = (value: string) => {
        store.dispatch(updateNewPostTextActionCreator(value))
    }

    return (
        <MyPosts postsData={state.postsData} addPost={addPostDispatch} updateNewPostText={postOnChangeDispatch} newPostText={state.newPostText}/>
    )
}

export default MyPostsContainer;