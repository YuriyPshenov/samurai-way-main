import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, ProfilePageType, updateNewPostTextActionCreator} from "../../../Redux/state";


type MyPostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: {type: string, newText?: string}) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({profilePage, dispatch}) => {


    const addPostOnClick = () => {
        dispatch(addPostActionCreator())
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostTextActionCreator(event.currentTarget.value))
    }


    return (
        <div className={s.myPosts}>
            <div className={s.textAreaZone}>
                <textarea onChange={onPostChange} value={profilePage.newPostText}></textarea>
                <button onClick={addPostOnClick}>Add post</button>
            </div>
            <div>
                {profilePage.postsData.map(p => <Post key={p.id} id={p.id.toString()} message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}

export default MyPosts;