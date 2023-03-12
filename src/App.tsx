import React, {FC} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navigation/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {StateType} from "./redux/State";
import {Route} from "react-router-dom";

type AppPropsType = {
    appState: StateType
    addPost: (postMessage: string) => void
}

const App: FC<AppPropsType> = (props) => {


    const {profilePage, messagesPage, sidebar} = props.appState

    const profile = () => <Profile profilePage={profilePage} addPost={props.addPost}/>
    const dialogs = () => <Dialogs messagesPage={messagesPage}/>

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar sitebar={sidebar}/>
            <div className="page-layout">
                <div className="content">
                    <Route path="/profile" render={profile}/>
                    <Route path="/dialogs" render={dialogs}/>
                </div>
            </div>
        </div>
    )
}


export default App;
