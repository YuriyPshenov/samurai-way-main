import React from 'react';
import s from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";
import {messagesPageType} from "../../redux/State";

type DialogsPropsType = {
    messagesPage: messagesPageType
}

export const Dialogs = (props: DialogsPropsType) => {

    const {dialogsData, messagesData} = props.messagesPage

    const dialogsElements = dialogsData.map(dialog =>
        <Dialog key={dialog.id}
                id={dialog.id}
                name={dialog.name}
        />)

    return (
        <div className={s.dialogsContainer}>
            <div className={s.dialogs}>
                <h3>Dialogs</h3>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <h3>Messages</h3>
                <Messages messagesData={messagesData} />
            </div>
        </div>
    );
};
