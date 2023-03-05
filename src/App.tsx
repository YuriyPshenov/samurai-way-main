import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navigation/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";

type AppPropsType = {

}

const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header />
            <div className="page-layout">
                <Navbar />
                {/*<Profile/>*/}
                <Dialogs />
            </div>
        </div>
    )
}


export default App;
