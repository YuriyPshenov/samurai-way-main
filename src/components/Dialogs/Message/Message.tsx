import React, {FC} from 'react';
import s from './Message.module.css';

type MessagePropsType = {
    id: number
    message: string
}

export const Message: FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>
            <div>{props.message}</div>
        </div>
    );
};