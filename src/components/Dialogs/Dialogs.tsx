import React from 'react';
import s from './Dialogs.module.css';


export const Dialogs = () => {
    return (
        <div className={s.dialogsContainer}>
            <div className={s.dialogs}>
                <h3>Dialogs</h3>
                <div className={s.dialog + ' ' + s.active}>Billy Harrington</div>
                <div className={s.dialog}>Tommy Magwayer</div>
                <div className={s.dialog}>Chad Chedov</div>
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
