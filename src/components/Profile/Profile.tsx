import React from 'react';
import s from './Profile.module.css';
import Posts from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/State";

type ProfilePropsType = {
    profilePage: ProfilePageType
}

export const Profile = (props: ProfilePropsType) => {
    const {postsData} = props.profilePage
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <Posts postsData={postsData}/>
        </div>
    );
};