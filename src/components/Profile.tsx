import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Unknown_road_at_night%2C_Japan%3B_March_2013.jpg" alt="maincontentimage"/>
            <div>
                ava + description
            </div>
            <div className={s.postsContainer}>
                My posts
                <div className={s.newPost}>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;