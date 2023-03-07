import React from 'react';
import s from './Message.module.css';

type MessagePropsType = {
    userId: number
    friendId: number
    userImgSrc: string
    friendImgSrc: string
    messageUserId: number
    message: string
}

export const Message = (props: MessagePropsType) => {

    const {
        userId,
        friendId,
        messageUserId,
        message,
        userImgSrc,
        friendImgSrc
    } = props

    const style = messageUserId === userId ? s.user : s.friend

    const image = <img src={messageUserId === userId ? userImgSrc : friendImgSrc} alt="user's avatar"/>

    const messageElement = messageUserId === userId ?
        <div className={style}>{message}{image}</div> : <div className={style}>{image}{message}</div>

    return (
        <div className={s.message}>
            {messageElement}
        </div>
    );
};