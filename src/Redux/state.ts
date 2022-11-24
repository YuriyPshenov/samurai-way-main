// let rerenderEntireTree = (state: StateType) => {
//     console.log('State changed')
// }


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

export type MessagesPage = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPage
}

// type ObserverType = {
//     observer: (state: StateType) => void
// }

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: {type: string, newText?: string}) => void
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
            ]
        }
    },
    getState() {
        return this._state
    },
    subscribe (observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },
    _callSubscriber (state: StateType) {
        console.log('state changed')
    },
    dispatch(action) { // {type: 'ADD_POST'}
        if (action.type === 'ADD-POST') {
            const newPost: PostsDataType = {
                id: (this._state.profilePage.postsData.length + 1).toString(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }

            this._state.profilePage.postsData.unshift(newPost)

            this.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: ''})
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText!
            this._callSubscriber(this._state)
        }
    }
}


// export let state: StateType = {
//     profilePage: {
//         postsData: [
//             {id: '1', message: 'Hi, how are you?', likesCount: 6},
//             {id: '2', message: 'Its my first post', likesCount: 8},
//             {id: '3', message: '?', likesCount: 4},
//             {id: '4', message: 'i love juice', likesCount: 5},
//             {id: '5', message: 'i can', likesCount: 6},
//             {id: '6', message: 'lol', likesCount: 7},
//             {id: '7', message: 'my house', likesCount: 8},
//             {id: '8', message: 'me', likesCount: 6},
//             {id: '9', message: 'what is that', likesCount: 4},
//         ],
//         newPostText: ''
//     },
//     messagesPage: {
//         dialogsData: [
//             {id: '1', name: 'Dimych'},
//             {id: '2', name: 'Andrey'},
//             {id: '3', name: 'Sveta'},
//             {id: '4', name: 'Masha'},
//             {id: '5', name: 'Viktor'},
//             {id: '6', name: 'Valera'}
//         ],
//         messagesData: [
//             {id: '1', message: 'Yo'},
//             {id: '2', message: 'How are you?'},
//             {id: '3', message: 'Hi'},
//             {id: '4', message: 'whats your name'},
//             {id: '5', message: 'Hey'},
//             {id: '6', message: 'im here'}
//         ]
//     }
// }
//
//
// export const addPost = (postText: string) => {
//     const newPost: PostsDataType = {
//         id: (state.profilePage.postsData.length + 1).toString(),
//         message: postText,
//         likesCount: 0
//     }
//
//     state.profilePage.postsData.unshift(newPost)
//
//     updateNewPostText('')
//     rerenderEntireTree(state)
// }
//
//
// export const updateNewPostText = (updateText: string) => {
//     state.profilePage.newPostText = updateText
//     rerenderEntireTree(state)
// }

// export const subscribe = (observer: (state: StateType) => void) => {
//     rerenderEntireTree = observer // наблюдатель - observer // addEventListener
// }
