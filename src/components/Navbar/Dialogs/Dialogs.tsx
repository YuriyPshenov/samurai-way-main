import React, {ChangeEvent} from 'react';
import './Dialogs.module.css';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, MessagesPageType, updateNewMessageTextActionCreator} from "../../../Redux/state";


type DialogsPropsType = {
    messagesPage: MessagesPageType
    dispatch: (action: {type: string, newText?: string}) => void
}

const Dialogs: React.FC<DialogsPropsType> = ({messagesPage, dispatch}) => {

    const onTextareaMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageTextActionCreator(event.currentTarget.value))
    }

    const onAddMessageClick = () => {
        dispatch(addMessageActionCreator())
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
                <textarea onChange={onTextareaMessageChange} value={messagesPage.newMessageText}></textarea>
                <button onClick={onAddMessageClick}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;