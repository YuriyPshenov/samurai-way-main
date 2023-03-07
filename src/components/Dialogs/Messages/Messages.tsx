import React, {FC} from 'react';
import s from './Message.module.css';
import {MessagesDataType} from "../../../redux/State";
import {Message} from "./Message/Message";

type MessagePropsType = {
    messagesData: MessagesDataType

}

export const Messages: FC<MessagePropsType> = (props) => {

    const {userId, friendId, messages, userImgSrc, friendImgSrc} = props.messagesData

    const messageElements = messages.map(m =>
        <Message key={m.idMessage}
                 userId={userId}
                 userImgSrc={userImgSrc}
                 friendId={friendId}
                 friendImgSrc={friendImgSrc}
                 messageUserId={m.id}
                 message={m.message}
        />)

    return (
        <div className={s.messages}>
            <div className={s.messagesFriendDialog}>
                <img src={friendImgSrc} alt="friend's avatar"/>
                <h4>Billy Harrington</h4>
            </div>
            {messageElements}
        </div>
    );
};