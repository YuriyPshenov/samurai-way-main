import {rerenderEntireTree} from "../render";

export type MessagesDataType = {
    userId: number
    friendId: number
    userImgSrc: string
    friendImgSrc: string
    messages: Array<{ id: number, idMessage: number, message: string }>
}

export type messagesPageType = {
    dialogsData: Array<{ id: number, name: string }>
    messagesData: MessagesDataType
}

export type ProfilePageType = {
    postsData: Array<{ id: number, message: string, likesCount: number }>
}

export type SitebarType = {
    friends: Array<{ id: number, name: string }>
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: messagesPageType
    sidebar: SitebarType
}

export const state: StateType = {
    profilePage: {
        postsData: [
            {id: 1, message: 'My First Post', likesCount: 1},
            {id: 2, message: 'Tommy Magwayer', likesCount: 2},
            {id: 3, message: 'Unknown user', likesCount: 4},
            {id: 4, message: 'Unknown user', likesCount: 5},
            {id: 5, message: 'Unknown user', likesCount: 2},
        ],
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Billy Harrington'},
            {id: 2, name: 'Tommy Maguire'},
            {id: 3, name: 'Unknown user'},
            {id: 4, name: 'Unknown user'},
            {id: 5, name: 'Unknown user'},
            {id: 6, name: 'Unknown user'},
            {id: 7, name: 'Unknown user'},
            {id: 8, name: 'Unknown user'},
            {id: 9, name: 'Unknown user'},
            {id: 10, name: 'Khabib'},
        ],
        messagesData: {
            userId: 1,
            friendId: 2,
            userImgSrc: 'https://cdn-icons-png.flaticon.com/512/147/147133.png',
            friendImgSrc: 'https://img.freepik.com/free-icon/user_318-481462.jpg',
            messages: [
                {id: 1, idMessage: 1, message: 'Hi my love'},
                {id: 1, idMessage: 2, message: 'How are you'},
                {id: 2, idMessage: 3, message: 'Hello'},
                {id: 2, idMessage: 4, message: 'One two three'},
                {id: 1, idMessage: 5, message: 'Hi my love'},
                {id: 1, idMessage: 6, message: 'How are you'},
                {id: 2, idMessage: 7, message: 'Hello'},
                {id: 2, idMessage: 8, message: 'One two three'},
                {id: 2, idMessage: 9, message: 'One two three'},
                {id: 2, idMessage: 10, message: 'One two three'},
                {id: 2, idMessage: 11, message: 'One two three'},
                {id: 2, idMessage: 12, message: 'One two three'},
                {id: 2, idMessage: 13, message: 'One two three'},
                {id: 2, idMessage: 14, message: 'One two three'},
                {id: 1, idMessage: 15, message: 'How are you'},
            ]
        }
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Billy Harrington'},
            {id: 2, name: 'Tommy Maguire'},
            {id: 3, name: 'Khabib Nurmugamedov'},
            {id: 4, name: 'Elon Mask'},
            {id: 5, name: 'Unknown user'},
            {id: 6, name: 'Unknown user'},
        ]
    }
}

export const addPost = (postMessage: string) => {
    state.profilePage.postsData.push({id: 10 + postMessage.length, message: postMessage, likesCount: 0})
    rerenderEntireTree(state, addPost)
}
