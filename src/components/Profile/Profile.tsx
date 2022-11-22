import React from 'react';
import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataPropsType} from "../../App";


const Profile = (props: PostDataPropsType) => {

    const {postData} = props

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={postData}/>
        </div>
    )
}

export default Profile;