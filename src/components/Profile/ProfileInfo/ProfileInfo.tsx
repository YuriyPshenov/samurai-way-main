import React, {FC} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../Redux/store";
import Preloader from "../../common/preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

const ProfileInfo: FC<ProfileInfoPropsType> = (
    {
        profile
    }
    ) => {
    if(!profile) {
        return <Preloader/>
    }
    return (
        <>
            <div className={s.mainImgForContent}>
                <img src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHRva3lvJTIwbmlnaHR8ZW58MHx8MHx8&w=1000&q=80"
                     alt="img content"/>
            </div>
            <div className={s.usersAvatarDescription}>
                <img
                    src={profile.photos.small}
                    alt="user's avatar"/>
                <div className={s.userInfo}>
                    <span>{profile.fullName}</span>
                    <span>About me: {profile.aboutMe}</span>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;