import React from 'react';
import './MyPosts.module.css';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            User's posts
            <div className={s.textAreaZone}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message={'Hi, how are you?'}/>
                <Post message={`It's my first post`}/>
                <Post message={'?'}/>
            </div>
        </div>
    )
}

export default MyPosts;