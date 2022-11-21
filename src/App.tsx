import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png" alt={'logo'}/>
            </header>
            <nav className={'nav'}>
                <div>Profile</div>
                <div>Messages</div>
                <div>Music</div>
                <div>News</div>
            </nav>
            <div className={'content'}>
                <div>
                    <img src="https://static-cse.canva.com/blob/560385/benjaminhung340384unsplash.jpg"
                         alt="img content"/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>Post</div>
                </div>
            </div>
        </div>
    )
}


export default App
