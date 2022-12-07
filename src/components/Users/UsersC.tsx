import React from 'react';
import s from "./Users.module.css";
import img from "../../assets/images/img.png";
import axios from "axios";
import {UsersDataType} from "../../Redux/store";

type UsersCPropsType = {
    usersData: UsersDataType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUser: (users: UsersDataType[]) => void
}

class UsersC extends React.Component<UsersCPropsType, {}> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUser(response.data.items)
        })
    }

    render() {
        return (
            <div className={s.usersContainer}>
                {
                    this.props.usersData.map(u => <div key={u.id} className={s.users}>
                        <div className={s.usersAvatar}>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : img} alt="user's avatar"/>
                            </div>
                            <div>
                                {u.followed ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> :
                                    <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
}

export default UsersC;