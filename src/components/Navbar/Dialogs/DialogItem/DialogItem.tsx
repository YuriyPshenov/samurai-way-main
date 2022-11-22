import React from 'react';
import './DialogItem.module.css';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemPropsType) => {
    const {name, id} = props
    const path = `/dialogs/` + id
    return (
        <div className={s.dialog}>
            <img src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" alt="user's avatar from dialog"/>
            <NavLink activeClassName={s.active} to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;