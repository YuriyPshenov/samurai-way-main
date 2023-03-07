import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navigation/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";

type AppPropsType = {}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="page-layout">
                    <Navbar/>
                    <div className="content">
                        <Route path="/profile" component={Profile} />
                        <Route path="/dialogs" component={Dialogs} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
