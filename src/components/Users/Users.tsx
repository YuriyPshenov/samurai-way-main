import React from 'react';
import s from './Users.module.css'
import {UsersDataType} from "../../Redux/store";

type UsersPropsType = {
    usersData: UsersDataType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUser: (users: UsersDataType[]) => void
}

const Users: React.FC<UsersPropsType> = (
    {
        usersData,
        unfollow,
        follow,
        setUser
    }) => {

    !usersData.length && setUser([
        {id: '1', photoUrl: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png', followed: false, firstName: 'Dmitry', lastName: 'K', status: 'I am a boss', address: {country: 'Belarus', city: 'Minsk'}},
        {id: '2', photoUrl: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png', followed: false, firstName: 'Svetlana', lastName: 'D', status: 'I am a boss too', address: {country: 'Russia', city: 'Moscow'}},
        {id: '3', photoUrl: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png', followed: false, firstName: 'Sergei', lastName: 'S', status: 'I am a boss too', address: {country: 'Ukraine', city: 'Kiev'}},
        {id: '4', photoUrl: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png', followed: false, firstName: 'Ekaterina', lastName: 'K', status: 'I am a boss too', address: {country: 'Belarus', city: 'Minsk'}},
        {id: '5', photoUrl: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png', followed: false, firstName: 'Dmitry', lastName: 'K', status: 'I am a boss', address: {country: 'Belarus', city: 'Minsk'}},
        {id: '6', photoUrl: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png', followed: false, firstName: 'Dmitry', lastName: 'K', status: 'I am a boss', address: {country: 'Belarus', city: 'Minsk'}},
        {id: '7', photoUrl: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png', followed: false, firstName: 'Dmitry', lastName: 'K', status: 'I am a boss', address: {country: 'Belarus', city: 'Minsk'}},
        {id: '8', photoUrl: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png', followed: false, firstName: 'Dmitry', lastName: 'K', status: 'I am a boss', address: {country: 'Belarus', city: 'Minsk'}},
    ])

    return (
        <div className={s.usersContainer}>
            {
                usersData.map(u => <div key={u.id} className={s.users}>
                    <div className={s.usersAvatar}>
                        <div>
                            <img src={u.photoUrl} alt="user's avatar"/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => unfollow(u.id)}>Unfollow</button> : <button onClick={() => follow(u.id)}>Follow</button>}
                        </div>
                    </div>
                    <span className={s.userInfo}>
                        <div className={s.userNameStatus}>
                            <div>{`${u.firstName} ${u.lastName}`}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{u.address.country}, </div>
                            <div>{u.address.city}</div>
                        </div>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;