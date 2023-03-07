import React from 'react';
import s from "./Posts.module.css";
import Post from "./Post/Post";


const Posts = () => {

    const postsData = [
        {id: 1, message: 'My First Post', likesCount: 1},
        {id: 2, message: 'Tommy Magwayer', likesCount: 2},
        {id: 3, message: 'Unknown user', likesCount: 4},
        {id: 4, message: 'Unknown user', likesCount: 5},
        {id: 5, message: 'Unknown user', likesCount: 2},
    ]

    const postsElements = postsData.map(post =>
        <Post key={post.id}
              id={post.id}
              message={post.message}
              likesCount={post.likesCount}
        />)

    return (
        <div className={s.postsContainer}>
            My posts
            <div className={s.newPost}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
};

export default Posts;