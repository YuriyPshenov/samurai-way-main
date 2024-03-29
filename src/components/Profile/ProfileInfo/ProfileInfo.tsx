import React from 'react';
import s from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.mainContentImg}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/56/Unknown_road_at_night%2C_Japan%3B_March_2013.jpg"
                    alt="maincontentimage"/>
            </div>
            <div className={s.avatarDescription}>
                <img src="https://cdn-icons-png.flaticon.com/512/147/147133.png" alt="user's avatar"/>
                <h3>Ricardo Milos</h3>
            </div>
        </div>
    );
};