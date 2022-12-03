import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";

import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";


type AppPropsType = {
    // state: StateType
    // dispatch: (action: ActionsTypes) => void
    // store: StoreType
}

const App: React.FC<AppPropsType>  = () => {

    const ProfileWithProps = () => <Profile />
    const DialogsWithProps = () => <DialogsContainer />

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
