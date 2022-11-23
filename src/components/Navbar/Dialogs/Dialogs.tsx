import React from 'react';
import './Dialogs.module.css';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {StoreType} from "../../../Redux/state";


type DialogsPropsType = {
    store: StoreType
}

const Dialogs: React.FC<DialogsPropsType> = ({store}) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {store.getState().messagesPage.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id.toString()}/>)}
            </div>
            <div className={s.messages}>
                {store.getState().messagesPage.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id.toString()}/>)}
            </div>
        </div>
    )
}

export default Dialogs;