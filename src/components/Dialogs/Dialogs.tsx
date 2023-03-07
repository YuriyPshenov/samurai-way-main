import React, {FC} from 'react';
import s from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";

type MessagePropsType = {
    id: number
    message: string
}

const Message: FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>
            <div>{props.message}</div>
        </div>
    )
}

export const Dialogs = () => {

    const dialogsData = [
        {id: 1, name: 'Billy Harrington'},
        {id: 2, name: 'Tommy Magwayer'},
        {id: 3, name: 'Unknown user'},
        {id: 4, name: 'Unknown user'},
        {id: 5, name: 'Unknown user'},
        {id: 6, name: 'Unknown user'},
        {id: 7, name: 'Unknown user'},
    ]

    const messagesData = [
        {id: 1, message: 'Hi my love'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Hello'},
        {id: 4, message: 'One two three'},
        {id: 5, message: 'See you again'},
    ]

    const dialogsElements = dialogsData.map(dialog =>
        <Dialog key={dialog.id}
                id={dialog.id}
                name={dialog.name}
        />)

    const messagesElements = messagesData.map(message =>
        <Message key={message.id}
                 id={message.id}
                 message={message.message}
        />)

    return (
        <div className={s.dialogsContainer}>
            <div className={s.dialogs}>
                <h3>Dialogs</h3>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <h3>Messages</h3>
                { messagesElements }
            </div>
        </div>
    );
};
