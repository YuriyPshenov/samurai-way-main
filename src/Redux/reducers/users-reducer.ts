import {UsersDataType, UsersType} from "../store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState: UsersType = {
    usersData: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export type ActionsUsersReducerTypes = FollowACType | unfollowACType | setUsersACType | ChangeCurrentPageACType
| SetUsersTotalCountACType | ToggleIsFetchingACType

type FollowACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type ChangeCurrentPageACType = ReturnType<typeof changeCurrentPageAC>
type SetUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>
type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>

export const followAC = (userId: string) => ({type: FOLLOW, userId}) as const
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId}) as const
export const setUsersAC = (users: UsersDataType[]) => ({type: SET_USERS, users}) as const
export const changeCurrentPageAC = (newCurrentPage: number) => ({type: CHANGE_CURRENT_PAGE, newCurrentPage}) as const
export const setUsersTotalCountAC = (totalCount: number) => ({type: SET_USERS_TOTAL_COUNT, totalCount}) as const
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}) as const

export default dialogsReducer;