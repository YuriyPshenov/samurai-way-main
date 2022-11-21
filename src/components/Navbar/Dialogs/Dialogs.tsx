import React from 'react';
import './Dialogs.module.css';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}

type MessagePropsType = {
    message: string
    id: string
}

const DialogItem = (props: DialogItemPropsType) => {
    const {name, id} = props
    const path = `/dialogs/` + id
    return <div className={s.dialog}><NavLink activeClassName={s.active} to={path}>{name}</NavLink></div>
}

const Message = (props: MessagePropsType) => {
    const {message, id} = props
    return <div className={s.message} id={id}>{message}</div>
}

const Dialogs = () => {

    const dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Masha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]

    const messagesData = [
        {id: 1, message: 'Yo'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'whats your name'},
        {id: 5, message: 'Hey'},
        {id: 6, message: 'im here'}
    ]

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