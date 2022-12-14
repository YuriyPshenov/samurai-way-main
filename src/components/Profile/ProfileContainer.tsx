import React from 'react';
import './Profile.module.css';
import {connect} from "react-redux";
import {PostsDataType, ProfilePageType, ProfileType, StateType} from "../../Redux/store";
import {addPostAC, setUserProfileAC, updateNewPostTextAC} from "../../Redux/reducers/profileReducer";
import Profile from "./Profile";
import axios from "axios";

type ProfileContainerPropsType = {
    postsData: PostsDataType[]
    newPostText: string
    addPostAC: () => void
    updateNewPostTextAC: (newText: string) => void
    setUserProfileAC: (profile: ProfileType | null) => void
    profile: ProfileType | null
}

class ProfileContainer extends React.Component<ProfileContainerPropsType, {}>{

    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0//profile/2`
        ).then(response => {
            this.props.setUserProfileAC(response.data)
            }
        )
    }

    render() {
        return (
                <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (state: StateType): ProfilePageType => {
    return{
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {addPostAC, updateNewPostTextAC, setUserProfileAC})(ProfileContainer);