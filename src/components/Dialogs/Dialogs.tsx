import React, {FC} from 'react';
import s from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";

type MessagePropsType = {
    message: string
}

const Message: FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>
            <div>{props.message}</div>
        </div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogsContainer}>
            <div className={s.dialogs}>
                <h3>Dialogs</h3>
                <Dialog name="Billy Harrington" id={1} />
            </div>
            <div className={s.messages}>
                <h3>Messages</h3>
                <Message message="Hello" />
                <Message message="Hello" />
                <Message message="Hello" />
                <Message message="Hello" />
                <Message message="Hello" />
            </div>
        </div>
    );
};
