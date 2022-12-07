import React from 'react';
import s from './Users.module.css'
import {UsersDataType} from "../../Redux/store";
import axios from "axios";
import img from "../../assets/images/img.png"

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

    let getUsers = () => {
        if (usersData.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                setUser(response.data.items)
            })
        }
    }

    return (
        <div className={s.usersContainer}>
            <button onClick={getUsers}>Get Users</button>
            {
                usersData.map(u => <div key={u.id} className={s.users}>
                    <div className={s.usersAvatar}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : img} alt="user's avatar"/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => unfollow(u.id)}>Unfollow</button> : <button onClick={() => follow(u.id)}>Follow</button>}
                        </div>
                    </div>
                    <span className={s.userInfo}>
                        <div className={s.userNameStatus}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{'u.address.country'}, </div>
                            <div>{'u.address.city'}</div>
                        </div>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;