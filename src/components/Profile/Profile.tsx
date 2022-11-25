import React from 'react';
import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../Redux/store";


type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

const Profile: React.FC<ProfilePropsType> = ({profilePage, dispatch}) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={profilePage} dispatch={dispatch}/>
        </div>
    )
}

export default Profile;