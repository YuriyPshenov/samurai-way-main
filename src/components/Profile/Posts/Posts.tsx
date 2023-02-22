import React from 'react';
import s from "./Posts.module.css";
import Post from "./Post/Post";


const Posts = () => {

    return (
        <div className={s.postsContainer}>
            My posts
            <div className={s.newPost}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

export default Posts;