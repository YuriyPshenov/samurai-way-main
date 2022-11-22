import React from 'react';
import './Dialogs.module.css';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../../App";

type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}

const Dialogs = (props: DialogsPropsType) => {

    const {dialogsData, messagesData} = props

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id.toString()}/>)}
            </div>
            <div className={s.messages}>
                {messagesData.map(m => <Message key={m.id} message={m.message} id={m.id.toString()}/>)}
            </div>
        </div>
    )
}

export default Dialogs;