import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


export const Dialogs = () => {
    return (
        <div className={s.dialogsContainer}>
            <div className={s.dialogs}>
                <h3>Dialogs</h3>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Billy Harrington</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Tommy Magwayer</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Chad Chedov</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <h3>Messages</h3>
                <div className={s.message}>
                    <div>Lorem Impsum</div>
                </div>
                <div className={s.message}>
                    <div>Lorem Impsum</div>
                </div>
                <div className={s.message}>
                    <div>Lorem Impsum</div>
                </div>
            </div>
        </div>
    );
};
