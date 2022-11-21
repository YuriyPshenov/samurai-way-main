import React from 'react';
import './Post.module.css';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount: number
    id: string
}

const Post = (props: PostPropsType) => {
    const {message, likesCount} = props
    return (
        <div className={s.post}>
            <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="user's avatar"/>
            <div className={s.item}>{message}</div>
            <div className={s.likesArea}>
                <span>{likesCount}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/105/105220.png" alt="likes"/>
            </div>
        </div>
    )
}

export default Post;