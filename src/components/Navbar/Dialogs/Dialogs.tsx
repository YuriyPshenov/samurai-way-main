import React from 'react';
import './Dialogs.module.css';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagesPage} from "../../../App";

type DialogsPropsType = {
    messagesPageData: MessagesPage
}

const Dialogs = (props: DialogsPropsType) => {

    const {messagesPageData} = props

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {messagesPageData.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id.toString()}/>)}
            </div>
            <div className={s.messages}>
                {messagesPageData.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id.toString()}/>)}
            </div>
        </div>
    )
}

export default Dialogs;