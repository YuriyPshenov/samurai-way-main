import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <div className={s.textAreaZone}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message={'Hi, how are you?'} likesCount={10}/>
                <Post message={`It's my first post`} likesCount={6}/>
                <Post message={'?'} likesCount={5}/>
            </div>
        </div>
    )
}

export default MyPosts;