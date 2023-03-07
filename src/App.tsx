import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navigation/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";

type AppPropsType = {
    dialogsData: Array<{id: number, name: string}>
    messagesData: Array<{id: number, message: string}>
}

const App = (props: AppPropsType) => {

    const profile = () => <Profile />
    const dialogs = () => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="page-layout">
                    <Navbar/>
                    <div className="content">
                        <Route path="/profile" render={profile} />
                        <Route path="/dialogs" render={dialogs} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
