import React from 'react';
import s from "./Posts.module.css";
import Post from "./Post/Post";

type PostsPropsType = {
    postsData: Array<{id: number, message: string, likesCount: number}>
}

const Posts = (props: PostsPropsType) => {

    const {postsData} = props

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