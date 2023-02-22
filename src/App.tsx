import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navigation/Navbar";
import Profile from "./components/Profile/Profile";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="page-layout">
                <Navbar/>
                <Profile/>
            </div>
        </div>
    )
}


export default App;
