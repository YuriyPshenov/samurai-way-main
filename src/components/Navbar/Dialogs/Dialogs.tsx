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
}

const DialogItem = (props: DialogItemPropsType) => {
    const {name, id} = props
    const path = `/dialogs/` + id
    return <div className={s.dialog}><NavLink activeClassName={s.active} to={path}>{name}</NavLink></div>
}

const Message = (props: MessagePropsType) => {
    const {message} = props
    return <div className={s.message}>{message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Dimych'} id={'1'}/>
                <DialogItem name={'Andrey'} id={'2'}/>
                <DialogItem name={'Sveta'} id={'3'}/>
                <DialogItem name={'Masha'} id={'4'}/>
                <DialogItem name={'Viktor'} id={'5'}/>
                <DialogItem name={'Valera'} id={'6'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Yo'}/>
                <Message message={'How are you?'}/>
                <Message message={'Hi'}/>
            </div>
        </div>
    )
}

export default Dialogs;