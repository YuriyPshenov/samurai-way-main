import {ProfilePageType, ProfileType} from "../store";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


const initialState = {
    postsData: [
        {id: '1', message: 'Hi, how are you?', likesCount: 6},
        {id: '2', message: 'Its my first post', likesCount: 8},
        {id: '3', message: '?', likesCount: 4},
        {id: '4', message: 'i love juice', likesCount: 5},
        {id: '5', message: 'i can', likesCount: 6},
        {id: '6', message: 'lol', likesCount: 7},
        {id: '7', message: 'my house', likesCount: 8},
        {id: '8', message: 'me', likesCount: 6},
        {id: '9', message: 'what is that', likesCount: 4},
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsProfileReducerTypes) => {
    switch (action.type) {
        case ADD_POST:
            return {...state, postsData: [{id: (state.postsData.length + 1).toString(), message: state.newPostText, likesCount: 0}, ...state.postsData], newPostText: ''}
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export type ActionsProfileReducerTypes = UpdateNewPostTextACType | AddPostActionACType | setUserProfileACType

type AddPostActionACType = ReturnType<typeof addPostAC>
type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
type setUserProfileACType = ReturnType<typeof setUserProfileAC>

export const addPostAC = () => ({type: ADD_POST}) as const
export const updateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText}) as const
export const setUserProfileAC = (profile: ProfileType | null) => ({type: SET_USER_PROFILE, profile}) as const


export default profileReducer;