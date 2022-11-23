import React from 'react';
import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/state";


type ProfilePropsType = {
    profilePageData: ProfilePageType
    addPost: (postText: string) => void
    updateNewPostText: (updateText: string) => void
}

const Profile: React.FC<ProfilePropsType> = ({profilePageData, addPost, updateNewPostText}) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={profilePageData.postsData} addPost={addPost} newPostText={profilePageData.newPostText} updateNewPostText={updateNewPostText}/>
        </div>
    )
}

export default Profile;