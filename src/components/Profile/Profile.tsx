import React from 'react';
import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: {type: string, newText?: string}) => void
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