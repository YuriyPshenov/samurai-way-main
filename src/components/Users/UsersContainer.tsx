import React from 'react';
import {connect} from "react-redux";
import Users from "./UsersC";
import {ActionsTypes, StateType, UsersDataType} from "../../Redux/store";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/reducers/users-reducer";

const mapStateToProps = (state: StateType) => {
    return{
        usersData: state.usersPage.usersData
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return{
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUser: (users: UsersDataType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;