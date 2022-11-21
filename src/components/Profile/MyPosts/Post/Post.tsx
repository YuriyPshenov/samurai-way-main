import React from 'react';
import './Post.module.css';
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.post}>
            <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="user's avatar"/>
            <div className={s.item}>post 1</div>
        </div>
    )
}

export default Post;