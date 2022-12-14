import React from 'react';
import './Profile.module.css';
import {connect} from "react-redux";
import {PostsDataType, ProfilePageType, ProfileType, StateType} from "../../Redux/store";
import {addPostAC, setUserProfileAC, updateNewPostTextAC} from "../../Redux/reducers/profileReducer";
import Profile from "./Profile";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ProfileContainerPropsType = {
    postsData: PostsDataType[]
    newPostText: string
    addPostAC: () => void
    updateNewPostTextAC: (newText: string) => void
    setUserProfileAC: (profile: ProfileType | null) => void
    profile: ProfileType | null
}

type pathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<pathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType, {}>{

    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 2
        axios.get(
            `https://social-network.samuraijs.com/api/1.0//profile/` + userId
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

let WithUrlDataContainerComponent  = withRouter(ProfileContainer)

export default connect(mapStateToProps, {addPostAC, updateNewPostTextAC, setUserProfileAC})(WithUrlDataContainerComponent);