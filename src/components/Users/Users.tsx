import React, {FC} from 'react';
import s from "./Users.module.css";
import {v1} from "uuid";
import img from "../../assets/images/img.png";
import {UsersDataType} from "../../Redux/store";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    onPageChanged: (newCurrentPage: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    usersData: UsersDataType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}

const Users: FC<UsersPropsType> = (
    {
        onPageChanged,
        totalUsersCount,
        pageSize,
        currentPage,
        usersData,
        unfollow,
        follow
    }
) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.usersContainer}>
            <div className={s.pageSize}>
                {pages.map((p) =>
                    <span key={v1()}
                          onClick={() => onPageChanged(p)}
                          className={currentPage === p ? s.selectedPage : ''}>
                    {p}
                    </span>
                )}
            </div>
            {
                usersData.map(u => <div key={u.id} className={s.users}>
                    <div className={s.usersAvatar}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : img} alt="user's avatar"/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => unfollow(u.id)}>Unfollow</button> :
                                <button onClick={() => follow(u.id)}>Follow</button>}
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