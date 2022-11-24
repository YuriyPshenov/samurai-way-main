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
import {StoreType} from "./Redux/state";


type AppPropsType = {
    store: StoreType
    dispatch: (action: {type: string, newText?: string}) => void
}

const App: React.FC<AppPropsType>  = ({store, dispatch}) => {

    const ProfileWithProps = () => <Profile profilePage={store.getState().profilePage} dispatch={dispatch}/>
    const DialogsWithProps = () => <Dialogs messagesPage={store.getState().messagesPage} dispatch={dispatch}/>

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
