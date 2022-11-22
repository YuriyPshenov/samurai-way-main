import React from 'react';
import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsDataType} from "../../App";

type ProfilePropsType = {
    postsData: Array<PostsDataType>
}

const Profile = (props: ProfilePropsType) => {

    const {postsData} = props

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    )
}

export default Profile;