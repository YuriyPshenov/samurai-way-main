import {rerenderEntireTree} from "../render";


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


export let state: StateType = {
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
}


export const addPost = (postText: string) => {
    const newPost: PostsDataType = {
        id: (state.profilePage.postsData.length + 1).toString(),
        message: postText,
        likesCount: 0
    }

    state.profilePage.postsData.unshift(newPost)

    updateNewPostText('')
    rerenderEntireTree(state)
}

export const updateNewPostText = (updateText: string) => {
    state.profilePage.newPostText = updateText
    rerenderEntireTree(state)
}