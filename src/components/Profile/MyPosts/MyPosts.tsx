import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    const postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 6},
        {id: 2, message: 'Its my first post', likesCount: 8},
        {id: 3, message: '?', likesCount: 4},
    ]

    return (
        <div className={s.myPosts}>
            <div className={s.textAreaZone}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                {postData.map(p => <Post key={p.id} id={p.id.toString()} message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}

export default MyPosts;