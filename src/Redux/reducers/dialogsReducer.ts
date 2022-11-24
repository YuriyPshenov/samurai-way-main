import {MessagesDataType, MessagesPageType} from "../state";
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


export const dialogsReducer = (state: MessagesPageType, action: ActionsDialogsReducerTypes) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMassage: MessagesDataType = {
                id: (state.messagesData.length + 1).toString(),
                message: action.newText
            }
            state.messagesData.push(newMassage)
            state.newMessageText = ''
            return state
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newText
            return state
        }
        default: {
            return state
        }
    }
}

export type ActionsDialogsReducerTypes = AddMessageType | UpdateNewMessageTypeText

type AddMessageType = ReturnType<typeof addMessageActionCreator>
type UpdateNewMessageTypeText = ReturnType<typeof updateNewMessageTextActionCreator>

export const addMessageActionCreator = (newText: string) => ({type: ADD_MESSAGE, newText})
export const updateNewMessageTextActionCreator = (newText: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText})

export default dialogsReducer;