import {UsersDataType, UsersType} from "../store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'

const initialState: UsersType = {
    usersData: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1
}

export const dialogsReducer = (state: UsersType = initialState, action: ActionsUsersReducerTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, usersData: state.usersData.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, usersData: state.usersData.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, usersData: [...action.users]}
        case CHANGE_CURRENT_PAGE:
            return {...state, currentPage: action.newCurrentPage}
        case SET_USERS_TOTAL_COUNT:
            debugger
            return {...state, totalUsersCount: action.totalCount}
        default:
            return state
    }
}

export type ActionsUsersReducerTypes = FollowACType | unfollowACType | setUsersACType | ChangeCurrentPageACType
| SetUsersTotalCountACType

type FollowACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type ChangeCurrentPageACType = ReturnType<typeof changeCurrentPageAC>
type SetUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>

export const followAC = (userId: string) => ({type: FOLLOW, userId}) as const
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId}) as const
export const setUsersAC = (users: UsersDataType[]) => ({type: SET_USERS, users}) as const
export const changeCurrentPageAC = (newCurrentPage: number) => ({type: CHANGE_CURRENT_PAGE, newCurrentPage}) as const
export const setUsersTotalCountAC = (totalCount: number) => ({type: SET_USERS_TOTAL_COUNT, totalCount}) as const

export default dialogsReducer;