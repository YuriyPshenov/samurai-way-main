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
                <img src={profile.photos.large}
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