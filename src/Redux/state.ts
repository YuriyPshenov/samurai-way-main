const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export type PostsDataType = {
    id: string
    message: string
    likesCount: number
}

export type DialogsDataType = {
    id: string
    name: string
}

export type MessagesDataType = {
    id: string
    message: string
}

export type ProfilePageType = {
    postsData: Array<PostsDataType>
    newPostText: string
}

export type MessagesPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageText: string
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}


type AddPostActionType = ReturnType<typeof addPostActionCreator>

type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextActionCreator>

type AddMessageType = ReturnType<typeof addMessageActionCreator>

type UpdateNewMessageTypeText = ReturnType<typeof updateNewMessageTextActionCreator>

export type ActionsTypes = AddPostActionType | UpdateNewPostTextType | AddMessageType | UpdateNewMessageTypeText

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionsTypes) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
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
        },
        messagesPage: {
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
    },
    getState() {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },
    _callSubscriber (state: StateType) {
        console.log('state changed')
    },
    dispatch(action) { // {type: 'ADD_POST'}
        if (action.type === ADD_POST) {
            const newPost: PostsDataType = {
                id: (this._state.profilePage.postsData.length + 1).toString(),
                message: action.newText,
                likesCount: 0
            }

            this._state.profilePage.postsData.unshift(newPost)

            this.dispatch({type: UPDATE_NEW_POST_TEXT, newText: ''})
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)

        } else if (action.type === ADD_MESSAGE) {
            const newMassage: MessagesDataType = {
                id: (this._state.messagesPage.messagesData.length + 1).toString(),
                message: action.newText
            }
            this._state.messagesPage.messagesData.push(newMassage)
            this.dispatch({type: UPDATE_NEW_MESSAGE_TEXT, newText: ''})
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        }
    }
}


export const addPostActionCreator = (newText: string) => ({type: ADD_POST, newText})
export const updateNewPostTextActionCreator = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText})

export const addMessageActionCreator = (newText: string) => ({type: ADD_MESSAGE, newText})
export const updateNewMessageTextActionCreator = (newText: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText})
