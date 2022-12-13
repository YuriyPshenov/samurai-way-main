import React from 'react';
import {connect} from "react-redux";
import {ActionsTypes, StateType, UsersDataType} from "../../Redux/store";
import {
    changeCurrentPageAC,
    followAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC
} from "../../Redux/reducers/users-reducer";
import axios from "axios";
import Users from "./Users";

type UsersCPropsType = {
    usersData: UsersDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUser: (users: UsersDataType[]) => void
    changeCurrentPage: (newCurrentPage: number) => void
    setTotalCount: (totalCount: number) => void
}

class UsersContainer extends React.Component<UsersCPropsType, {}> {

    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        ).then(response => {
                this.props.setUser(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            }
        )
    }

    onPageChanged = (newCurrentPage: number) => {
        this.props.changeCurrentPage(newCurrentPage)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${newCurrentPage}&count=${this.props.pageSize}`
        ).then(response => {
                this.props.setUser(response.data.items)
            }
        )
    }

    render() {
        return <Users onPageChanged={this.onPageChanged}
                      usersData={this.props.usersData}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />
    }
}

const mapStateToProps = (state: StateType) => {
    return{
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        changeCurrentPage: (newCurrentPage: number) => {
            dispatch(changeCurrentPageAC(newCurrentPage))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);