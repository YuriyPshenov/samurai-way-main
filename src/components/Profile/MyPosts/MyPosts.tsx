import React, {MouseEvent, LegacyRef} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsDataType} from "../../../App";

type MyPostsPropsType = {
    postsData: Array<PostsDataType>
    addPost: (messagePost: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    const {postsData, addPost} = props

    const newPostElement: LegacyRef<HTMLTextAreaElement> = React.createRef()

    const addPostOnClick = (event: MouseEvent<HTMLButtonElement>) => {
        debugger
        let text = newPostElement.current?.value
        return text ? addPost(text) : event.stopPropagation()
    }


    return (
        <div className={s.myPosts}>
            <div className={s.textAreaZone}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPostOnClick}>Add post</button>
            </div>
            <div>
                {postsData.map(p => <Post key={p.id} id={p.id.toString()} message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}

export default MyPosts;