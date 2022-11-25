import React from 'react';
import './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../Redux/redux-store";


type ProfilePropsType = {
    store: StoreType
}

const Profile: React.FC<ProfilePropsType> = ({store}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>
        </div>
    )
}

export default Profile;