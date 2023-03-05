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
                <Post message="Hi, how are you?" likesCount={5}/>
                <Post message="It's my first post" likesCount={6}/>
            </div>
        </div>
    );
};

export default Posts;