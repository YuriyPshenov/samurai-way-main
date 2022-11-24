import {PostsDataType, ProfilePageType} from "../state";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (state: ProfilePageType, action: ActionsProfileReducerTypes) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsDataType = {
                id: (state.postsData.length + 1).toString(),
                message: action.newText,
                likesCount: 0
            }
            state.postsData.unshift(newPost)
            state.newPostText = ''
            return state
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText
            return state
        }
        default: {
            return state
        }
    }
}

export type ActionsProfileReducerTypes = AddPostActionType | UpdateNewPostTextType

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextActionCreator>

export const addPostActionCreator = (newText: string) => ({type: ADD_POST, newText})
export const updateNewPostTextActionCreator = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText})

export default profileReducer;