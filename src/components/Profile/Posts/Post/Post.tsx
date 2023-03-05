import React from 'react';
import s from "./Post.module.css";

type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}>
            <div className={s.postAvatarName}>
                <img src="https://img.freepik.com/free-icon/user_318-481462.jpg" alt="user's avatar"/>
                User Name
            </div>
            <div className={s.postContent}>
                {props.message}
            </div>
            <div className={s.postLikeButton}>
                {props.likesCount}
                <button>like</button>
            </div>
        </div>
    );
};

export default Post;