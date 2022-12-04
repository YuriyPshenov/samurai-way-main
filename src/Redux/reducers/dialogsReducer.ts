import {MessagesPageType} from "../store";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    dialogsData: [
        {id: '1', name: 'Dimych'},
        {id: '2', name: 'Andrey'},
        {id: '3', name: 'Sveta'},
        {id: '4', name: 'Masha'},
        {id: '5', name: 'Viktor'},
        {id: '6', name: 'Valera'}
    ],
    messagesData: [
        {id: '1', message: 'Yo'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Hi'},
        {id: '4', message: 'whats your name'},
        {id: '5', message: 'Hey'},
        {id: '6', message: 'im here'}
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionsDialogsReducerTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state, messagesData: [...state.messagesData, {id: (state.messagesData.length + 1).toString(), message: action.newText}], newMessageText: ''}
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageText: action.newText}
        default:
            return state
    }
}

export type ActionsDialogsReducerTypes = AddMessageType | UpdateNewMessageTypeText

type AddMessageType = ReturnType<typeof addMessageActionCreator>
type UpdateNewMessageTypeText = ReturnType<typeof updateNewMessageTextActionCreator>

export const addMessageActionCreator = (newText: string) => ({type: ADD_MESSAGE, newText})
export const updateNewMessageTextActionCreator = (newText: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText})

export default dialogsReducer;