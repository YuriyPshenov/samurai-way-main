import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.mainImgForContent}>
                <img src="https://static-cse.canva.com/blob/560385/benjaminhung340384unsplash.jpg"
                     alt="img content"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;