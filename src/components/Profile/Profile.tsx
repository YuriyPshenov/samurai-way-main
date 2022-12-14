import React, {FC} from 'react';
import './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {PostsDataType, ProfileType} from "../../Redux/store";

type ProfilePropsType = {
    postsData: PostsDataType[]
    newPostText: string
    addPostAC: () => void
    updateNewPostTextAC: (newText: string) => void
    setUserProfileAC: (profile: ProfileType | null) => void
    profile: ProfileType | null
}

const Profile: FC<ProfilePropsType> = (
    {
    profile,
    }
    ) => {
    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;