import React from 'react';
import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../App";

type ProfilePropsType = {
    profilePageData: ProfilePageType
    addPost: (messagePost: string) => void
}

const Profile = (props: ProfilePropsType) => {

    const {profilePageData, addPost} = props

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={profilePageData.postsData} addPost={addPost}/>
        </div>
    )
}

export default Profile;