import React from 'react';
import s from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

type DialogsPropsType = {
    dialogsData: Array<{id: number, name: string}>
    messagesData: Array<{id: number, message: string}>
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsData.map(dialog =>
        <Dialog key={dialog.id}
                id={dialog.id}
                name={dialog.name}
        />)

    const messagesElements = props.messagesData.map(message =>
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
