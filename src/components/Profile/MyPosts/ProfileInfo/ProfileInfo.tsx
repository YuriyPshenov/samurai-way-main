import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <>
            <div className={s.mainImgForContent}>
                <img src="https://static-cse.canva.com/blob/560385/benjaminhung340384unsplash.jpg"
                     alt="img content"/>
            </div>
            <div className={s.usersAvatarDescription}>
                <img
                    src="https://sun9-2.userapi.com/impg/mkL7m7-1vMYa_A9jH9p5pXdoTYhTq7CkyUlgBA/mh8-ZHpr1g0.jpg?size=1024x1024&quality=96&sign=0b38ecc2f08ba6bc4fa0715c5a085a7c&type=album"
                    alt="user's avatar"/>
                <span>Description</span>
            </div>
        </>
    )
}

export default ProfileInfo;