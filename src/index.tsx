import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const postData = [
    {id: '1', message: 'Hi, how are you?', likesCount: 6},
    {id: '2', message: 'Its my first post', likesCount: 8},
    {id: '3', message: '?', likesCount: 4},
    {id: '4', message: 'i love juice', likesCount: 5},
    {id: '5', message: 'i can', likesCount: 6},
    {id: '6', message: 'lol', likesCount: 7},
    {id: '7', message: 'my house', likesCount: 8},
    {id: '8', message: 'me', likesCount: 6},
    {id: '9', message: 'what is that', likesCount: 4},
]

ReactDOM.render(
    <App postData={postData}/>,
    document.getElementById('root')
)