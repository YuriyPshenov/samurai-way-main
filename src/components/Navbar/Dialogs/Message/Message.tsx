import React from 'react';
import './Message.module.css';
import s from './Message.module.css'


type MessagePropsType = {
    message: string
    id: string
}

const Message = (props: MessagePropsType) => {
    const {message, id} = props
    return <div className={s.message} id={id}>{message}</div>
}

export default Message;