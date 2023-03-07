import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navigation/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {StateType} from "./redux/State";
import {Route} from "react-router-dom";

type AppPropsType = {
    appState: StateType
}

const App = (props: AppPropsType) => {

    const {profilePage, messagesPage, sitebar} = props.appState

    const profile = () => <Profile profilePage={profilePage}/>
    const dialogs = () => <Dialogs messagesPage={messagesPage}/>

    return (
        <div className="app-wrapper">
            <Header/>
            <div className="page-layout">
                <Navbar sitebar={sitebar}/>
                <div className="content">
                    <Route path="/profile" render={profile}/>
                    <Route path="/dialogs" render={dialogs}/>
                </div>
            </div>
        </div>
    )
}


export default App;
