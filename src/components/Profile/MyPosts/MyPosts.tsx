import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsDataType} from "../../../Redux/state";


type MyPostsPropsType = {
    postsData: Array<PostsDataType>
    addPost: (postText: string) => void
    newPostText: string
    updateNewPostText: (updateText: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({postsData, addPost, updateNewPostText, newPostText}) => {


    const addPostOnClick = () => {
        addPost(newPostText)
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(event.currentTarget.value)
    }


    return (
        <div className={s.myPosts}>
            <div className={s.textAreaZone}>
                <textarea onChange={onPostChange} value={newPostText}></textarea>
                <button onClick={addPostOnClick}>Add post</button>
            </div>
            <div>
                {postsData.map(p => <Post key={p.id} id={p.id.toString()} message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}

export default MyPosts;