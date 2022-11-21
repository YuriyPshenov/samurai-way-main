import React from 'react';
import './Dialogs.module.css';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Dimych</div>
                <div className={s.dialog}>Andrey</div>
                <div className={s.dialog}>Sveta</div>
                <div className={s.dialog}>Masha</div>
                <div className={s.dialog}>Viktor</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;