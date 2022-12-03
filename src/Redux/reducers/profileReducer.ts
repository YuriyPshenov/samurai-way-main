import {PostsDataType, ProfilePageType} from "../store";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


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
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsProfileReducerTypes) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsDataType = {
                id: (state.postsData.length + 1).toString(),
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, postsData: [newPost, ...state.postsData], newPostText: ''}
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        default: {
            return state
        }
    }
}

export type ActionsProfileReducerTypes = UpdateNewPostTextType | AddPostActionType

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextActionCreator>

export const addPostActionCreator = () => ({type: ADD_POST}) as const
export const updateNewPostTextActionCreator = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText}) as const

export default profileReducer;