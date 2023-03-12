import React, {useState} from 'react';
import s from "./Posts.module.css";
import Post from "./Post/Post";
import {state} from "../../../redux/State";

type PostsPropsType = {
    postsData: Array<{id: number, message: string, likesCount: number}>
    addPost: (postMessage: string) => void
}

const Posts = (props: PostsPropsType) => {

    const {postsData, addPost} = props

    const [title, setTilte] = useState("")

    const postsElements = postsData.map(post =>
        <Post key={post.id}
              id={post.id}
              message={post.message}
              likesCount={post.likesCount}
        />)

    console.log(state)

    const onClickButtonHandler = () => {
        addPost(title)
        setTilte("")
        alert(newPostElement.current?.value)
    }

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    return (
        <div className={s.postsContainer}>
            My posts
            <div className={s.newPost}>
                <textarea value={title} onChange={(event) => setTilte(event.target.value)}></textarea>
                <button onClick={onClickButtonHandler}>Add post</button>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
};

export default Posts;