import React from 'react';
import s from "./Post.module.css";


const Post = () => {
    return (
        <div className={s.post}>
            <div className={s.postAvatarName}>
                <img src="https://img.freepik.com/free-icon/user_318-481462.jpg" alt="user's avatar"/>
                User Name
            </div>
            <div className={s.postContent}>
                Hello. it's my first post
            </div>
            <div className={s.postLikeButton}>
                12
                <button>like</button>
            </div>
        </div>
    );
};

export default Post;