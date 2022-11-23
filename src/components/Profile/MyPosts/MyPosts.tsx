import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {StoreType} from "../../../Redux/state";


type MyPostsPropsType = {
    store: StoreType
}

const MyPosts: React.FC<MyPostsPropsType> = ({store}) => {


    const addPostOnClick = () => {
        store.addPost(store.getState().profilePage.newPostText)
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        store.updateNewPostText(event.currentTarget.value)
    }


    return (
        <div className={s.myPosts}>
            <div className={s.textAreaZone}>
                <textarea onChange={onPostChange} value={store.getState().profilePage.newPostText}></textarea>
                <button onClick={addPostOnClick}>Add post</button>
            </div>
            <div>
                {store.getState().profilePage.postsData.map(p => <Post key={p.id} id={p.id.toString()} message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}

export default MyPosts;