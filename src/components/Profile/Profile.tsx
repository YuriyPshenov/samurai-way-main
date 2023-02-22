import React from 'react';
import s from './Profile.module.css';
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/56/Unknown_road_at_night%2C_Japan%3B_March_2013.jpg"
                    alt="maincontentimage"/>
            </div>
            <div className={s.avatarDescription}>
                <img src="https://img.freepik.com/free-icon/user_318-481462.jpg" alt="user's avatar"/>
                <p>It's my new profile on this social network</p>
            </div>
            <Posts/>
        </div>
    );
};

export default Profile;