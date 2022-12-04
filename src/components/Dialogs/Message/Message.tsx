import React from 'react';
import './Message.module.css';
import s from './Message.module.css'


type MessagePropsType = {
    message: string
    id: string
}

const Message = (props: MessagePropsType) => {
    const {message, id} = props
    return (
        <div className={s.message} id={id}>
            <div className={s.companionMessage}>
                <img src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" alt=""/>
                <div>{message}</div>
            </div>
            <div className={s.userMessage}>
                <div>{message}</div>
                <img src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" alt=""/>
            </div>
        </div>
    )
}

export default Message;