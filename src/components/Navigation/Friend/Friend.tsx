import React from 'react';
import s from './Friend.module.css'

type FriendPropsType = {
    id: number
    name: string
}

const Friend = (props: FriendPropsType) => {

    const {name} = props

    const onlyFirstName = name.split(' ')[0]

    return (
        <div className={s.friend}>
            <img src="https://img.freepik.com/free-icon/user_318-481462.jpg" alt="Friends avatar"/>
            <span>{ onlyFirstName }</span>
        </div>
    );
};

export default Friend;