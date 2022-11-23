import React from 'react';
import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../Redux/state";


type ProfilePropsType = {
    store: StoreType
}

const Profile: React.FC<ProfilePropsType> = ({store}) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts store={store}/>
        </div>
    )
}

export default Profile;