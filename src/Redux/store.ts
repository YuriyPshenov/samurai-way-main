import {ActionsProfileReducerTypes} from "./reducers/profileReducer";
import {ActionsDialogsReducerTypes} from "./reducers/dialogsReducer";
import {ActionsUsersReducerTypes} from "./reducers/users-reducer";

type AddressType = {
    country: string
    city: string
}

export type UsersDataType = {
    id: string
    photoUrl: string
    followed: boolean
    uniqueUrlName: string
    photos: {small: string, large: string}
    name: string
    status: string
    address: AddressType
}

export type UsersType = {
    usersData: UsersDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

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
    usersPage: UsersType
}


export type ActionsTypes = ActionsProfileReducerTypes | ActionsDialogsReducerTypes | ActionsUsersReducerTypes

// export type StoreType = {
//     _state: StateType
//     getState: () => StateType
//     _callSubscriber: (state: StateType) => void
//     subscribe: (observer: (state: StateType) => void) => void
//     dispatch: (action: ActionsTypes) => void
// }

// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 {id: '1', message: 'Hi, how are you?', likesCount: 6},
//                 {id: '2', message: 'Its my first post', likesCount: 8},
//                 {id: '3', message: '?', likesCount: 4},
//                 {id: '4', message: 'i love juice', likesCount: 5},
//                 {id: '5', message: 'i can', likesCount: 6},
//                 {id: '6', message: 'lol', likesCount: 7},
//                 {id: '7', message: 'my house', likesCount: 8},
//                 {id: '8', message: 'me', likesCount: 6},
//                 {id: '9', message: 'what is that', likesCount: 4},
//             ],
//             newPostText: ''
//         },
//         messagesPage: {
//             dialogsData: [
//                 {id: '1', name: 'Dimych'},
//                 {id: '2', name: 'Andrey'},
//                 {id: '3', name: 'Sveta'},
//                 {id: '4', name: 'Masha'},
//                 {id: '5', name: 'Viktor'},
//                 {id: '6', name: 'Valera'}
//             ],
//             messagesData: [
//                 {id: '1', message: 'Yo'},
//                 {id: '2', message: 'How are you?'},
//                 {id: '3', message: 'Hi'},
//                 {id: '4', message: 'whats your name'},
//                 {id: '5', message: 'Hey'},
//                 {id: '6', message: 'im here'}
//             ],
//             newMessageText: ''
//         }
//     },
//     getState() {
//         return this._state
//     },
//     subscribe (observer) {
//         this._callSubscriber = observer
//     },
//     _callSubscriber (state: StateType) {
//         console.log('state changed')
//     },
//     dispatch(action) { // {type: 'ADD_POST'}
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
//         this._callSubscriber(this._state)
//     }
// }
