import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/reducers/profileReducer";
import {connect} from "react-redux";
import {ActionsTypes, StateType} from "../../../Redux/store";


const mapStateToProps = (state: StateType) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (value: string) => {
            dispatch(updateNewPostTextAC(value))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;