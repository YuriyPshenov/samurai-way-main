import React from 'react';
import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../App";

type ProfilePropsType = {
    profilePageData: ProfilePageType
}

const Profile = (props: ProfilePropsType) => {

    const {profilePageData} = props

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={profilePageData.postsData}/>
        </div>
    )
}

export default Profile;