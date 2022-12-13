import React from "react";
import {connect} from "react-redux";
import {ActionsTypes, StateType, UsersDataType, UsersType} from "../../Redux/store";
import {
    changeCurrentPageAC,
    followAC,
    setUsersAC,
    setUsersTotalCountAC, toggleIsFetchingAC,
    unfollowAC
} from "../../Redux/reducers/users-reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

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
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersCPropsType, {}> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        ).then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUser(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            }
        )
    }

    onPageChanged = (newCurrentPage: number) => {
        this.props.changeCurrentPage(newCurrentPage)
        this.props.toggleIsFetching(true)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${newCurrentPage}&count=${this.props.pageSize}`
        ).then(response => {
            this.props.toggleIsFetching(false)
                this.props.setUser(response.data.items)
            }
        )
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users onPageChanged={this.onPageChanged}
                       usersData={this.props.usersData}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                />
            </>
        )
    }
}

const mapStateToProps = (state: StateType): UsersType => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
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
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);