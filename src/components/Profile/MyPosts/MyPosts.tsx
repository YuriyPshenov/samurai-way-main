import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostDataPropsType} from "../../../App";


const MyPosts = (props: PostDataPropsType) => {

    const {postData} = props

    return (
        <div className={s.myPosts}>
            <div className={s.textAreaZone}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                {postData.map(p => <Post key={p.id} id={p.id.toString()} message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}

export default MyPosts;