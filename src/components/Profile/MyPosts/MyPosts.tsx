import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsDataType} from "../../../Redux/store";


type MyPostsPropsType = {
    postsData: PostsDataType[]
    addPost: () => void
    updateNewPostText: (value: string) => void
    newPostText: string
}

const MyPosts: React.FC<MyPostsPropsType> = ({postsData, addPost, updateNewPostText, newPostText}) => {


    const addPostOnClick = () => {
        addPost()
    }

    const postOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(event.currentTarget.value)
    }

    const postsDataElements = postsData.map(p => <Post key={p.id} id={p.id.toString()} message={p.message} likesCount={p.likesCount}/>)


    return (
        <div className={s.myPosts}>
            <div className={s.textAreaZone}>
                <textarea onChange={postOnChange} value={newPostText}></textarea>
                <button onClick={addPostOnClick}>Add post</button>
            </div>
            <div>
                {postsDataElements}
            </div>
        </div>
    )
}

export default MyPosts;