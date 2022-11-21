import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://static-cse.canva.com/blob/560385/benjaminhung340384unsplash.jpg"
                     alt="img content"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>New Post</div>
                <div>
                    <div className={s.item}>post 1</div>
                    <div className={s.item}>post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;