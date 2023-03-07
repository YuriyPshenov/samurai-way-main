import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const dialogsData = [
    {id: 1, name: 'Billy Harrington'},
    {id: 2, name: 'Tommy Magwayer'},
    {id: 3, name: 'Unknown user'},
    {id: 4, name: 'Unknown user'},
    {id: 5, name: 'Unknown user'},
    {id: 6, name: 'Unknown user'},
    {id: 7, name: 'Unknown user'},
    {id: 8, name: 'Unknown user'},
    {id: 9, name: 'Unknown user'},
    {id: 10, name: 'Khabib'},
]

const messagesData = [
    {id: 1, message: 'Hi my love'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Hello'},
    {id: 4, message: 'One two three'},
    {id: 5, message: 'See you again'},
]

ReactDOM.render(
    <App dialogsData={dialogsData} messagesData={messagesData}/>,
  document.getElementById('root')
);