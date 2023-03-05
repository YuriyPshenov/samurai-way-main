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
                    <Route component={Profile} path="/profile"/>
                    <Route component={Dialogs} path="/dialogs"/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
