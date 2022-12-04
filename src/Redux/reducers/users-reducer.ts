import {UsersDataType, UsersType} from "../store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState: UsersType = {
    usersData: []
}

export const dialogsReducer = (state: UsersType = initialState, action: ActionsUsersReducerTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, usersData: state.usersData.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, usersData: state.usersData.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, usersData: [...state.usersData, ...action.users]}
        default:
            return state
    }
}

export type ActionsUsersReducerTypes = FollowACType | unfollowAC | setUsersAC

type FollowACType = ReturnType<typeof followAC>
type unfollowAC = ReturnType<typeof unfollowAC>
type setUsersAC = ReturnType<typeof setUsersAC>

export const followAC = (userId: string) => ({type: FOLLOW, userId}) as const
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId}) as const
export const setUsersAC = (users: UsersDataType[]) => ({type: SET_USERS, users}) as const

export default dialogsReducer;