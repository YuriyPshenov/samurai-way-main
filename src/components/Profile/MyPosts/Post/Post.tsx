import React from 'react';
import './Post.module.css';
import s from './Post.module.css'

type PostPropsType = {
    message: string
}

const Post = (props: PostPropsType) => {
    const {message} = props
    return (
        <div className={s.post}>
            <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="user's avatar"/>
            <div className={s.item}>{message}</div>
            <span>like</span>
        </div>
    )
}

export default Post;