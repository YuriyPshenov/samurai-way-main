import React from 'react';
import s from './Dialogs.module.css';


export const Dialogs = () => {
    return (
        <div className={s.dialogsContainer}>
            <div className={s.dialogs}>
                <div>Billy Harrington</div>
                <div>Tommy Magwayer</div>
                <div>Chad Chedov</div>
            </div>
            <div className={s.messages}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>
    );
};
