import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Navbar/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";


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

export type IndexDataFromAppPropsType = {
    postsData: Array<PostsDataType>
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}

const App = (props: IndexDataFromAppPropsType) => {

    const {postsData, dialogsData, messagesData} = props

    const ProfileWithProps = () => <Profile postsData={postsData}/>
    const DialogsWithProps = () => <Dialogs dialogsData={dialogsData} messagesData={messagesData}/>

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={ProfileWithProps}/>
                    <Route path={'/dialogs'} render={DialogsWithProps}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
