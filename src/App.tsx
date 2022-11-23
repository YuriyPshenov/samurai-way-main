import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Navbar/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import {addPost, state, updateNewPostText} from "./Redux/state";


// type AppPropsType = {
//     state: StateType
//     addPost: (postText: string) => void
//     updateNewPostText: (updateText: string) => void
// }

const App = () => {

    const {profilePage, messagesPage} = state

    const ProfileWithProps = () => <Profile profilePageData={profilePage} addPost={addPost} updateNewPostText={updateNewPostText}/>
    const DialogsWithProps = () => <Dialogs messagesPageData={messagesPage}/>

    return (
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
    )
}


export default App;
