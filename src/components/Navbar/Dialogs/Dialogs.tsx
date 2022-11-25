import React, {ChangeEvent} from 'react';
import './Dialogs.module.css';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagesPageType} from "../../../Redux/store";


type DialogsPropsType = {
    messagesPage: MessagesPageType
    updateNewMessageText: (value: string) => void
    addMessage: (value: string) => void
}

const Dialogs: React.FC<DialogsPropsType> = (
    {
        messagesPage,
        updateNewMessageText,
        addMessage,
    }) => {

    const textareaMessageOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessageText(event.currentTarget.value)
    }

    const addMessageOnClick = () => {
        addMessage(messagesPage.newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {messagesPage.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id.toString()}/>)}
            </div>
            <div className={s.messages}>
                {messagesPage.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id.toString()}/>)}
            </div>
            <div className={s.textAreaAddMessage}>
                <textarea onChange={textareaMessageOnChange} value={messagesPage.newMessageText}></textarea>
                <button onClick={addMessageOnClick}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;